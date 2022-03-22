let express = require("express"),
  mysql = require("mysql2"),
  cors = require("cors"),
  app = express(),
  port = process.env.port || 6098,
  route = express.Router();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const dotenv = require("dotenv");
dotenv.config();

//create the connection the database.
let dbConn = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.name,
});

//Products or services in the system.
//Search
app.get("/product/:id", function (req, res) {
  dbConn.query(
    "SELECT * FROM PRODUCT WHERE PROD_ID=" + req.params.id,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "Product retrieved",
      });
    }
  );
});

//View
app.get("/products", function (req, res) {
  dbConn.query("SELECT * FROM PRODUCT", function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "Products list." });
  });
});

//Insert
app.post("product", function (req, res) {
  let data = {
    PROD_ID: req.body.PROD_ID,
    PROD_Name: req.body.PROD_Name,
    PROD_Price: req.body.PROD_Price,
    PROD_Description: req.body.PROD_Description,
    //PROD_Image: req.body.PROD_Image,
    PROD_Type: req.body.PROD_Type,
    PROD_Period_generation: req.body.PROD_Period_generation,
    PROD_Price: req.body.PROD_Price,
    PROD_Console_type: req.body.PROD_Console_type,
  };
  dbConn.query("INSERT INTO PRODUCT SET ?", set, function (error, results) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "New product has been created successfully.",
    });
  });
});

//Update
app.put("/product/:id", function (req, res) {
  dbConn.query(
    "UPDATE PRODUCT SET WHERE PROD_ID='" + req.params.id,
    +"', PROD_Name='" +
      req.body.PROD_Name +
      "', PROD_Price='" +
      req.body.PROD_Price +
      "', PROD_Description='" +
      req.body.PROD_Description +
      //"', PROD_Image='" +
      //req.body.PROD_Image +
      "' WHERE PROD_Type=" +
      req.body.PROD_Type +
      "' WHERE PROD_Period_generation=" +
      req.body.PROD_Period_generation +
      "' WHERE PROD_Console_type=" +
      req.body.PROD_Console_type,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Product has been updated successfully.",
      });
    }
  );
});

//Delete
app.delete("/product/:id", function (req, res) {
  dbConn.query(
    "DELETE FROM PRODUCT WHERE PROD_ID = " + req.params.id,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Product has been deleted successfully.",
      });
    }
  );
});

//Users in the system.
//Search
app.get("/user/:id", function (req, res) {
  dbConn.query(
    "SELECT * FROM USER WHERE PROD_ID=" + req.params.id,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results[0],
        message: "User retrieved",
      });
    }
  );
});

//View
app.get("/users", function (req, res) {
  dbConn.query("SELECT * FROM USER", function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "Users list." });
  });
});

//Insert
app.post("user", function (req, res) {
  let data = {
    USER_ID: req.body.USER_ID,
    USER_Firstname: req.body.USER_Firstname,
    USER_Lastname: req.body.USER_Lastname,
    USER_Telephone: req.body.USER_Telephone,
    USER_Address: req.body.USER_Address,
    USER_EMAIL: req.body.USER_EMAIL,
    USER_Password: req.body.USER_Password,
    USER_Role: req.body.USER_Role,
  };
  dbConn.query("INSERT INTO USER SET ?", set, function (error, results) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results.affectedRows,
      message: "New user has been created successfully.",
    });
  });
});

//Update
app.put("/user/:id", function (req, res) {
  dbConn.query(
    "UPDATE USER SET WHERE USER_ID='" + req.params.id,
    +"', USER_Firstname='" +
      req.body.USER_Firstname +
      "', USER_Lastname='" +
      req.body.USER_Lastname +
      "', USER_Telephone='" +
      req.body.USER_Telephone +
      "', USER_Address='" +
      req.body.USER_Address +
      "' WHERE USER_EMAIL=" +
      req.body.USER_EMAIL +
      "' WHERE USER_Password=" +
      req.body.USER_Password +
      "' WHERE USER_Role=" +
      req.body.USER_Role,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "User has been updated successfully.",
      });
    }
  );
});

//Delete
app.delete("/user/:id", function (req, res) {
  dbConn.query(
    "DELETE FROM USER WHERE USER_ID = " + req.params.id,
    function (error, results) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "User has been deleted successfully.",
      });
    }
  );
});

app.listen(port);
console.log("Running at Port " + port);
