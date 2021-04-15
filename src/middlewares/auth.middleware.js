module.exports.requireAuth = (req, res, ) => {
    console.log("cookie: " + req.cookies.username);
    if (!req.cookies.username) {
        res.render('admin/login');
    }
    if (req.cookies.username) {
        res.render('admin/dashboard');
    }
}