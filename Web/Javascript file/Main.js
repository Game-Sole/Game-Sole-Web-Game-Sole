let express = require("express"),
	session = require('express-session'),
	mysql = require("mysql2"),
	cors = require("cors"),
	path = require("path"),
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

const router = require("./router");
const authorize = require("./middlewares/auth");

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

app.use(express.static(path.join(__dirname, '/../')));

app.use(router);

app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});