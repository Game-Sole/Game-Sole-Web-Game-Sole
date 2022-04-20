let express = require("express"),
  mysql = require("mysql2"),
  cors = require("cors"),
  fs = require("fs");
(app = express()), (port = process.env.port || 4301);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const dotenv = require("dotenv");
dotenv.config();

let dbConn = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.name,
});
//Products or services in the system.

//Search
// Testing get single product
// method: get
// URL: http://localhost:4301/product/1
// URL: http://localhost:4301/product/2
// const Get1Product = (req, res) => {
//   let sqlQuery = "SELECT * FROM PRODUCT WHERE PROD_ID=" + req.params.id;
//   let query = dbConn.query(sqlQuery, (err, results) => {
//     if (err) throw err;
//     return res.send({
//       error: false,
//       data: results[0],
//       message: "Product retrieved",
//     });
//   });
// };

//View
// Testing get all product
// method: get
// URL: http://localhost:4301/products
// const GetAllProduct = (req, res) => {
//   //jpeg file in the base64 format.
//   dbConn.query("SELECT * FROM PRODUCT", function (error, results) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: "Products list." });
//   });
// };

//Insert
// Testing get insert new product
// method: post
// URL: http://localhost:4301/product
// body: raw (JSON)
//
// {
//   "PROD_Name": "It take two",
//   "PROD_Price": 445,
//   "PROD_Description": "Wins the game awards 2021 with a huge amount of positive reviews",
//   "PROD_Image": "https://static.wikia.nocookie.net/logopedia/images/a/a4/It-Takes-Two-logo.png/revision/latest/scale-to-width-down/568?cb=20210327123758",
//   "PROD_Type": "Video game",
//   "PROD_Period_generation": "Ninth",
//   "PROD_Console_type": "NULL"
// }
//
// {
//   "PROD_Name": "Wii console",
//   "PROD_Price": "5990",
//   "PROD_Description": "NULL",
//   "PROD_Image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Wii-console.jpg",
//   "PROD_Type": "Game player",
//   "PROD_Period_generation": "Seventh",
//   "PROD_Console_type": "home console player"
// }
const PostProduct = (req, res) => {
  let data = {
    PROD_Name: req.body.PROD_Name,
    PROD_Price: req.body.PROD_Price,
    PROD_Description: req.body.PROD_Description,
    PROD_Image: req.body.PROD_Image,
    PROD_Type: req.body.PROD_Type,
    PROD_Period_generation: req.body.PROD_Period_generation,
    PROD_Console_type: req.body.PROD_Console_type,
  };
  let sqlQuery = "INSERT INTO PRODUCT SET ?";
  let query = dbConn.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "New product has been created successfully.",
    });
  });
};

//Update
// Testing update product info
// method: put
// body: raw (JSON)
//
// URL: http://localhost:4301/product/2
// {
//   "PROD_Name": "Magnavox Odyssey 2",
//   "PROD_Price": 3000,
//   "PROD_Description": "One of the oldest home console game player from second generation",
//   "PROD_Image": "https://github.com/Game-Sole/Game-Sole-Web-Game-Sole/Web/Images/Product/Odyssey.jpg",
//   "PROD_Type": "Controller",
//   "PROD_Period_generation": "Second",
//   "PROD_Console_type": "home console player"
// }
//
// URL: http://localhost:4301/product/3
// {
//   "PROD_Name": "Wii console",
//   "PROD_Price": "5990",
//   "PROD_Description": "A popular game console",
//   "PROD_Image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Wii-console.jpg",
//   "PROD_Type": "Game player",
//   "PROD_Period_generation": "Seventh",
//   "PROD_Console_type": "home console player"
// }
const PutProduct = (req, res) => {
  let sqlQuery =
    "UPDATE PRODUCT SET PROD_Name='" +
    req.body.PROD_Name +
    "', PROD_Price='" +
    req.body.PROD_Price +
    "', PROD_Description='" +
    req.body.PROD_Description +
    "', PROD_Image='" +
    req.body.PROD_Image +
    "', PROD_Type='" +
    req.body.PROD_Type +
    "', PROD_Period_generation='" +
    req.body.PROD_Period_generation +
    "', PROD_Console_type='" +
    req.body.PROD_Console_type +
    "' WHERE PROD_ID=" +
    req.params.id;
  let query = dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "Product has been updated successfully.",
    });
  });
};

//Delete
// Testing delete product
// method: delete
// URL: http://localhost:4301/product/1
// URL: http://localhost:4301/product/2
const DeleteProduct = (req, res) => {
  let sqlQuery = "DELETE FROM PRODUCT WHERE PROD_ID=" + req.params.id;
  let query = dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "Product has been deleted successfully.",
    });
  });
};

