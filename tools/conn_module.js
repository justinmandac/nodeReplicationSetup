//encapsulate connect-query-disconnect methods to simplify configuration scripts.
var mysql     = require('mysql');
var settings  = null;
var conn_name = null;

function ConnectionObject (params) {
    settings = params;
    conn_name= '\'' + settings.user + '\'' + '@' + settings.host;
}

ConnectionObject.prototype.execute = function execute (query) {
    var connection;
    if  (settings == null) {
        return;
    }
    connection = mysql.createConnection(settings);
    connection.connect(function (err) {
        if (err) {
            throw err;
        }
        console.log('[' + connection.threadId + ']Connected to ' + conn_name);

    });
    connection.query(query, function (err, row, fields) {
        if (err) {
            throw err;
        }
        console.log(row);
    });
    connection.end(function (err) {
        if (err) {
            throw err;
        }
        console.log('[' + connection.threadId + ']Connection terminated from ' + conn_name);
    });
}

module.exports = ConnectionObject;
