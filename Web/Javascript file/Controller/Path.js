let path = require("path");

// http://localhost:4301/AboutUs
const AboutUs = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/AboutUs.html'))
};

// http://localhost:4301/Chayut
const Chayut = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Chayut.html'))
};

// http://localhost:4301/Kanapon
const Kanapon = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Kanapon.html'))
};

// http://localhost:4301/Theetrat
const Theetrat = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Theetrat.html'))
};

// http://localhost:4301/Homepage
const Homepage = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Homepage.html'))
};

// http://localhost:4301/Login
const Login = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Login.html'))
};

// http://localhost:4301/Register
const Register = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Register.html'))
};

// http://localhost:4301/ShopPage
const ShopPage = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/ShopPage.html'))
};

// http://localhost:4301/Result
const Result = (req, res) => {
    res.sendFile(path.join(__dirname, '/../../HTML file/Result.html'))
};

module.exports = {
    AboutUs,
    Chayut,
    Kanapon,
    Theetrat,
    Homepage,
    Login,
    Register,
    ShopPage,
    Result
};