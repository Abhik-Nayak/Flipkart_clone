const express = require("express");
const router = express.Router();
const app = express();
const PORT = 2000;

const student = require("./routes/student");


app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})
app.use(express.json());
app.use('/api/student', student);