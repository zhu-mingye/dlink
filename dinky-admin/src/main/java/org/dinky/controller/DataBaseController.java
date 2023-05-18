/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package org.dinky.controller;

import org.dinky.assertion.Asserts;
import org.dinky.common.result.ProTableResult;
import org.dinky.common.result.Result;
import org.dinky.constant.CommonConstant;
import org.dinky.metadata.driver.DriverPool;
import org.dinky.metadata.result.JdbcSelectResult;
import org.dinky.model.Column;
import org.dinky.model.DataBase;
import org.dinky.model.QueryData;
import org.dinky.model.Schema;
import org.dinky.model.SqlGeneration;
import org.dinky.service.DataBaseService;
import org.dinky.utils.MessageResolverUtils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * DataBaseController
 *
 * @since 2021/7/20 23:48
 */
@Slf4j
@RestController
@RequestMapping("/api/database")
@RequiredArgsConstructor
public class DataBaseController {

    private final DataBaseService databaseService;

    /**
     * save or update database
     *
     * @param database {@link DataBase}
     * @return {@link Result}< {@link Void}>
     */
    @PutMapping
    public Result<Void> saveOrUpdate(@RequestBody DataBase database) {
        if (databaseService.saveOrUpdateDataBase(database)) {
            DriverPool.remove(database.getName());
            return Result.succeed(MessageResolverUtils.getMessage("save.success"));
        } else {
            return Result.failed(MessageResolverUtils.getMessage("save.failed"));
        }
    }

    /**
     * get all database
     *
     * @param para {@link JsonNode}
     * @return {@link ProTableResult}< {@link DataBase}>
     */
    @PostMapping
    public ProTableResult<DataBase> listDataBases(@RequestBody JsonNode para) {
        return databaseService.selectForProTable(para);
    }

    /**
     * batch delete database , this method is {@link @Deprecated} , please use {@link
     * #deleteById(Integer id)}
     *
     * @param para {@link JsonNode}
     * @return {@link Result}< {@link Void}>
     */
    @DeleteMapping
    @Deprecated
    public Result<Void> deleteMul(@RequestBody JsonNode para) {
        if (para.size() > 0) {
            List<Integer> error = new ArrayList<>();
            for (final JsonNode item : para) {
                Integer id = item.asInt();
                if (!databaseService.removeById(id)) {
                    error.add(id);
                }
            }
            if (error.size() == 0) {
                return Result.succeed("删除成功");
            } else {
                return Result.succeed("删除部分成功，但" + error + "删除失败，共" + error.size() + "次失败。");
            }
        } else {
            return Result.failed("请选择要删除的记录");
        }
    }

    /**
     * delete by id
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link Void}>
     */
    @DeleteMapping("/delete")
    public Result<Void> deleteById(@RequestParam Integer id) {
        if (databaseService.removeById(id)) {
            return Result.succeed(MessageResolverUtils.getMessage("delete.success"));
        }
        return Result.failed(MessageResolverUtils.getMessage("delete.failed"));
    }

    /**
     * enable or disable by id
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link Void}>
     */
    @PutMapping("/enable")
    public Result<Void> enable(@RequestParam Integer id) {
        if (databaseService.enable(id)) {
            return Result.succeed(MessageResolverUtils.getMessage("modify.success"));
        }
        return Result.failed(MessageResolverUtils.getMessage("modify.failed"));
    }

    /**
     * get one by id
     *
     * @param database {@link DataBase}
     * @return {@link Result}< {@link DataBase}>
     */
    @PostMapping("/getOneById")
    @Deprecated
    public Result<DataBase> getOneById(@RequestBody DataBase database) {
        database = databaseService.getById(database.getId());
        return Result.succeed(database, MessageResolverUtils.getMessage("response.get.success"));
    }

    /**
     * get all enabled database
     *
     * @return {@link Result}< {@link List}< {@link DataBase}>>
     */
    @GetMapping("/listEnabledAll")
    public Result<List<DataBase>> listEnabledAll() {
        List<DataBase> dataBases = databaseService.listEnabledAll();
        return Result.succeed(dataBases, MessageResolverUtils.getMessage("response.get.success"));
    }

    /**
     * test connect database
     *
     * @param database {@link DataBase}
     * @return {@link Result}< {@link Void}>
     */
    @PostMapping("/testConnect")
    public Result<Void> testConnect(@RequestBody DataBase database) {
        String msg = databaseService.testConnect(database);
        boolean isHealthy = Asserts.isEquals(CommonConstant.HEALTHY, msg);
        if (isHealthy) {
            return Result.succeed("数据源连接测试成功!");
        } else {
            return Result.failed(msg);
        }
    }

    /**
     * heart beat check all database, this method is {@link @Deprecated} , please use {@link
     * #checkHeartBeatById(Integer id)}
     *
     * @return {@link Result}< {@link Void}>
     */
    @PostMapping("/checkHeartBeats")
    @Deprecated
    public Result<Void> checkHeartBeats() {
        List<DataBase> dataBases = databaseService.listEnabledAll();
        for (DataBase dataBase : dataBases) {
            try {
                databaseService.checkHeartBeat(dataBase);
            } finally {
                databaseService.updateById(dataBase);
            }
        }
        return Result.succeed("状态刷新完成");
    }

