set 'execution.checkpointing.interval'='5 s';
ADD CUSTOMJAR 'rs:/flink-sql-connector-mysql-cdc.jar';
ADD CUSTOMJAR 'rs:/mysql-connector-java.jar';
EXECUTE JAR WITH (
'uri'='rs:/flink-doris-connector.jar',
'main-class'='org.apache.doris.flink.tools.cdc.CdcTools',
'args'='base64@bXlzcWwtc3luYy1kYXRhYmFzZSAgICAgLS1kYXRhYmFzZSBkaW5reSAgICAgLS1teXNxbC1jb25mIGhvc3RuYW1lPW15c3FsICAgICAtLW15c3FsLWNvbmYgcG9ydD0zMzA2ICAgICAtLW15c3FsLWNvbmYgdXNlcm5hbWU9cm9vdCAgICAgLS1teXNxbC1jb25mIHBhc3N3b3JkPWRpbmt5ICAgICAtLW15c3FsLWNvbmYgZGF0YWJhc2UtbmFtZT1kaW5reSAgICAgLS1teXNxbC1jb25mIHNlcnZlci10aW1lLXpvbmU9QXNpYS9TaGFuZ2hhaSAgICAgLS1pbmNsdWRpbmctdGFibGVzICJkaW5reV90YXNrIiAgICAgLS1zaW5rLWNvbmYgZmVub2Rlcz1kb3Jpcy1mZTo4MDMwICAgICAtLXNpbmstY29uZiB1c2VybmFtZT1yb290ICAgICAtLXNpbmstY29uZiBqZGJjLXVybD1qZGJjOm15c3FsOi8vZG9yaXMtZmU6OTAzMCAgICAgLS1zaW5rLWNvbmYgc2luay5sYWJlbC1wcmVmaXg9bGFiZWwtMSAgICAgLS10YWJsZS1jb25mIHJlcGxpY2F0aW9uX251bT0xIA==',
'allowNonRestoredState'='false'
);
