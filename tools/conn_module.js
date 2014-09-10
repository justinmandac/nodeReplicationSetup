var sql       = require('mysql');
var conn      = null;
var conn_opts = null;
var events    = require('events');
//constructor
function mysqlConnection(opts){
    conn_opts = opts;
}

mysqlConnection.prototype = new events.EventEmitter;

mysqlConnection.prototype.query = function query(str){
    conn = sql.createConnection(conn_opts);
    var ev = this;

    conn.connect(function(err){
        if(err){
            ev.emit('conn_err',err);
        }
        else{
            conn.query(str, function(err,rows,fields){
                if(err){
                    ev.emit('query_error',err);
                }
                else{
                    ev.emit('query_done',rows);
                }

            });
        }

    });
}

mysqlConnection.prototype.close = function(){
    var ev = this;
    conn.end();
    conn = null;
    ev.emit('conn_closed');
}

mysqlConnection.prototype.isInit = function (){
    return conn;
}

mysqlConnection.prototype.checkConnection = function(){
    conn = sql.createConnection(conn_opts);
    var ev = this;

    conn.connect(function(err){
        if(err){
            ev.emit('conn_err',err);
        }
        else{
            ev.emit('conn_okay');
            conn.end();
        }
    });

}

module.exports = mysqlConnection;
