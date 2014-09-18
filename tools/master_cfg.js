//master setup
var settings       = JSON.parse(process.argv[2]);
var conn_module    = require('./conn_module');
var sql_connect    = new conn_module(settings.connection_settings);
var testQuery      = 'SHOW DATABASES;';
var userQuery      = 'GRANT REPLICATION SLAVE ON \'?\'@? IDENTIFIED BY "?";';
var params         = [];
var query          = testQuery;

sql_connect.execute(query,params);
