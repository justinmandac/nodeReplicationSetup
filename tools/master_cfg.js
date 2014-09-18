//master setup
var settings       = JSON.parse(process.argv[2]);
var mysql          = require('mysql');
var tools          = require('../tools/utils');
var connection     = mysql.createConnection(settings.connection_settings);
var testQuery      = 'SHOW DATABASES;';
var userQuery      = 'GRANT REPLICATION SLAVE ON \'?\'@? IDENTIFIED BY "?";';
var query          = testQuery;

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
