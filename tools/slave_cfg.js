//Slave setup
var settings       = JSON.parse(process.argv[2]),
    mysql          = require('mysql'),
    tools          = require('../tools/utils'),
    connection     = mysql.createConnection(settings.connection_settings),
    opts           = settings.master_settings,
    m_host         = 'master_host='      + tools.enc(opts.host),
    m_port         = 'master_port='      + opts.port,
    m_user         = 'master_user='      + tools.enc(opts.user),
    m_pwd          = 'master_password="' + opts.pw + '"', //passwords have to be enclosed in double quotes
    m_log          = 'master_log_file='  + tools.enc(opts.log),
    m_pos          = 'master_log_pos='   + opts.pos,
    master_set_str = 'CHANGE MASTER TO ' + m_host + ',' + m_port + ',' + m_user + ',' + m_pwd + ',' + m_log + ',' + m_pos + ';',
    testQuery      = "SHOW DATABASES;",
    query          = master_set_str;
//var new_query   = 'CHANGE MASTER TO master_host=?,master_port=?,master_user=?,master_password="?",master_log_file=?,master_log_pos=?;';
var new_query   = 'CHANGE MASTER TO master_host=?,master_port=?;';
var params      = [opts.host,opts.port];

connection.connect(function (err) {
    if (err) {
        console.err('Error connecting:' + err.stack);
        return;
    }

    console.log('[' + connection.threadId + ']Connected to ' + settings.connection_settings.user + '@' + settings.connection_settings.host);

});

connection.query(query, function (err, rows, fields) {
    if (err) {
        throw err;
    }

    console.log(rows);

});

connection.end(function (err) {
    console.log('[' + connection.threadId + ']Connection terminated from ' + settings.connection_settings.user + '@' + settings.connection_settings.host);
});
