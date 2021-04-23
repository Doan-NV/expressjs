const path = require('path');
const express = require("express");
const app = express();
// cookie-parser
var cookieParser = require('cookie-parser')
    // require body-parser
const bodyParser = require('body-parser')



// Templace engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources/views'));

// Static file
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static(path.join(__dirname, '/public/styles')));
// app.use(express.static(path.join(__dirname, '/public/styles/')));

// cookie-parser
app.use(cookieParser());

// body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// [TEST]

// test insert data
const admin = require("./models/admin.models");
// admin.insertNewAdmin("", 'doanne', '123', 'doannv');
// admin.checkingAdmin('doanne', '123');


const user = require("./models/user.models");
// admin.insertNewAdmin("", 'doanne', '123', 'doannv');
// user.selectUser(1);


// [test router]
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd')
})

// Routes
app.get('/', (req, res) => {
    res.render('index');
    console.log(req.cookies)
});

const adminRouter = require('./routers/admin.Router');
app.use('/admin', adminRouter);

// Start serve
const port = 3000;
app.listen(port, () => {
    console.log(`server started on port : ${port}`);
});