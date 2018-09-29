let mysql = require('./mysqlConn');
let UserModel = require('./UserModel');
let user = new UserModel();
//Promise
/*
user.insertWithCheckExists('bachnx123@gmail.com').then(
    function (){
        user.insert('bachnx123@gmail.com','123');
    }
).catch((err)=>{
    console.log(err);
})
*/

//Async Await
user.insertNew('bachnx456@gmail.com','123');