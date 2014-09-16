//Slave setup
var tools, conn_mod, conn_obj;
tools       = require('./tools/utils');
conn_mod    = require('./tools/conn_module');
conn_obj    = new conn_mod(require('./cfg/host_conn_opts.json')); //blocking read

var master_opts = require('./cfg/master_opts.json');
var m_host      = 'master_host=' + tools.enc(master_opts.host);
var m_port      = 'master_port=' + master_opts.port;
var m_user      = 'master_user=' + tools.enc(master_opts.user);
var m_pwd       = 'master_password="' + master_opts.pw + '"'; //passwords have to be enclosed in double quotes
var m_log       = 'master_log_file=' + tools.enc(master_opts.log);
var m_pos       = 'master_log_pos=' + master_opts.pos;

var master_set_str = 'CHANGE MASTER TO ' + m_host + ',' + m_port + ',' + m_user + ',' + m_pwd + ',' + m_log + ',' + m_pos + ';';
var testQuery      = "SHOW DATABASES;";
var query          = testQuery;

conn_obj.query(query);
conn_obj.on('query_done', function (val) {
    console.log('Query Result:');
    console.log(val);
    conn_obj.close();
});

conn_obj.on('conn_okay', function () {
    console.log('Connection okay');
});
conn_obj.on('conn_err', function (err) {
    console.log('Connection not okay');
    console.log(err);
});
conn_obj.on('conn_closed', function () {
    console.log('Connection closed');
});

conn_obj.on('query_error', function (err) {
    console.log('Query Error');
    console.log(err);
});

