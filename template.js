//Template
var tools       = require('./tools/utils');
var conn_mod    = require('./tools/conn_module');
var conn_obj    = new conn_mod(require('./cfg/conn_opts.json')); //blocking read

//query manipulation here

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
