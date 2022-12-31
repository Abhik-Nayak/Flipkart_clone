import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import env from "dotenv";

const app = express();

// routes
import userRoutes from './routes/user.js';

// environment variable or you can say constants
env.config();

// mongodb connection 
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATBASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() =>{
    console.log("Database connected");
})
app.use(bodyParser.json());

try{
app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Hello from Server'
    })
})
app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message: req.body
    })
})
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})
}catch(err){
    console.log(err);
}