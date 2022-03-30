let express = require("express"),
    session = require('express-session'),
    mysql = require("mysql2"),
    cors = require("cors"),
    path = require("path"),
    jwt_decode = require('jwt-decode'),
    jwt = require("jsonwebtoken");
app = express(),
    port = process.env.port || 4301,
    app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

let corsOptions = {
    origin: 'http://localhost:4301',
    methods: 'GET,POST,PUT,DELETE'
}
app.use(cors(corsOptions));

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

// Testing register new User
// method: post
// URL: http://localhost:4301/Register
// body: raw (JSON)
// {
//     "UserEmail": "ezez@hotmail.com",
//     "UserPassword": "Q123asdf/",
//     "Userfirstname": "Whong",
//     "Userlastname": "Phongshi",
//     "UserAddress": "Bangkok 10150",
//     "UserTel": "0785428768"
// }
// {
//     "UserEmail": "WOWza@gmail.com",
//     "UserPassword": "Kpoa5628-",
//     "Userfirstname": "Renard",
//     "Userlastname": "Honglen",
//     "UserAddress": "Bangbon 10450",
//     "UserTel": "0652145236"
// }
const RegisUser = (req, res) => {
    let data = {
        USER_Firstname: req.body.Userfirstname,
        USER_Lastname: req.body.Userlastname,
        USER_Telephone: req.body.UserTel,
        USER_Address: req.body.UserAddress,
        USER_EMAIL: req.body.UserEmail,
        USER_Password: req.body.UserPassword
    };
    let sqlQuery = "INSERT INTO USER SET ?";
    let query = dbConn.query(sqlQuery, data, (err, results) => {
        if (err) throw err;
        console.log("Create new user successful");
        return res.redirect("/Login.html");
    });
};

// Testing Login User
// method: post
// URL: http://localhost:4301/Login
// body: raw (JSON)
// {
//     "UserEmail": "SamWill@gmail.com",
//     "UserPassword": "Firstmustang35*"
// }
//
// {
//     "UserEmail": "Kruger1996@hotmail.com",
//     "UserPassword": "Jadewheel89-"
// }
// If login fail it will restart login page again
// If login as admin in front of useremail will have admin || example admin: example@email.com || if not it will show just only email
const LoginUser = (req, res) => {
    let data = {
        email: req.body.UserEmail,
        password: req.body.UserPassword
    }
    if (data.email && data.password) {
        dbConn.query('SELECT USER_ID FROM USER WHERE USER_EMAIL = ? AND USER_Password = ?', [data.email, data.password], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                let jwtToken = jwt.sign({
                    User_ID: results
                }, process.env.SECRET, {
                    expiresIn: "1h"
                });
                res.cookie('GameSoletoken', jwtToken);
                res.redirect('/Homepage.html');
            } else {
                console.log("Login Failed");
                res.redirect('/Login.html');
            }
        });
    } else {
        console.log("Login Failed");
        res.redirect('/Login.html');
    }
};


// This is for decode token and send user information it to HTTP
const GetUserForToken = (req, res) => {
    let token = req.body.cookie;
    var decoded = jwt_decode(token);
    var uid = decoded.User_ID[0].USER_ID;
    let sqlQuery = "SELECT * FROM USER WHERE USER_ID=" + uid;
    let query = dbConn.query(sqlQuery, (err, results) => {
        if (err) {
            res.sendStatus(401);
        } else {
            var response = {
                status: 200,
                success: 'Login successful',
                email: results[0].USER_EMAIL,
                role: results[0].USER_Role
            }
            res.end(JSON.stringify(response));
        };
    });
}

module.exports = {
    RegisUser,
    LoginUser,
    GetUserForToken
};