const db = require('../config/db/connection');
class Admin {

    // Contructor func
    constructor(id, username, password, name) {
            this.id = id;
            this.username = username;
            this.password = password;
            this.name = name;
        }
        // Checking login
    async checkingAdmin(username, password) {
        let checked;
        let sql = `SELECT * FROM admin WHERE username = '${username}' AND password = '${password}'`;

        let data = new Promise((res, rej) => {
            db.query(sql, (err, result) => {
                res(result);
            })
        });
        await data.then(result => {
            if (result.length != 1) {
                checked = 0;
            } else {
                checked = 1;
            }
            return checked;

        }).catch(err => {
            console.log('no-data' + err)
        });

        return checked;
    }

    // Create new admin
    insertNewAdmin(id, username, password, name) {
        let sql = `INSERT INTO admin (id,username, password, name) VALUES ('${id}','${username}', '${password}','${name}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('1 record inserted')
        });
    }

    // Add avatar image
    addAvatar(avatar, id) {

        let sql = `UPDATE admin SET avatar = '${avatar}' WHERE id = ${id}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('1 record inserted')
        });
    }

    // password , avatar
    updateAdmin(password, id) {
        let sql = `UPDATE admin SET password = '${password}' WHERE id = ${id}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('1 record inserted');
        });
    }

}

module.exports = new Admin;