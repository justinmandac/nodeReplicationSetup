//Slave setup
var tools, mysql, connection, conn_mod, conn_obj;
mysql       = require('mysql');
connection  = mysql.createConnection(require('./cfg/host_conn_opts.json'));
tools       = require('./tools/utils');

var master_opts = require('./cfg/master_opts.json');
var m_host      = 'master_host='      + tools.enc(master_opts.host);
var m_port      = 'master_port='      + master_opts.port;
var m_user      = 'master_user='      + tools.enc(master_opts.user);
var m_pwd       = 'master_password="' + master_opts.pw + '"'; //passwords have to be enclosed in double quotes
var m_log       = 'master_log_file='  + tools.enc(master_opts.log);
var m_pos       = 'master_log_pos='   + master_opts.pos;

var master_set_str = 'CHANGE MASTER TO ' + m_host + ',' + m_port + ',' + m_user + ',' + m_pwd + ',' + m_log + ',' + m_pos + ';';
var testQuery      = "SHOW DATABASES;";
var query          = testQuery;

connection.connect();

connection.query(query, function (err, rows, fields) {
    if(err) throw err;

    console.log(rows);

});

connection.end();
