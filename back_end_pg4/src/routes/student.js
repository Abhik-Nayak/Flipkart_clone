const express = require("express");
const router = express.Router();
const path = require("../controllers/student")

router.get ("/", path.getStudents);
router.post("/",  path.addStudent);
router.get ("/:id", path.getStudentById);
router.post("/delete", path.deleteStudent);
module.exports  = router;