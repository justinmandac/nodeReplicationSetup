nodeReplicationSetup
====================

Replication setup tool for MySQL Servers. 

## To setup a server as a slave:
1. Modify `/cfg/slave_conn_opts.json` accordingly to connect to the desired server. 
2. Modify `/cfg/master_opts.json` according to your required parameters (i.e. `master_host`, `master_log_file`, etc.).
3. Run. `node slave_cfg.js`


## To-Do
* Enable modification of `my.cnf` (for *nix servers) or `my.ini` for Windows machines. 
* Front-end
