let path = require("path")
cors = require("cors");

// http://localhost:4301/AboutUs
const AboutUs = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/AboutUs.html'))
});

// http://localhost:4301/Chayut
const Chayut = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Chayut.html'))
});

// http://localhost:4301/Kanapon
const Kanapon = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Kanapon.html'))
});

// http://localhost:4301/Theetrat
const Theetrat = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Theetrat.html'))
});

// http://localhost:4301/Homepage
const Homepage = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Homepage.html'))
});

// http://localhost:4301/Login
const Login = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Login.html'))
});

// http://localhost:4301/Register
const Register = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Register.html'))
});

// http://localhost:4301/ShopPage
const ShopPage = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/ShopPage.html'))
});

// http://localhost:4301/Result
const Result = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Result.html'))
});

// http://localhost:4301/User-edit
const User_edit = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/User-edit.html'))
});

// http://localhost:4301/Result_User-edit
const Result_User_edit = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Result_User-edit.html'))
});

// http://localhost:4301/User-edit
const Product_edit = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Product-edit.html'))
});

// http://localhost:4301/Result_User-edit
const Result_Product_edit = (cors(), (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Result_Product-edit.html'))
});

module.exports = {
    AboutUs,
    Chayut,
    Kanapon,
    Theetrat,
    Homepage,
    Login,
    Register,
    ShopPage,
    Result,
    User_edit,
    Result_User_edit,
    Product_edit,
    Result_Product_edit,
};