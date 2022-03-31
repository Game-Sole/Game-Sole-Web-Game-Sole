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

// No criteria search & Criteria search
// Testing get product from criteria and no criteria
// method: post
// URL: http://localhost:4301/product-search
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
const SearchProduct = (req, res) => {
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
const ResultProduct = (req, res) => {
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
  SearchProduct,
  ResultProduct
};
