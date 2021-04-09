const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

// Templace engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources/views'));

// Static file
app.use(express.static(path.join(__dirname, '/public')))


// test insert data
// const admin = require("./models/admin");
// admin.insertNewAdmin("", 'doanne', '123', 'doannv');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/admin', (req, res) => {
    res.render('admin/index');
});
// Start serve
app.listen(port, () => {
    console.log(`server started on port : ${port}`);
});