const express = require('express');
var bodyParser = require('body-parser')

// require connect database
const db = require('../config/db/connection');

// require admin model
const adminModel = require('../models/admin.models');

module.exports.index
    // [GET login]
module.exports.getLogin = (req, res) => {
    res.render('admin/login');
};
// [POST login]
module.exports.postLogin = async(req, res) => {
    console.log('chay vao day')
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username, password)
    let errors = [];
    let checked = await adminModel.checkingAdmin(username, password);

    if (username == null || username == '' || password == null || password == '') {
        errors.push('username or password isnt define !!!')
        console.log(errors)
        res.render('admin/login', { errors })
    }
    if (checked !== 1) {
        errors.push('user name or password is wrong!!')
        res.render('admin/login', { errors })
    } else {
        // set cookie
        res.cookie('username', username);

        res.redirect('dashboard');
    }
    // console.log(checked);
    console.log(req.cookies.username)
        // console.log('hahaaa')


};

// [GET] dashboard
module.exports.dashboard = (req, res) => {
    res.render('admin/dashboard');
}