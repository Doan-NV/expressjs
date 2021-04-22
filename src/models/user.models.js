const db = require('../config/db/connection');
class User {
    constructor(id, name, email, phone, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    insertUser(id, name, email, phone, address) {
        let sql = `INSERT INTO user (id,name, email, phone, address) VALUES ('${id}','${name}', '${email}','${phone}','${address}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('1 record inserted')
        });
    }
    async selectLimitUser(offset) {
        let sql = `SELECT * FROM user LIMIT 10 OFFSET ${10*offset}`;
        let data = new Promise((res, rej) => {
            db.query(sql, (err, result) => {
                res(result);
            })
        });
        let listUser;
        await data.then(result => {
            listUser = result;
        }).catch(err => {
            console.log('no-data' + err)
        });
        // console.log(listUser);
        // trả về danh sách 10 người mỗi lần query
        return listUser;
    }
    async selectCount() {
        let sql = `SELECT COUNT (id) AS count FROM user`;
        let data = new Promise((res, rej) => {
            db.query(sql, (err, result) => {
                res(result);
            })
        });
        let count;
        await data.then(result => {
            count = result;
        }).catch(err => {
            console.log('no-data' + err)
        });
        return count;
    }
}
module.exports = new User