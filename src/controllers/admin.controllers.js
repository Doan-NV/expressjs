const express = require('express');
var bodyParser = require('body-parser')

// require connect database
const db = require('../config/db/connection');

// require admin model
const adminModel = require('../models/admin.models');
// require user model
const userModel = require('../models/user.models');
// [GET ]
module.exports.index = (req, res) => {
    res.render('admin/dashboard', { name: req.cookies.username });
};

// [GET login]
module.exports.getLogin = (req, res) => {
    res.render('admin/login');
};

// [POST login]
module.exports.postLogin = async(req, res) => {
    console.log('chay vao day')
    let username = req.body.username;
    let password = req.body.password;
    let errors = [];
    let checked = await adminModel.checkingAdmin(username, password);

    if (username == null || username == '' || password == null || password == '') {
        errors.push("username or password i'snt define!")
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
};
// [GET] logout
module.exports.logout = (req, res) => {
        // req.session.destroy(function(err){
        //     if(err){
        //        console.log(err);
        //     }else{
        //         console.log(session.email);
        //         req.end();
        //         res.redirect('/signup');
        //     }
        //  });
        res.clearCookie("username");
        res.redirect('/admin/login');
    }
    // [GET] dashboard 
module.exports.dashboard = async(req, res) => {
    let page = req.params.page || 0;
    // mặc định được limit ở 10 records
    let listUser = await userModel.selectLimitUser(page);
    let count = await userModel.selectCount();
    res.render('admin/dashboard', {
        name: req.cookies.username, // tên admin
        listUser: listUser, // danh sách user
        current: page, // trang hiện tại
        pages: (count[0].count / 10 - 1) // tổng số trang
    });
}