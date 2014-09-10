//Master
var tools       = require('./tools/utils');
var conn_mod    = require('./tools/conn_module');
var conn_obj    = new conn_mod(require('./cfg/master_conn_opts.json')); //blocking read

var master_opts = require('./cfg/master_repluser_opts.json');
var repluser    = tools.enc(master_opts.user);
var userhost    = tools.enc(master_opts.host);
var replpwd     = tools.enc(master_opts.pw);
var db          = master_opts.db;
var str         = 'GRANT REPLICATION SLAVE ON '+db+'.* TO '+repluser+'@'+userhost+' IDENTIFIED BY '+replpwd+';';


conn_obj.query('SELECT USER,HOST FROM MYSQL.USER;');
conn_obj.on('query_done', function(val){
    console.log('Query Result:');
    console.log(val);
    conn_obj.close();
});

conn_obj.on('conn_okay',function(){
    console.log('Connection okay');
});
conn_obj.on('conn_err',function(err){
    console.log('Connection not okay');
    console.log(err);
});
conn_obj.on('conn_closed',function(){
    console.log('Connection closed');
});

conn_obj.on('query_error',function(err){
    console.log('Query Error');
    console.log(err);
});
