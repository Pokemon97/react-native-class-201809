var MySqlDB = require('./mysqlConn');
class UserModel extends MySqlDB {
    constructor() {
        super();
    }

    

    insertWithCheckExists(email) {
        return new Promise((resolve, reject) => {
            let sql = 'select email from user_test where email = ?';
            this.db.query(sql, [email], (err, result) => {
                if (result.length == 0)
                    resolve(result);
                else
                    reject('Email is exists');
            });
        });
    }

    insert(email, password) {
        let sql = 'insert into user_test (email,password) values (?,?)';
        this.db.query(sql, [email,password], (err, result) => {
            //console.log(err);
            //console.log(result);
            if (result.affectedRows == 1)
                console.log('1 row insert'); 
            else
                console.log('Have error when inserting');
        });
    }

    async insertNew(email,password){
        let checkSql = 'select email from user_test where email = ?';
        let checkRs =  [];
        try {
            checkRs = await this.checkExists (email);
           
            this.insert(email,password);
            
        } catch(err){
            console.log(err);
        }
    }

    checkExists (email){
        return new Promise((resolve, reject) => {
            let sql = 'select email from user_test where email = ?';
            this.db.query(sql, [email], (err, result) => {
                if (result.length == 0){
                     resolve(result);
                }else 
                {
                    reject('Email is exists');
                }
                reject(err);
            });
        });
    }
}
module.exports = UserModel;