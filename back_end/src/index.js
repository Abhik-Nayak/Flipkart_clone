const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const app = express();

// routes
// import authRoutes from "./routes/user.js";
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

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

mongoose.connect("mongodb://localhost:27017/flipkrt_clone_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log("connected")
}).catch(err => console.log(err));


// bodyparser middleware
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api',cartRoutes);

