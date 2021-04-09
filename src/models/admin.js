const db = require('../config/db/connection');
class Admin {

    // Contructor func
    constructor(id, username, password, name) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
    }

    // Insert new admin || create new admin
    insertNewAdmin(id, username, password, name) {
        let sql = `INSERT INTO admin (id,username, password, name) VALUES ('${id}','${username}', '${password}','${name}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('1 record inserted')
        })
    }

    addAvatar() {
        // add avatar image
    }

    updateAdmin() {
        // password , avatar
    }

}

module.exports = new Admin;