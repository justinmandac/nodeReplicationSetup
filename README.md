nodeReplicationSetup
====================

Replication setup tool for MySQL Servers. 

## Features:
* Modify `settings.json` then run!
* Able to configure multiple servers. 

## To configure a host(slave) to a master:
1. Open `/cfg/settings.json`.
2. In the opened file, indicate host parameters under `settings`.
3. Modify `master_settings` to the a master server to be paired with the host. 
4. Add additional JSON objects as desired.
3. Run. `node main.js`

## To-Do
* Enable configuration of master hosts.
* Enable modification of `my.cnf` (for *nix servers) or `my.ini` for Windows machines. 
