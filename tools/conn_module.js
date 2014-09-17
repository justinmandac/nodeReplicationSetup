//encapsulate connect-query-disconnect methods to simplify configuration scripts.
var mysql   = require('mysql');
var settings= null;

function ConnectionObject (params) {
    this.settings = params;
}

ConnectionObject.prototype.execute = function (query) {

}
