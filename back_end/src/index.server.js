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
        useUnifiedTopology: true,
        user
    }
).then(() =>{
    console.log("Database connected");
})

// when you are making a request from browser/postman and the other side of the backend you are handling that
// request for making a arequest or handling a request  if you perform some activity like manipulating the data 
// based on your requirement thats a middleware 
app.use(bodyParser.json());
app.use('/api',userRoutes);

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