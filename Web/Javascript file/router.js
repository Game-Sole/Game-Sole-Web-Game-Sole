const router = require("express").Router();
const express = require('express');

const jwt = require('jsonwebtoken');

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

// This is for task 3 only admin can see this.
// router.get('/secret-route', (req, res, next) => {
//     res.send('This is the CRUD operation for admin');
// });

// Website path------------------------------------------------------------------------------------------------------------

//AdminstratorService------------------------------------------------------------------------------------------------------------
const { Get1Product, GetAllProduct, PostProduct, PutProduct, DeleteProduct, Get1User, GetAllUser, PostUser, PutUser, DeleteUser } = require("./Controller/AdministratorService");
//See test case in filename 'AdministratorService.js' on folder 'Controller'

//For CRUD product
router.get("/product/:id", Get1Product);
router.get("/products", GetAllProduct);
router.post("/product", PostProduct);
router.put("/product/:id", PutProduct);
router.delete("/product/:id", DeleteProduct);

//For CRUD user
router.get("/user/:id", Get1User);
router.get("/users", GetAllUser);
router.post("/user", PostUser);
router.put("/user/:id", PutUser);
router.delete("/user/:id", DeleteUser);
//AdminstratorService------------------------------------------------------------------------------------------------------------

//Login & Register------------------------------------------------------------------------------------------------------------
const { RegisUser, LoginUser, GetUserForToken } = require("./middlewares/auth");
//See test case in filename 'auth.js' on folder 'middlewares'

router.post("/Register", RegisUser);
router.post("/Login", LoginUser);
router.post("/cookie", GetUserForToken);
//Login & Register------------------------------------------------------------------------------------------------------------

module.exports = router;