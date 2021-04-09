var mysql = require('mysql')

try {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'express_shop'
    })
    connection.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
    });
} catch (error) {
    console.log(error);
}
module.exports = connection;