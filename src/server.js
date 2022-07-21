require("dotenv").config();
import express from "express";
import configView from "./config/config";
import url from "./routes/web";
import bodyParser from 'body-parser';
import connection from './config/connectDB';
import urlAPI from "./routes/api";
import cookieParser from "cookie-parser";

// require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//config view
configView(app);

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookie parser
app.use(cookieParser());

//test connect database
connection();

//web router
url(app);

//web api
urlAPI(app);

//middleware 404
app.use((req, res) => {
    return res.send("404 not found ")
})

app.listen(PORT, () => {
    console.log(">>> server is running on port " + PORT);
})