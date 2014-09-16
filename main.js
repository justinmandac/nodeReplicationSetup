//main module
var opts     = require('./cfg/settings.json'),
    process  = require('child_process'),
    mod_name = './tools/slave_cfg.js';


console.log(opts.length + ' host(s) to be configured.');

opts.forEach(function (val, i) {
    var configurator = process.fork(mod_name, [JSON.stringify(val)]);
});
