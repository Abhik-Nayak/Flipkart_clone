const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const DefaultData = require("./default.js")
// routes
const userRoutes = require("./routes/route");


// environment  variable or you can say constants
env.config();

// mongodb connection 
// mongoose.connect(
//     `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8iiqxqw.mongodb.net/${process.env.MONGO_DB_DATBASE}?retryWrites=true&w=majority`,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//         // user
//     }
// ).then(() =>{
//     console.log("Database connected");
// })

mongoose.connect("mongodb://localhost:27017/flipkrt_clone_db_1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("connected");
}).catch(err => console.log(err));

app.use(cors());
// bodyparser middleware
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// DefaultData();
app.use("/",userRoutes);
