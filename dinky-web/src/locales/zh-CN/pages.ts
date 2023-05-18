/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  //-------------------------------- common --------------------------------
  'layouts.userLayout.title': 'Dinky 实时计算平台',
  'login.error': '登录失败，请重试! 原因：{msg}',
  'login.result': '{msg}\t\t{time}',
  'login.notbindtenant': '您还没有绑定租户，请联系管理员',
  'login.username.placeholder': '用户名',
  'login.username.required': '用户名是必填项！',
  'login.chooseTenant': '请选择租户',
  'login.chooseTenantFailed': '租户选择失败，请检查。。。',
  'login.chooseTenantSuccess': '{msg}，使用【 {tenantCode} 】进入系统，加载中。。。',
  'login.password.placeholder': '密码',
  'login.password.required': '密码是必填项！',
  'login.rememberMe': '自动登录',
  'admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'about.Community': '欢迎加入 Dinky 官方社区，共建共赢',
  'about.QQcode': 'QQ官方社区群',
  'about.wechatCode': '微信公众号',
  'about.dingTalkCode': '钉钉官方社区群',
  'about.wechatApply':
    '微信用户社区群：推荐，添加微信号 wenmo_ai 邀请进群 （申请备注 Dinky + 企业名 + 职位，不写不批）',
  'about.precautions': '注意事项',
  'about.usingHelp': '使用帮助',
  'about.communityRules': '社区守则',
  'about.communityRules.1': '禁止发布或讨论与本群主旨无关或不良的内容，一经发现立马被踢。',
  'about.communityRules.2':
    '关于 Bug 反馈与功能改进或提议请通过 issue 进行，请阅读 issue 文档要求。',
  'about.communityRules.3':
    '部署和使用前请先仔细阅读 Readme、公众号文章、官网文档、B站视频。',
  'about.communityRules.4': '群提问题请礼貌并且说明【版本、执行模式、操作描述、截图】。',
  'about.communityRules.5': ' 登记谁在使用 Dinky，可进入企业用户群提供技术支持。',

  //-------------------------------- auth center --------------------------------
  // user
  'user.manager': '用户管理',
  'user.username': '用户名',
  'user.jobnumber': '工号',
  'user.phone': '手机号',
  'user.nickname': '昵称',
  'user.create': '添加用户',
  'user.update': '修改用户',
  'user.assignRole': '分配角色',
  'user.delete': '删除用户',
  'user.deleteConfirm': '您确定要删除此用户吗？',
  'user.usernamePlaceholder': '请输入用户名',
  'user.jobnumberPlaceholder': '请输入工号',
  'user.nicknamePlaceholder': '请输入昵称',
  'user.phonePlaceholder': '请输入手机号',
  'user.oldpwd': '旧密码',
  'user.newpwd': '新密码',
  'user.repeatpwd': '重复新密码',
  'user.oldpwdPlaceholder': '请输入旧密码',
  'user.newpwdPlaceholder': '请输入新密码',
  'user.repeatpwdPlaceholder': '请重复输入新密码',
  'user.oldNewPwdNoMatch': '两次输入的新密码不一致',

  // tenant
  'tenant.TenantManager': '租户管理',
  'tenant.TenantCode': '租户编码',
  'tenant.AssignUser': '分配用户',
  'tenant.create': '创建租户',
  'tenant.update': '修改租户',
  'tenant.EnterTenantCode': '请输入租户编码!',
  'tenant.EnterTenantNote': '请输入租户备注/描述信息!',
  'tenant.delete': '删除租户',
  'tenant.deleteConfirm': '您确定要删除此租户吗？',

  // role
  'role.roleManagement': '角色管理',
  'role.roleCode': '角色编码',
  'role.roleName': '角色名称',
  'role.belongTenant': '所属租户',
  'role.create': '创建角色',
  'role.update': '修改角色',
  'role.EnterRoleCode': '请输入角色编码!',
  'role.EnterRoleName': '请输入角色名称!',
  'role.selectNameSpace': '请选择命名空间!',
  'role.EnterNote': '请输入角色的备注/描述信息!',
  'role.delete': '删除角色',
  'role.deleteConfirm': '您确定要删除此角色吗？',


  // rowPermissions
  'rowPermissions.management': '行权限管理',
  'rowPermissions.tableName': '表名',
  'rowPermissions.tableNamePlaceholder': '请输入表名',
  'rowPermissions.expression': '表达式',
  'rowPermissions.expressionPlaceholder': '请输入表达式',
  'rowPermissions.deleteConfirm': '您确定要删除此行权限吗？',
  'rowPermissions.roleName': '角色名称',
  'rowPermissions.roleNamePlaceholder': '请选择角色',
  'rowPermissions.create': '创建行权限',
  'rowPermissions.update': '修改行权限',


  //-------------------------------- register center --------------------------------

  // =============== data source =======================
  // datasource list page
  'rc.ds.management': '数据源管理',
  'rc.ds.name': '名称',
  'rc.ds.groupName': '分组类型',
  'rc.ds.type': '数据源类型',
  'rc.ds.url': '数据库连接 URL',
  'rc.ds.username': '用户名',
  'rc.ds.password': '密码',
  'rc.ds.flinkConfig': 'Flink 连接配置',
  'rc.ds.flinkTemplate': 'Flink 连接模板',
  'rc.ds.create': '创建数据源',
  'rc.ds.modify': '修改数据源',
  'rc.ds.delete': '删除数据源',
  'rc.ds.deleteConfirm': '确定删除该数据源吗？',
  'rc.ds.namePlaceholder': '请输入名称!',
  'rc.ds.groupNamePlaceholder': '请选择分组类型!',
  'rc.ds.typePlaceholder': '请选择数据源类型! 输入关键词搜索',
  'rc.ds.urlPlaceholder': '请输入格式正确的 url 连接!',
  'rc.ds.usernamePlaceholder': '请输入用户名!',
  'rc.ds.passwordPlaceholder': '请输入密码!',
  'rc.ds.flinkConfigPlaceholder': '请指定 Flink With 的默认配置!',
  'rc.ds.flinkConfigTooltip': '避免私密信息泄露，同时作为全局变量复用连接配置，在FlinkSQL中可使用 `变量引用方式` 来加载连接配置。说明：引用名称指的是唯一标识，即该表单中的`名称`。注意需要开启全局变量（原片段机制）',
  'rc.ds.flinkTemplatePlaceholder': '请指定 Flink With 的生成模板!',
  'rc.ds.flinkTemplateTooltip': 'Flink 连接模板作用是为生成 FlinkSQL DDL 而扩展的功能。其中 `变量引用方式`中的 schemaName 是指动态获取数据库，`变量引用方式`中的 tableName 动态获取表名称',
  'rc.ds.source': '来源',
  'rc.ds.warehouse': '数仓',
  'rc.ds.application': '应用',
  'rc.ds.backup': '备份',
  'rc.ds.other': '其他',
  'rc.ds.enter': '点击列表中的 icon 图片进入该数据源的详情页! 支持查看该数据源的库&表信息,以及可以进行即时查询',
  'rc.ds.enter.error': '该数据源状态异常无法进入,心跳正常后方可进入!',

  // datasource of schema info page
  // tags
  'rc.ds.detail.tag.desc': '描述',
  'rc.ds.detail.tag.query': '查询',
  'rc.ds.detail.tag.gensql': '生成 SQL',
  'rc.ds.detail.tag.console': '控制台',

  // tips
  'rc.ds.detail.tips': '点击左侧的表,获取表的描述信息',

  // columns info
  'rc.ds.no': '序号',
  'rc.ds.columnName': '名称',
  'rc.ds.columnType': '类型',
  'rc.ds.comment': '注释',
  'rc.ds.primarykey': '主键',
  'rc.ds.autoIncrement': '自增',
  'rc.ds.isNull': '非空',
  'rc.ds.null': '可为空',
  'rc.ds.default': '默认值',
  'rc.ds.length': '长度',
  'rc.ds.precision': '精度',
  'rc.ds.decimalDigits': '小数范围',
  'rc.ds.character': '字符集',
  'rc.ds.collationRule': '排序规则',
  'rc.ds.javaType': 'Java 类型',


  // alert instance
  'rc.ai.management': '告警实例管理',
  'rc.ai.type': '类型',
  'rc.ai.name': '名称',
  'rc.ai.namePleaseHolder': '请输入告警实例名称',
  'rc.ai.delete': '删除告警实例',
  'rc.ai.create': '创建告警实例',
  'rc.ai.modify': '修改告警实例',
  'rc.ai.deleteConfirm': '确定删除选中的告警实例吗？',
  'rc.ai.dingTalk': '钉钉告警配置',
  'rc.ai.email': '邮箱告警配置',
  'rc.ai.feishu': '飞书告警配置',
  'rc.ai.wechat': '企业微信告警配置',
  'rc.ai.webhookPleaseHolder': '请输入 webhook 地址',
  'rc.ai.keywordPleaseHolder': '请输入关键词',
  'rc.ai.secretPleaseHolder': '请输入 密令',
  'rc.ai.proxyPleaseHolder': '请输入代理主机',
  'rc.ai.portPleaseHolder': '请输入代理端口',
  'rc.ai.userPleaseHolder': '请输入代理用户',
  'rc.ai.atUsersPleaseHolder': '请输入被@用户ID(需要飞书后台的用户ID),多个逗号隔开!',
  'rc.ai.passwordPleaseHolder': '请输入密码',
  'rc.ai.atMobilesPleaseHolder': '请输入@手机号 多个使用英文逗号分开 ',
  'rc.ai.msgtypePleaseHolder': '请选择消息发送类型',
  'rc.ai.corpIdPleaseHolder': '请输入 企业Id',
  'rc.ai.wechatAtUsersPleaseHolder': '请输入被@用户ID(企微用户名全拼),多个逗号隔开!',
  'rc.ai.sendTypePleaseHolder': '请选择发送方式！',
  'rc.ai.agentIdPleaseHolder': '请输入 AgentId',
  'rc.ai.receiversPleaseHolder': '请输入收件人邮箱！多个英文逗号隔开',
  'rc.ai.receiverCcsPleaseHolder': '请输入抄送人邮箱！多个英文逗号隔开!',
  'rc.ai.serverHostPleaseHolder': '邮件服务器主机',
  'rc.ai.serverPortPleaseHolder': '请输入邮件服务器端口',
  'rc.ai.senderPleaseHolder': '请输入邮件服务器发送者昵称',
  'rc.ai.emailUserPleaseHolder': '请输入邮箱用户名',
  'rc.ai.emailPasswordPleaseHolder': '请输入邮箱密码! 注意:密码为授权码',
  'rc.ai.smtpSslTrustPleaseHolder': '请输入受信任域',
  'rc.ai.xls.file.pathPleaseHolder': '请输入XLS存放目录! 默认为 /tmp/xls',
  'rc.ai.webhook': 'WebHook 地址',
  'rc.ai.keyword': '关键词',
  'rc.ai.secret': '密令',
  'rc.ai.isEnableProxy': '是否启用代理',
  'rc.ai.proxy': '代理',
  'rc.ai.port': '端口',
  'rc.ai.user': '用户名',
  'rc.ai.password': '密码',
  'rc.ai.isAtAll': '是否@全部',
  'rc.ai.corpId': '企业Id',
  'rc.ai.atMobiles': '@手机号',
  'rc.ai.sendType': '发送方式',
  'rc.ai.agentId': '代理ID',
  'rc.ai.atUsers': '被@用户',
  'rc.ai.receivers': '收件人',
  'rc.ai.receiverCcs': '抄送人',
  'rc.ai.serverHost': '邮件服务器Host',
  'rc.ai.serverPort': '邮件服务器Port',
  'rc.ai.sender': '发送者昵称',
  'rc.ai.enableSmtpAuth': '开启邮箱验证',
  'rc.ai.emailUser': '邮箱用户名',
  'rc.ai.emailPassword': '邮箱密码',
  'rc.ai.starttlsEnable': '开启tls证书',
  'rc.ai.sslEnable': '开启SSL',
  'rc.ai.smtpSslTrust': '受信任域',
  'rc.ai.xls.file.path': 'XLS存放目录',
  'rc.ai.msgtype': '展示方式',
  'rc.ai.sendType.app': '应用',
  'rc.ai.sendType.wechat': '群聊',
  'rc.ai.markdown': 'MarkDown',
  'rc.ai.text': '普通文本',
  'rc.ai.post': '富文本',
  'rc.ai.table': '表格',
  'rc.ai.attachment': '附件',
  'rc.ai.tableAttachment': '表格和附件',

  // alert group
  'rc.ag.management': '告警组管理',
  'rc.ag.name': '告警组名称',
  'rc.ag.groupid': '告警组ID',
  'rc.ag.alertInstanceIds': '告警实例',
  'rc.ag.chooseAlertInstanceIds': '请选择告警组实例',
  'rc.ag.inputName': '请输入告警组名称',
  'rc.ag.create': '创建告警组',
  'rc.ag.modify': '修改告警组',
  'rc.ag.delete': '删除告警组',
  'rc.ag.deleteConfirm': '确定删除该告警组吗？',
  'rc.ag.alertCount': '告警实例数: {count}',

  // doc
  'rc.doc.management': '文档管理',
  'rc.doc.name': '名称',
  'rc.doc.id': '文档 ID',
  'rc.doc.category': '文档类型',
  'rc.doc.functionType': '函数类型',
  'rc.doc.subFunctionType': '子类型',
  'rc.doc.description': '描述',
  'rc.doc.fillValue': '填充值',
  'rc.doc.version': '版本',
  'rc.doc.create': '创建文档',
  'rc.doc.modify': '修改文档',
  'rc.doc.delete': '删除文档',
  'rc.doc.deleteConfirm': '确定删除此文档吗？',
  'rc.doc.namePlaceholder': '请输入名称!',
  'rc.doc.versionPlaceholder': '请选择该文档所属版本!',
  'rc.doc.fillValuePlaceholder': '请输入填充值,编辑器内使用名称触发提示 eg: 如果希望在函数LTRIM(parms)中输入参数 则语法为: LTRIM(${1:})  此时的1代表第一个光标 如需多个 数字+1即可 tab键切换光标 ; 如不需要参数则直接输入期望填充值',
  'rc.doc.fillValueHelp': '请输入填充值',
  'rc.doc.descriptionPlaceholder': '请输入文档描述信息!',
  'rc.doc.typePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.subTypePlaceholder': '请选择该文档所属函数类型!',
  'rc.doc.categoryPlaceholder': '请选择该文档所属类型!',

  // global variable
  'rc.gv.Management': '全局变量管理',
  'rc.gv.id': '全局变量 ID',
  'rc.gv.name': '名称',
  'rc.gv.value': '变量值',
  'rc.gv.create': '创建全局变量',
  'rc.gv.modify': '修改全局变量',
  'rc.gv.delete': '删除全局变量',
  'rc.gv.deleteConfirm': '确定删除该全局变量吗？',
  'rc.gv.namePlaceholder': '请输入名称!',
  'rc.gv.valuePlaceholder': '请输入全局变量值',

  // git project
  'rc.gp.management': 'Git 项目管理(Beta)',
  'rc.gp.id': '项目 ID',
  'rc.gp.name': '项目名称',
  'rc.gp.url': '项目地址',
  'rc.gp.branch': '分支',
  'rc.gp.username': '用户名',
  'rc.gp.password': '密码',
  'rc.gp.privateKey': '私钥',
  'rc.gp.pom': 'Pom文件路径',
  'rc.gp.buildArgs': '构建参数',
  'rc.gp.codeType': '代码类型',
  'rc.gp.type': 'Clone 方式',
  'rc.gp.description': '描述',
  'rc.gp.lastBuild': '最后构建时间',
  'rc.gp.buildState': '构建状态',
  'rc.gp.buildStep': '构建步骤',
  'rc.gp.udfClassList': 'UDF类列表',
  'rc.gp.create': '创建项目',
  'rc.gp.modify': '修改项目',
  'rc.gp.delete': '删除项目',
  'rc.gp.deleteConfirm': '此操作会删除该项目下所有下载的代码! \n请谨慎操作!! \n此操作不可逆!!\n 你确定删除此项目吗?',
  'rc.gp.namePlaceholder': '请输入名称!',
  'rc.gp.urlPlaceholder': '请输入项目地址!',
  'rc.gp.branchPlaceholder': '请选择分支!',
  'rc.gp.usernamePlaceholder': '请输入用户名!',
  'rc.gp.passwordPlaceholder': '请输入密码!',
  'rc.gp.privateKeyPlaceholder': '输入私钥路径，eg：~/.ssh/id_rsa',
  'rc.gp.pomPlaceholder': '请输入POM文件路径!',
  'rc.gp.buildArgsPlaceholder': '请输入构建参数!',
  'rc.gp.codeTypePlaceholder': '请选择代码类型!',
  'rc.gp.build': '构建',
  'rc.gp.buildConfirm': '确定开始构建该项目吗？',
  'rc.gp.log': '日志',
  'rc.gp.codeTree': '查看代码',
  'rc.gp.codeTree.clickShow': '点击左侧文件查看代码',
  'rc.gp.codeTree.unSupportView': '不支持查看该文件类型',
  'rc.gp.build.step.0': '未构建',
  'rc.gp.build.step.1': '环境检查',
  'rc.gp.build.step.2': '克隆项目',
  'rc.gp.build.step.3': '编译构建',
  'rc.gp.build.step.4': '获取 Jar 包',
  'rc.gp.build.step.5': '分析 UDF',
  'rc.gp.build.step.6': '完成',
  'rc.gp.buildSuccess': '构建成功',
  'rc.gp.buildFail': '构建失败',
  'rc.gp.building': '构建中',
  'rc.gp.notBuild': '未构建',
  'rc.gp.buildingTip': '构建中，请稍后...',

  // udf template
  'rc.udf.management': 'UDF 模板管理',
  'rc.template.name': '模板名',
  'rc.template.namePlaceholder': '请输入模板名！',
  'rc.template.codeType': '代码类型',
  'rc.template.codeTypePlaceholder': '请选择代码类型！',
  'rc.template.functionType': '函数类型',
  'rc.template.functionTypePlaceholder': '请选择函数类型！',
  'rc.template.templateCodeLabel': '模板代码（{language}）',
  'rc.template.templateCode': '模板代码',
  'rc.template.templateCodePlaceholder': '请编辑模板代码！',
  'rc.template.delete': '删除模板！',
  'rc.template.deleteConfirm': '确定删除该模板吗?',
  'rc.template.create': '创建 UDF 模板',
  'rc.template.modify': '修改 UDF 模板',


  //-------------------------------- setting center --------------------------------
  // process
  'sys.process.id': '进程ID',
  'sys.process.name': '进程名',
  'sys.process.taskId': '任务ID',
  'sys.process.type': '类型',
  'sys.process.status': '状态',
  'sys.process.startTime': '开始时间',
  'sys.process.endTime': '结束时间',
  'sys.process.duration': '耗时',
  'sys.process.operator': '操作人',
  'sys.process.viewInfoLog': '查看 Info 级别日志',
  'sys.process.viewErrorLog': '查看 Error 级别日志',
  'sys.process.subStep.status': '步骤状态',
  'sys.process.subStep.info': '步骤 Info 日志',
  'sys.process.subStep.error': '步骤 Error 日志',

  // system info of log
  'sys.info.logList.tips': '点击左侧日志文件查看',

};