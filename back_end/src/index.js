// import express from "express";
const express = require("express");
// import env from "dotenv";
const env = require("dotenv");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const app = express();

// routes
// import authRoutes from "./routes/user.js";
const authRoutes = require("./routes/auth");

// environment  variable or you can say constants
env.config();

// mongodb connection 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATBASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        // user
    }
).then(() =>{
    console.log("Database connected");
})

// bodyparser middleware
app.use(express.json(bodyParser));
app.use('/api', authRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
