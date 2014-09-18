var settings = require('./cfg/host_conn_opts.json');
var conn_module = require('./tools/conn_module');
var connection  = new conn_module(settings);
var testQuery   = 'SHOW DATABASES;';
var query       = testQuery;

//console.log(settings);
connection.execute(query);