//Users in the system.
//Search
// Testing get User information
// method: get
// URL: http://localhost:4301/user/1000000001
// URL: http://localhost:4301/user/1000000002
// const Get1User = (req, res) => {
//   let sqlQuery = "SELECT * FROM USER WHERE USER_ID=" + req.params.id;
//   let query = dbConn.query(sqlQuery, (err, results) => {
//     if (err) throw err;
//     return res.send({
//       error: false,
//       data: results[0],
//       message: "User Information retrieved",
//     });
//   });
// };

//View
// Testing get all User information
// method: get
// URL: http://localhost:4301/users
// const GetAllUser = (req, res) => {
//   dbConn.query("SELECT * FROM USER", function (error, results) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: "Users list." });
//   });
// };

//Insert
// Testing insert new User
// method: post
// URL: http://localhost:4301/user
// body: raw (JSON)

// {
//  "USER_Firstname": "Chayanin",
//  "USER_Lastname": "Boonnak",
//  "USER_Telephone": "0868224666",
//  "USER_Address": "Mexico 10188",
//  "USER_EMAIL": "Chaya.bon@hotmail.com",
//  "USER_Password": "Qwerty123-",
//  "USER_Role": "Client"
// }
//
// {
//  "USER_Firstname": "Bryt",
//  "USER_Lastname": "Berlin",
//  "USER_Telephone": "0214785905",
//  "USER_Address": "London 30184",
//  "USER_EMAIL": "BRYTAA@gmail.com",
//  "USER_Password": "Hoaemsd5211=",
//  "USER_Role": "Client"
// }
const PostUser = (req, res) => {
  let data = {
    USER_Firstname: req.body.USER_Firstname,
    USER_Lastname: req.body.USER_Lastname,
    USER_Telephone: req.body.USER_Telephone,
    USER_Address: req.body.USER_Address,
    USER_EMAIL: req.body.USER_EMAIL,
    USER_Password: req.body.USER_Password,
    USER_Role: req.body.USER_Role,
  };
  let sqlQuery = "INSERT INTO USER SET ?";
  let query = dbConn.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "New User information has been created successfully.",
    });
  });
};

//Update
// Testing update user info
// method: put
// body: raw (JSON)
//
// URL: http://localhost:4301/user/1000000001
// {
//  "USER_Firstname": "Chayanin",
//  "USER_Lastname": "Boonnak",
//  "USER_Telephone": "0868224666",
//  "USER_Address": "Pakistan 3215",
//  "USER_EMAIL": "Chaya.bon@hotmail.com",
//  "USER_Password": "Adsxzs521*",
//  "USER_Role": "Client"
// }
//
// URL: http://localhost:4301/user/1000000002
// {
//  "USER_Firstname": "Chantaton",
//  "USER_Lastname": "Visejton",
//  "USER_Telephone": "0246505557",
//  "USER_Address": "Pakistan 3215",
//  "USER_EMAIL": "Chatesa@hotmail.com",
//  "USER_Password": "Qweetrt123-",
//  "USER_Role": "Administator"
// }
const PutUser = (req, res) => {
  let sqlQuery =
    "UPDATE USER SET USER_Firstname='" +
    req.body.USER_Firstname +
    "', USER_Lastname='" +
    req.body.USER_Lastname +
    "', USER_Telephone='" +
    req.body.USER_Telephone +
    "', USER_Address='" +
    req.body.USER_Address +
    "', USER_EMAIL='" +
    req.body.USER_EMAIL +
    "', USER_Password='" +
    req.body.USER_Password +
    "', USER_Role='" +
    req.body.USER_Role +
    "' WHERE USER_ID=" +
    req.params.id;
  let query = dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "User information has been updated successfully.",
    });
  });
};

//Delete
// Testing delete User information
// method: delete
// URL: http://localhost:4301/user/1000000003
// URL: http://localhost:4301/user/1000000004
const DeleteUser = (req, res) => {
  let sqlQuery =
    "DELETE FROM USER WHERE USER.USER_ID=" + req.params.id;
  let query = dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "User information has been deleted successfully.",
    });
  });
};





















// No criteria search & Criteria search
// Testing get product from criteria and no criteria
// method: post
// URL: http://localhost:4301/product-edit-search
// body: raw (JSON)

