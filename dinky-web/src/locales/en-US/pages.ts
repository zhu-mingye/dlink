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
  'layouts.userLayout.title': 'Dinky Real-time Computing Platform',
  'login.error': 'Login failed, please try again! Reason：{msg}',
  'login.result': '{msg}\t\t{time}',
  'login.notbindtenant': 'You have not bound a tenant, please contact the administrator',
  'login.username.placeholder': 'Username',
  'login.username.required': 'Please input your username!',
  'login.chooseTenant': 'Please Choose Tenant',
  'login.chooseTenantFailed': 'Tenant selection failed, please check. . . ',
  'login.chooseTenantSuccess':
    '{msg}, Use [ {tenantCode} ] to enter the system, loading. . .',
  'login.password.placeholder': 'Password',
  'login.password.required': 'Please input your password!',
  'login.rememberMe': 'Remember me',
  'about.Community':
    'Welcome to join the Dinky Official Community, Build a win-win situation',
  'about.QQcode': 'QQ Official Community Group',
  'about.wechatCode': 'Wechat Official Account',
  'about.dingTalkCode': 'DingTalk Official Community Group',
  'about.wechatApply':
    'WeChat user community group: recommendation, add wechat wenmo_ai to invite into the group (application notes Dinky + company name + position, no approval will not be written)`',
  'about.precautions': 'Precautions',
  'about.usingHelp': 'Using Help',
  'about.communityRules': 'Community Rules',
  'about.communityRules.1':
    'It is forbidden to publish or discuss content that is irrelevant or inappropriate to the subject of this group, once found it will be kicked immediately. ',
  'about.communityRules.2':
    'For bug feedback and feature improvements or suggestions, please use issue, please read the issue document requirements. ',
  'about.communityRules.3':
    'Please read the Readme, official account articles, official website documents, and Bilibili videos carefully before deployment and use. ',
  'about.communityRules.4':
    'Please be polite and explain [version, execution mode, operation description, screenshot] when asking questions in the group. ',
  'about.communityRules.5':
    ' Register who is using Dinky, and can enter the enterprise user group to provide technical support. ',

  //-------------------------------- auth center --------------------------------
  // user
  'user.manager': 'User Management',
  'user.username': 'User Name',
  'user.jobnumber': 'Job Number',
  'user.phone': 'Phone Number',
  'user.nickname': 'Nick Name',
  'user.create': 'Create User',
  'user.update': 'Modify User',
  'user.assignRole': 'Assign Role',
  'user.delete': 'Delete User',
  'user.deleteConfirm': 'Are you sure delete this User？',
  'user.usernamePlaceholder': 'Please enter user name',
  'user.jobnumberPlaceholder': 'Please enter job number',
  'user.nicknamePlaceholder': 'Please enter nickname',
  'user.phonePlaceholder': 'Please enter phone number',
  'user.oldpwd': 'Old Password',
  'user.newpwd': 'New Password',
  'user.repeatpwd': 'Repeat New Password',
  'user.oldpwdPlaceholder': 'Please enter old password',
  'user.newpwdPlaceholder': 'Please enter new password',
  'user.repeatpwdPlaceholder': 'Please enter repeat new password',
  'user.oldNewPwdNoMatch': 'The new passwords do not match',

  // tenant
  'tenant.TenantManager': 'Tenant Management',
  'tenant.TenantCode': 'Tenant Code',
  'tenant.AssignUser': 'Assign Users',
  'tenant.assignUser.pleaseHolder': 'Please enter username/nickname Search',
  'tenant.create': 'Create Tenant',
  'tenant.update': 'Update Tenant',
  'tenant.EnterTenantCode': 'Please enter Tenant Code!',
  'tenant.EnterTenantNote': 'Please enter Tenant Note!',
  'tenant.delete': 'Delete Tenant',
  'tenant.deleteConfirm': 'Are you sure you want to delete this Tenant？',

  // role
  'role.roleManagement': 'Role Management',
  'role.roleCode': 'Role Code',
  'role.roleName': 'Role Name',
  'role.namespaceIds': 'Namespace',
  'role.belongTenant': 'Belong Tenant',
  'role.create': 'Create Role',
  'role.update': 'Update Role',
  'role.EnterRoleCode': 'Please enter Role Code!',
  'role.EnterRoleName': 'Please enter Role Name!',
  'role.selectNameSpace': 'Please select NameSpace!',
  'role.EnterNote': 'Please enter Role Note!',
  'role.delete': 'Delete Role',
  'role.deleteConfirm': 'Are you sure you want to delete this Role？',

  // rowPermissions
  'rowPermissions.management': 'Row Permissions Management',
  'rowPermissions.tableName': 'Table name',
  'rowPermissions.tableNamePlaceholder': 'Please enter table name',
  'rowPermissions.expression': 'Expression',
  'rowPermissions.expressionPlaceholder': 'Please enter expression',
  'rowPermissions.deleteConfirm': 'Are you sure you want to delete this row permissions',
  'rowPermissions.roleName': 'Role Name',
  'rowPermissions.roleNamePlaceholder': 'Please select an role',
  'rowPermissions.create': 'Create Row Permissions',
  'rowPermissions.update': 'Update Row Permissions',


  //-------------------------------- register center --------------------------------
  // datasource
  'rc.ds.management': 'DataSource Management',
  'rc.ds.name': 'Name',
  'rc.ds.groupName': 'Group Type',
  'rc.ds.type': 'DataSource Type',
  'rc.ds.url': 'Database URL',
  'rc.ds.username': 'Username',
  'rc.ds.password': 'Password',
  'rc.ds.flinkConfig': 'Flink Connection Config',
  'rc.ds.flinkTemplate': 'Flink Connection Template',
  'rc.ds.create': 'Create DataSource',
  'rc.ds.modify': 'Modify DataSource',
  'rc.ds.delete': 'Delete DataSource',
  'rc.ds.deleteConfirm': 'Are you sure to delete this DataSource? ',
  'rc.ds.namePlaceholder': 'Please enter a name!',
  'rc.ds.groupNamePlaceholder': 'Please select a group type!',
  'rc.ds.typePlaceholder': 'Please select the DataSource type! Enter keywords to search',
  'rc.ds.urlPlaceholder': 'Please enter a properly formatted url link!',
  'rc.ds.usernamePlaceholder': 'Please enter username!',
  'rc.ds.passwordPlaceholder': 'Please enter password!',
  'rc.ds.flinkConfigPlaceholder': 'Please specify the default configuration of Flink With!',
  'rc.ds.flinkConfigTooltip': 'Avoid disclosure of private information, and reuse the connection configuration as a global variable. In FlinkSQL, you can use `variable reference method` to load the connection configuration. Explanation: The reference name refers to the unique identifier, which is the `name` in this form. Note that you need to enable global variables (the original fragment mechanism)',
  'rc.ds.flinkTemplatePlaceholder': 'Please specify the generation template of Flink With!',
  'rc.ds.flinkTemplateTooltip': 'Flink connection template is an extended function for generating FlinkSQL DDL. Among them, the schemaName in `variable reference method` refers to dynamically obtaining the database, and the tableName in `variable reference method` refers to dynamically obtaining the table name',
  'rc.ds.source': 'Source',
  'rc.ds.warehouse': 'Data Warehouse',
  'rc.ds.application': 'Application',
  'rc.ds.backup': 'Backup',
  'rc.ds.other': 'Other',
  'rc.ds.enter': 'Click the icon picture in the list to enter the details page of the DataSource! Support viewing the database & table information of the DataSource, and timely query',
  'rc.ds.enter.error': 'The DataSource status is abnormal and cannot be entered, only after the heartbeat is normal!',

  // datasource of schema info page
  // tags
  'rc.ds.detail.tag.desc': 'Description',
  'rc.ds.detail.tag.query': 'Query',
  'rc.ds.detail.tag.gensql': 'Generate SQL',
  'rc.ds.detail.tag.console': 'Console',

  // tips
  'rc.ds.detail.tips': 'Click on the table on the left to get the description information of the table',

  // columns info
  'rc.ds.no': 'No.',
  'rc.ds.columnName': 'Field Name',
  'rc.ds.columnType': 'Type',
  'rc.ds.comment': 'Comment',
  'rc.ds.primarykey': 'Primary Key',
  'rc.ds.autoIncrement': 'Autoincrement',
  'rc.ds.isNull': 'Not Null',
  'rc.ds.null': 'Nullable',
  'rc.ds.default': 'Default Value',
  'rc.ds.length': 'Length',
  'rc.ds.precision': 'Precision',
  'rc.ds.decimalDigits': 'Decimal Range',
  'rc.ds.character': 'Character Set',
  'rc.ds.collationRule': 'Collation Rule',
  'rc.ds.javaType': 'Java Type',


  // alert instance
  'rc.ai.management': 'Alert Instance Management',
  'rc.ai.name': 'Name',
  'rc.ai.namePleaseHolder': 'please enter Alert instance name',
  'rc.ai.type': 'Type',
  'rc.ai.delete': 'Delete the Alert Instance ',
  'rc.ai.create': 'Create Alert Instance',
  'rc.ai.modify': 'Modify Alert Instance',
  'rc.ai.deleteConfirm': 'Are you sure to delete the selected Alert Instance? ',
  'rc.ai.dingTalk': 'DingTalk Config',
  'rc.ai.email': 'Email Config',
  'rc.ai.feishu': 'FeiShu Config',
  'rc.ai.wechat': 'WeChat Config',
  'rc.ai.webhookPleaseHolder': 'please enter webhook url',
  'rc.ai.keywordPleaseHolder': 'please enter keyword',
  'rc.ai.secretPleaseHolder': 'please enter secret',
  'rc.ai.proxyPleaseHolder': 'please enter proxy',
  'rc.ai.portPleaseHolder': 'please enter port',
  'rc.ai.userPleaseHolder': 'please enter user',
  'rc.ai.atUsersPleaseHolder': 'Please enter the user ID (user ID of FeiShu background is required), separated by multiple commas!',
  'rc.ai.passwordPleaseHolder': 'please enter password',
  'rc.ai.atMobilesPleaseHolder': 'Please enter the members that need @, multiple use, separated by numbers',
  'rc.ai.msgtypePleaseHolder': 'please choose message Send Type`',
  'rc.ai.corpIdPleaseHolder': 'Please enter CorpId',
  'rc.ai.wechatAtUsersPleaseHolder': 'Please enter the @user ID (enterprise and micro user name spelled out), separated by multiple commas!',
  'rc.ai.sendTypePleaseHolder': 'Please choose Send Type',
  'rc.ai.agentIdPleaseHolder': 'Please enter AgentId',
  'rc.ai.receiversPleaseHolder': 'Please enter recipient email address! Separate multiple commas',
  'rc.ai.receiverCcsPleaseHolder': 'Please enter the receiverCcs email address! Separate multiple commas!',
  'rc.ai.serverHostPleaseHolder': 'Mail server host',
  'rc.ai.serverPortPleaseHolder': 'Please enter the mail server port',
  'rc.ai.senderPleaseHolder': 'Please enter the mail server sender Nickname',
  'rc.ai.emailUserPleaseHolder': 'Please enter your email username',
  'rc.ai.emailPasswordPleaseHolder': 'Please enter the email password! Note: the password is the authorization code',
  'rc.ai.smtpSslTrustPleaseHolder': 'Please enter a trusted domain',
  'rc.ai.xls.file.pathPleaseHolder': 'Please enter the XLS storage directory! The default is /tmp/xls',
  'rc.ai.webhook': 'WebHook Url',
  'rc.ai.keyword': 'KeyWord',
  'rc.ai.secret': 'Secret',
  'rc.ai.isEnableProxy': 'IsEnableProxy',
  'rc.ai.proxy': 'Proxy',
  'rc.ai.port': 'Port',
  'rc.ai.user': 'User',
  'rc.ai.password': 'Password',
  'rc.ai.isAtAll': 'IsAtAll',
  'rc.ai.corpId': 'CorpId',
  'rc.ai.atMobiles': 'At Mobiles',
  'rc.ai.sendType': 'Send Type',
  'rc.ai.agentId': 'AgentId',
  'rc.ai.atUsers': 'At Users',
  'rc.ai.receivers': 'Receivers',
  'rc.ai.receiverCcs': 'ReceiverCcs',
  'rc.ai.serverHost': 'Mail server Host',
  'rc.ai.serverPort': 'Mail server Port',
  'rc.ai.sender': 'Sender Nickname',
  'rc.ai.enableSmtpAuth': 'Enable SmtpAuth',
  'rc.ai.emailUser': 'Email user',
  'rc.ai.emailPassword': 'Email password',
  'rc.ai.starttlsEnable': 'Start Tls Enable',
  'rc.ai.sslEnable': 'Ssl Enable',
  'rc.ai.smtpSslTrust': 'Smtp Ssl Trust',
  'rc.ai.xls.file.path': 'XLS storage directory',
  'rc.ai.msgtype': 'Send Message Type',
  'rc.ai.sendType.app': 'Application',
  'rc.ai.sendType.wechat': 'WeChat',
  'rc.ai.markdown': 'MarkDown',
  'rc.ai.text': 'Text',
  'rc.ai.post': 'Post',
  'rc.ai.table': 'Table',
  'rc.ai.attachment': 'Attachment',
  'rc.ai.tableAttachment': 'Table And Attachment',

  // alert group
  'rc.ag.management': 'Alert Group Management ',
  'rc.ag.name': 'Alert Group Name',
  'rc.ag.groupid': 'Alert group ID ',
  'rc.ag.alertInstanceIds': 'Alert instance',
  'rc.ag.chooseAlertInstanceIds': 'please choose Alert Instance',
  'rc.ag.inputName': 'please input Alert group name',
  'rc.ag.create': 'Create Alert Group',
  'rc.ag.modify': 'Modify Alert Group',
  'rc.ag.delete': 'Delete the Alert group ',
  'rc.ag.deleteConfirm': 'Are you sure to delete this Alert group? ',
  'rc.ag.alertCount': 'Alert Count: {count}',

  // doc
  'rc.doc.management': 'Document Management',
  'rc.doc.name': 'Name',
  'rc.doc.id': 'Document ID',
  'rc.doc.category': 'Document Type',
  'rc.doc.functionType': 'Function Type',
  'rc.doc.subFunctionType': 'SubType',
  'rc.doc.description': 'Description',
  'rc.doc.fillValue': 'Fill Value',
  'rc.doc.version': 'Version',
  'rc.doc.create': 'Create Document',
  'rc.doc.modify': 'Modify Document',
  'rc.doc.delete': 'Delete Document',
  'rc.doc.deleteConfirm': 'Are you sure you want to delete the this Document? ',
  'rc.doc.namePlaceholder': 'Please enter a name!',
  'rc.doc.versionPlaceholder': 'Please select the version this Document belongs to!',
  'rc.doc.fillValuePlaceholder': 'Please enter the fill value, use the name in the editor to trigger the prompt eg: If you want to input parameters in the function LTRIM(parms), the syntax is: LTRIM(${1:}) At this time The 1 represents the first cursor. If you need multiple numbers + 1, you can switch the cursor with the tab key; if you don`t need parameters, directly enter the desired fill value',
  'rc.doc.fillValueHelp': 'Please enter the fill value',
  'rc.doc.descriptionPlaceholder': 'Please enter the Document description information!',
  'rc.doc.typePlaceholder': 'Please select the function type this Document belongs to!',
  'rc.doc.subTypePlaceholder': 'Please select the function type this Document belongs to!',
  'rc.doc.categoryPlaceholder': 'Please select the type of this Document!',

  // global variable
  'rc.gv.Management': 'Global Variable Management',
  'rc.gv.id': 'Global Variable ID',
  'rc.gv.name': 'Name',
  'rc.gv.value': 'Value',
  'rc.gv.create': 'Create Global Variable',
  'rc.gv.modify': 'Modify Global Variables',
  'rc.gv.delete': 'Delete Global Variable',
  'rc.gv.deleteConfirm': 'Are you sure you want to delete this Global Variable? ',
  'rc.gv.namePlaceholder': 'Please enter a name!',
  'rc.gv.valuePlaceholder': 'Please enter the Global Variable value',

  // git project
  'rc.gp.management': 'GitProject Management(Beta)',
  'rc.gp.id': 'ID',
  'rc.gp.name': 'Name',
  'rc.gp.url': 'Project URL',
  'rc.gp.branch': 'Branch',
  'rc.gp.username': 'Username',
  'rc.gp.password': 'Password',
  'rc.gp.privateKey': 'Private Key Path',
  'rc.gp.pom': 'Pom File Path',
  'rc.gp.buildArgs': 'Build Arguments',
  'rc.gp.codeType': 'Code Type',
  'rc.gp.type': 'Clone Mode',
  'rc.gp.lastBuild': 'LastBuild Time',
  'rc.gp.buildState': 'Build State',
  'rc.gp.buildStep': 'Build Step',
  'rc.gp.udfClassList': 'UDF Class List',
  'rc.gp.create': 'Create Project',
  'rc.gp.modify': 'Modify Project',
  'rc.gp.delete': 'Delete Project',
  'rc.gp.deleteConfirm': 'This operation will delete all downloaded codes under this project \nplease operate with caution \nthis operation is irreversible!! \nAre you sure to delete this Project? ',
  'rc.gp.namePlaceholder': 'Please enter Project name!',
  'rc.gp.urlPlaceholder': 'Please enter the project address!',
  'rc.gp.branchPlaceholder': 'Please select a branch!',
  'rc.gp.usernamePlaceholder': 'Please enter a username!',
  'rc.gp.passwordPlaceholder': 'Please enter a password!',
  'rc.gp.privateKeyPlaceholder': 'private key path, eg: ~/.ssh/id_rsa',
  'rc.gp.pomPlaceholder': 'Please enter the pom file path!',
  'rc.gp.buildArgsPlaceholder': 'Please enter build parameters!',
  'rc.gp.codeTypePlaceholder': 'Please select the code type!',
  'rc.gp.typePlaceholder': 'Please choose the Clone Mode!',
  'rc.gp.build': 'Build',
  'rc.gp.buildConfirm': 'Are you sure to start building this project? ',
  'rc.gp.log': 'Log',
  'rc.gp.codeTree': 'Show Code',
  'rc.gp.codeTree.clickShow': 'Click left file to view code',
  'rc.gp.codeTree.unSupportView': 'This file type does not support viewing',
  'rc.gp.build.step.0': 'No Build',
  'rc.gp.build.step.1': 'Check Env',
  'rc.gp.build.step.2': 'Git Clone',
  'rc.gp.build.step.3': 'Maven Build',
  'rc.gp.build.step.4': 'Get Jars',
  'rc.gp.build.step.5': 'Analysis UDF',
  'rc.gp.build.step.6': 'Finish',
  'rc.gp.buildSuccess': 'Build successfully',
  'rc.gp.buildFail': 'Build failed',
  'rc.gp.building': 'Building',
  'rc.gp.notBuild': 'Not built',
  'rc.gp.buildingTip': 'Building, please wait...',

  // udf template
  'rc.udf.management': 'UDF Template Management',
  'rc.template.name': 'Template Name',
  'rc.template.namePlaceholder': 'Please enter the template name! ',
  'rc.template.codeType': 'Code Type',
  'rc.template.codeTypePlaceholder': 'Please select code type! ',
  'rc.template.functionType': 'Function Type',
  'rc.template.functionTypePlaceholder': 'Please select function type! ',
  'rc.template.templateCodeLabel': 'Template Code( {language} )',
  'rc.template.templateCode': 'Template Code',
  'rc.template.templateCodePlaceholder': 'Please edit the template code! ',
  'rc.template.delete': 'Delete Template! ',
  'rc.template.deleteConfirm': 'Are you sure you want to delete this template?',
  'rc.template.create': 'Create UDF Template',
  'rc.template.modify': 'Modify UDF Template',


  //-------------------------------- setting center --------------------------------
  // process
  'sys.process.id': 'Process ID',
  'sys.process.name': 'Process Name',
  'sys.process.taskId': 'Job ID',
  'sys.process.type': 'Type',
  'sys.process.status': 'Status',
  'sys.process.startTime': 'Start Time',
  'sys.process.endTime': 'End Time',
  'sys.process.duration': 'Duration',
  'sys.process.operator': 'Operator',
  'sys.process.viewInfoLog': 'View Info Level Log',
  'sys.process.viewErrorLog': 'View Error Level Log',
  'sys.process.subStep.status': 'Step Status',
  'sys.process.subStep.info': 'Step Info',
  'sys.process.subStep.error': 'Step Error',

  // system info of log
  'sys.info.logList.tips': 'Click left log file to viewing',


};