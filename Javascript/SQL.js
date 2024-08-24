const mySql = require('mysql2');
const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Transact_Test'
});

connection.connect((err) => {
    if(err){
        console.error("Error connecting to database", err.stack)
        return;
    }
    else{
        console.log("connected")
    }
})