// {
//   "USER_Firstname": "Sam",
//   "USER_Lastname": "Willer",
//   "USER_ID": "1000000001",
//   "USER_Role": "Administator"
// }
//
// {
//
// }
//
const SearchUser_edit = (req, res) => {
  const USER_Firstname = req.body.USER_Firstname;
  const USER_Lastname = req.body.USER_Lastname;
  const USER_ID = req.body.USER_ID;
  const USER_Role = req.body.USER_Role;
  var CheckBefore = new Boolean(false);
  let sqlQuery = "SELECT * FROM USER";
  if (
    USER_Firstname != "" &&
    USER_Firstname != undefined &&
    USER_Firstname != "null"
  ) {
    sqlQuery = sqlQuery.concat(
      " WHERE USER_Firstname LIKE '%" + USER_Firstname + "%'"
    );
    CheckBefore = true;
  }
  if (
    USER_Lastname != "" &&
    USER_Lastname != undefined &&
    USER_Lastname != "null"
  ) {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(
      " USER_Lastname LIKE '%" + USER_Lastname + "%'"
    );
    CheckBefore = true;
  }
  if (USER_ID != "" && USER_ID != undefined && USER_ID != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(" USER_ID='" + USER_ID + "'");
    CheckBefore = true;
  }
  if (USER_Role != null && USER_Role != undefined && USER_Role != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(" USER_Role='" + USER_Role + "'");
    CheckBefore = true;
  }  dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send({
      error: false,
      data: results,
      message: "Criteria Search User retrieved.",
    });
  });
};

// Secondary function for get the User in Result page
const ResultUser_edit = (req, res) => {
  const USER_ID = req.body.id;
  let sqlQuery = "SELECT * FROM USER WHERE USER_ID=" + USER_ID;
  dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send({
      error: false,
      data: results,
      message: "User result.",
    });
  });
};

// No criteria search & Criteria search
// Testing get product from criteria and no criteria
// method: post
// URL: http://localhost:4301/product-edit-search
// body: raw (JSON)

// {
//   "PROD_Name": "Sonic Ultimate Genesis Collection",
//   "PROD_Type": "Video game",
//   "PROD_Period_generation": "Seventh",
//   "PROD_Console_type": null,
//   "PROD_Price": 301
// }
//
// {
//
// }
//
const SearchProduct_edit = (req, res) => {
  const PROD_Name = req.body.PROD_Name;
  const PROD_Type = req.body.PROD_Type;
  const PROD_Period_generation = req.body.PROD_Period_generation;
  const PROD_Console_type = req.body.PROD_Console_type;
  const PROD_Price = req.body.PROD_Price;
  var CheckBefore = new Boolean(false);
  let sqlQuery = "SELECT * FROM PRODUCT";
  if (PROD_Name != "" && PROD_Name != undefined && PROD_Name != "null") {
    sqlQuery = sqlQuery.concat(" WHERE PROD_Name LIKE '%" + PROD_Name + "%'");
    CheckBefore = true;
  }
  if (PROD_Type != null && PROD_Type != undefined && PROD_Type != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(" PROD_Type='" + PROD_Type + "'");
    CheckBefore = true;
  }
  if (PROD_Period_generation != null && PROD_Period_generation != undefined && PROD_Period_generation != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(
      " PROD_Period_generation='" + PROD_Period_generation + "'"
    );
    CheckBefore = true;
  }
  if (PROD_Console_type != null && PROD_Console_type != undefined && PROD_Console_type != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(
      " PROD_Console_type='" + PROD_Console_type + "'"
    );
    CheckBefore = true;
  }
  if (PROD_Price != "" && PROD_Price != undefined && PROD_Price != "null") {
    if (CheckBefore == true) {
      sqlQuery = sqlQuery.concat(" AND");
    } else {
      sqlQuery = sqlQuery.concat(" WHERE");
    }
    sqlQuery = sqlQuery.concat(" PROD_Price <= " + PROD_Price);
    CheckBefore = true;
  }
  dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send({
      error: false,
      data: results,
      message: "Criteria Search Product retrieved.",
    });
  });
};

// Secondary function for get the product in Result page
const ResultProduct_edit = (req, res) => {
  const PROD_ID = req.body.id;
  let sqlQuery = "SELECT * FROM PRODUCT WHERE PROD_ID=" + PROD_ID;
  dbConn.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send({
      error: false,
      data: results,
      message: "Product result.",
    });
  });
};

module.exports = {
  // Get1Product,
  // GetAllProduct,
  PostProduct,
  PutProduct,
  DeleteProduct,
  // Get1User,
  // GetAllUser,
  PostUser,
  PutUser,
  DeleteUser,
  SearchUser_edit,
  ResultUser_edit,
  SearchProduct_edit,
  ResultProduct_edit
};
