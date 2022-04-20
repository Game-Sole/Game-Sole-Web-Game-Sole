const router = require("express").Router();
const express = require('express');

const jwt = require('jsonwebtoken');

// Website path------------------------------------------------------------------------------------------------------------
const { AboutUs, Chayut, Kanapon, Theetrat, Homepage, Login, Register, ShopPage, Result, User_edit, Result_User_edit, Product_edit, Result_Product_edit, Add_Product_edit, Add_User_edit } = require("./Controller/Path");

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
router.get("/Result.html/:id", Result);

// http://localhost:4301/User-edit.html
router.get("/User-edit.html", User_edit);

// http://localhost:4301/Result_User-edit.html
router.get("/Result_User-edit.html/:id", Result_User_edit);

// http://localhost:4301/Product-edit.html
router.get("/Product-edit.html", Product_edit);

// http://localhost:4301/Result_Product-edit.html
router.get("/Result_Product-edit.html/:id", Result_Product_edit);

// http://localhost:4301/Add-product.html
router.get("/Add-product.html", Add_Product_edit);

// http://localhost:4301/Add-product.html
router.get("/Add-User.html", Add_User_edit);

// Website path------------------------------------------------------------------------------------------------------------

//AdministratorService------------------------------------------------------------------------------------------------------------
const { /*Get1Product, GetAllProduct,*/ PostProduct, PutProduct, DeleteProduct, /*Get1User, GetAllUser,*/ PostUser, PutUser, DeleteUser, SearchUser_edit, ResultUser_edit, SearchProduct_edit, ResultProduct_edit} = require("./Controller/AdministratorService");
//See test case in filename 'AdministratorService.js' on folder 'Controller'

//For CRUD product
// router.get("/product/:id", Get1Product); this is an old version of search
// router.get("/products", GetAllProduct); this is an old version of search
router.post("/Result_Product-Add", PostProduct);
router.put("/Result_Product-edit/:id", PutProduct);
router.delete("/Result_Product-delete/:id", DeleteProduct);

//For CRUD user
// router.get("/user/:id", Get1User); this is an old version of search
// router.get("/users", GetAllUser); this is an old version of search
router.post("/Result_User-Add", PostUser);
router.put("/Result_User-edit/:id", PutUser);
router.delete("/Result_User-delete/:id", DeleteUser);

//For search User
router.post("/user-edit-search", SearchUser_edit);
router.post("/user-edit-result", ResultUser_edit);

//For search Product
router.post("/product-edit-search", SearchProduct_edit);
router.post("/product-edit-result", ResultProduct_edit);
//AdministratorService------------------------------------------------------------------------------------------------------------

//UsersService------------------------------------------------------------------------------------------------------------
const { SearchProduct, ResultProduct } = require("./Controller/UsersService");
//See test case in filename 'UsersService.js' on folder 'Controller'

router.post("/product-search", SearchProduct);
router.post("/product-result", ResultProduct);
//UsersService------------------------------------------------------------------------------------------------------------

//Login & Register------------------------------------------------------------------------------------------------------------
const { RegisUser, LoginUser, GetUserForToken } = require("./middlewares/auth");
//See test case in filename 'auth.js' on folder 'middlewares'

router.post("/Register", RegisUser);
router.post("/Login", LoginUser);
router.post("/cookie", GetUserForToken);
//Login & Register------------------------------------------------------------------------------------------------------------

module.exports = router;