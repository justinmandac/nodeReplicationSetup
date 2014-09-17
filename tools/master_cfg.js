//master setup
var settings       = JSON.parse(process.argv[2]),
    mysql          = require('mysql'),
    tools          = require('../tools/utils'),
    connection     = mysql.createConnection(settings.connection_settings);

connection.connect(function (err) {
    if (err) {
        console.err('Error connecting:' + err.stack);
        return;
    }

    console.log('[' + connection.threadId + ']Connected to ' + settings.connection_settings.user + '@' + settings.connection_settings.host);

});
