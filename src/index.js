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
app.use(express.static(path.join(__dirname, '/public')))
    // cookie-parser
app.use(cookieParser())
    // body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// test insert data
const admin = require("./models/admin.models");
// admin.insertNewAdmin("", 'doanne', '123', 'doannv');
// admin.checkingAdmin('doanne', '123');

// Routes
app.get('/', (req, res) => {
    res.render('index');
    console.log(req.cookies)
});

// app.get('/admin', (req, res) => {
//     res.render('admin/dashboard');
//     console.log(res.cookies)
// });

const adminRouter = require('./routers/admin.Router');
app.use('/admin', adminRouter);

// Start serve
const port = 3000;
app.listen(port, () => {
    console.log(`server started on port : ${port}`);
});