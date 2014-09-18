//Slave setup
var settings           = JSON.parse(process.argv[2]),
    conn_module        = require('./conn_module'),
    sql_connect        = new conn_module(settings.connection_settings),
    testQuery          = "SHOW DATABASES;",
    set_master_query   = 'CHANGE MASTER TO master_host=?,master_port=?,master_user=?,master_password="?",master_log_file=?,master_log_pos=?;',
    params             = [opts.host,opts.port,opts.user,opts.pw,opts.log,opts.pos],
    query              = set_master_query;

sql_connect.execute(query,params);
