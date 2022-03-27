let express = require("express"),
    session = require('express-session'),
    mysql = require("mysql2"),
    cors = require("cors"),
    path = require("path"),
    fs = require("fs");
app = express(),
    port = process.env.port || 4301,
    route = express.Router();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to root and password for databasee
const dotenv = require("dotenv");
dotenv.config();

//create the connection the database.
let dbConn = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.name,
});

app.use(express.static(path.join(__dirname, '/../')));
// http://localhost:4301/Login
app.get('/Login', function (req, res) {
    // Render login template
    res.sendFile(path.join(__dirname, '/../HTML file/Login.html' ))
});

app.post('/Authentication', function (req, res) {
    // Capture the input fields
    let USER_EMAIL = req.body.UserEmail;
    let USER_Password = req.body.UserPassword;
    if (USER_EMAIL && USER_Password) {
        dbConn.query('SELECT * FROM USER WHERE USER_EMAIL = ? AND USER_Password = ?', [USER_EMAIL, USER_Password], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.USER_EMAIL = USER_EMAIL;
                res.redirect('/Homepage');
            } else {
                res.send('Incorrect Email and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Email and Password!');
        res.end();
    }
});

// http://localhost:4301/Homepage
app.get('/Homepage', function (req, res) {
    // Render login template
    res.sendFile(path.join(__dirname + "/../HTML file/Homepage.html"));
});

app.listen(port);
console.log("Running at Port " + port);
