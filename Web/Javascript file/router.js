const router = require("express").Router();

// Website path------------------------------------------------------------------------------------------------------------
const { AboutUs, Chayut, Kanapon, Theetrat, Homepage, Login, Register, ShopPage, Result } = require("./Controller/Path");

// http://localhost:4301/AboutUs.html
router.get("/AboutUs.html", AboutUs);

// http://localhost:4301/Chayut.html
router.get("/Chayut.html", Chayut);

// http://localhost:4301/Kanapon.html
router.get("/Kanapon.html", Kanapon);

// http://localhost:4301/Theetrat.html
router.get("/Theetrat.html", Theetrat);

// http://localhost:4301/Homepage.html
router.get("/Homepage.html", Homepage);

// http://localhost:4301/Login.html
router.get("/Login.html", Login);

// http://localhost:4301/Register.html
router.get("/Register.html", Register);

// http://localhost:4301/ShopPage.html
router.get("/ShopPage.html", ShopPage);

// http://localhost:4301/Result.html
router.get("/Result.html", Result);
// Website path------------------------------------------------------------------------------------------------------------

module.exports = router;