    /**
     * heart beat check by id, this method is {@link @Deprecated} , please use {@link
     * #checkHeartBeatByDataSourceId(Integer id)}
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link Void}>
     */
    @GetMapping("/checkHeartBeatById")
    @Deprecated
    public Result<Void> checkHeartBeatById(@RequestParam Integer id) {
        DataBase dataBase = databaseService.getById(id);
        Asserts.checkNotNull(dataBase, "该数据源不存在！");
        String error = "";
        try {
            databaseService.checkHeartBeat(dataBase);
        } catch (Exception e) {
            error = e.getMessage();
        }
        databaseService.updateById(dataBase);
        if (Asserts.isNotNullString(error)) {
            return Result.failed(error);
        }
        return Result.succeed("数据源连接正常");
    }

    /**
     * heart beat check by id
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link Void}>
     */
    @PutMapping("/checkHeartBeatByDataSourceId")
    public Result<Void> checkHeartBeatByDataSourceId(@RequestParam Integer id) {
        DataBase dataBase = databaseService.getById(id);
        Asserts.checkNotNull(dataBase, "该数据源不存在！");
        String error = "";
        try {
            databaseService.checkHeartBeat(dataBase);
        } catch (Exception e) {
            error = e.getMessage();
        }
        databaseService.updateById(dataBase);
        if (Asserts.isNotNullString(error)) {
            return Result.failed(error);
        }
        return Result.succeed("数据源连接正常");
    }

    /**
     * get all database of schemas and tables
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link List}< {@link Schema}>>
     */
    @Cacheable(cacheNames = "metadata_schema", key = "#id")
    @GetMapping("/getSchemasAndTables")
    public Result<List<Schema>> getSchemasAndTables(@RequestParam Integer id) {
        return Result.succeed(databaseService.getSchemasAndTables(id), "获取成功");
    }

    /**
     * clear cache of schemas and tables
     *
     * @param id {@link Integer}
     * @return {@link Result}< {@link String}>
     */
    @CacheEvict(cacheNames = "metadata_schema", key = "#id")
    @GetMapping("/unCacheSchemasAndTables")
    public Result<String> unCacheSchemasAndTables(@RequestParam Integer id) {
        return Result.succeed("clear cache", "success");
    }

    /**
     * get columns of table
     *
     * @param id {@link Integer}
     * @param schemaName {@link String}
     * @param tableName {@link String}
     * @return {@link Result}< {@link List}< {@link Column}>>
     */
    @GetMapping("/listColumns")
    public Result<List<Column>> listColumns(
            @RequestParam Integer id,
            @RequestParam String schemaName,
            @RequestParam String tableName) {
        return Result.succeed(databaseService.listColumns(id, schemaName, tableName), "获取成功");
    }

    /**
     * query data of table
     *
     * @param queryData {@link QueryData}
     * @return {@link Result}< {@link JdbcSelectResult}>
     */
    @PostMapping("/queryData")
    public Result<JdbcSelectResult> queryData(@RequestBody QueryData queryData) {
        JdbcSelectResult jdbcSelectResult = databaseService.queryData(queryData);
        if (jdbcSelectResult.isSuccess()) {
            return Result.succeed(jdbcSelectResult, "获取成功");
        } else {
            return Result.failed(jdbcSelectResult, "查询失败");
        }
    }

    /**
     * exec sql
     *
     * @param queryData {@link QueryData}
     * @return {@link Result}< {@link JdbcSelectResult}>
     */
    @PostMapping("/execSql")
    public Result<JdbcSelectResult> execSql(@RequestBody QueryData queryData) {
        JdbcSelectResult jdbcSelectResult = databaseService.execSql(queryData);
        if (jdbcSelectResult.isSuccess()) {
            return Result.succeed(jdbcSelectResult, "获取成功");
        } else {
            return Result.failed(jdbcSelectResult, "查询失败");
        }
    }

    /**
     * get sql generation
     *
     * @param id {@link Integer}
     * @param schemaName {@link String}
     * @param tableName {@link String}
     * @return {@link Result}< {@link SqlGeneration}>
     */
    @GetMapping("/getSqlGeneration")
    public Result<SqlGeneration> getSqlGeneration(
            @RequestParam Integer id,
            @RequestParam String schemaName,
            @RequestParam String tableName) {
        return Result.succeed(databaseService.getSqlGeneration(id, schemaName, tableName), "获取成功");
    }

    /**
     * copy database
     *
     * @param database {@link DataBase}
     * @return {@link Result}< {@link Void}>
     */
    @PostMapping("/copyDatabase")
    public Result<Void> copyDatabase(@RequestBody DataBase database) {
        if (databaseService.copyDatabase(database)) {
            return Result.succeed("复制成功!");
        } else {
            return Result.failed("复制失败！");
        }
    }
}