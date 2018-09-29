var mysql = require('mysql');
class MySqlDB {
    constructor() {

        this.host = '125.212.227.42';
        this.username = 'root';
        this.port = '3336';
        this.password = 'toor';
        this.dbname = 'transfer_money';
        this.db = this.open();
    }

    open() {
        let conn = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password,
            port: this.port,
            database: this.dbname

        })
        conn.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
        return conn;
    }

    close() {
        if (this.db != null ){
            this.db.destroy();
        }
    }

}

module.exports = MySqlDB;