import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();

// routes
import userRoutes from "./routes/user.js";

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
app.use('/api', userRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
