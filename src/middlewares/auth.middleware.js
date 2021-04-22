module.exports.requireAuth = (req, res, next) => {
    console.log("cookie: " + req.cookies.username);
    if (!req.cookies.username) {
        res.redirect('http://localhost:3000/admin/login');
    }
    if (req.cookies.username) {
        next();
    }
};
module.exports.requireAuthGetLogin = (req, res, next) => {
    console.log("cookie: " + req.cookies.username);
    if (!req.cookies.username) {
        next();
    }
    if (req.cookies.username) {
        res.redirect('/admin/dashboard');
    }
};
module.exports.dashboard = (req, res, next) => {
    console.log("cookie: " + req.cookies.username);
    if (!req.cookies.username) {
        res.redirect('/admin/login');
    }
    if (req.cookies.username) {
        next();
    }
};