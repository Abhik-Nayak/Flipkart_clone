// const express = require("express");
// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'admin',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// console.log("index");

// const cors = require('cors');
// const express  = require('express');
// const bodyParser = require('body-parser');
// var typeorm = require("typeorm"); var EntitySchema = typeorm.EntitySchema;
// const http = require('http');
// // const app  = require('./app');
// const app = express();

// app.use(cors({
//     origin: "*",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }))
// app.use(bodyParser.urlencoded({ extended: true }));



// app.use(express.json())

// var connection =  typeorm.createConnection({
//     "type": "postgres",
//     "host": "localhost",
//     "port": 5432,
//     "username": "postgres",
//     "password": "admin",
//     "database": "postgres",
//     "synchronize": false,
//     "logging": false,
//     // entities: [
//     //     new EntitySchema(require("./entities/posts.json"))
//     // ]
// }).then(function (connection) {
//     console.log("connected");
//     const server =http.createServer(app);
//     server.listen(5000);

// }).catch(function (error) {
//     console.log("Error: ", error)
//     return;
// });

// module.exports = connection

const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var typeorm = require("typeorm");
var EntitySchema = typeorm.EntitySchema;
const http = require('http');

// environment  variable or you can say constants
env.config();

// app.use(cors({
//     origin: "*",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }))
// app.use(bodyParser.urlencoded({ extended: true }));


var connection = typeorm.createConnection({
    // "type": "mongodb",
    // "host": "localhost",
    // "port": 27017,
    // "database": "flipkart_clone_db",
    // "synchronize": false,
    // "logging": false,
    "type": "mongodb",
    "url": "mongodb+srv://abhiknayak:Abhik@1998@cluster0.8iiqxqw.mongodb.net/?retryWrites=true&w=majority",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "useCreateIndex": true,
    "synchronize": true,
    "logging": true,
    // "entities": ["src/entity/*.*"]
    
    // "synchronize": false,
    // "logging": false,
    // entities: [
    //     new EntitySchema(require("./entities/posts.json"))
    // ]
}).then(function (connection) {
    console.log("connected");
    // const server = http.createServer(app);
    // server.listen(5000);

}).catch(function (error) {
    console.log("Error: ", error)
    return;
});

app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = connection

