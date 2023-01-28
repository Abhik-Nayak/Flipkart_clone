const pool = require("../db");
const queries = require("../models/student");

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log("dsfas",id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }
        else {
            pool.query(
                queries.addStudent, [name, email, age, dob], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("Student Created successfully");
                }
            )
        }
    })
}

const deleteStudent = (req, res) => {
    const { id } = req.body;
    pool.query(queries.getStudentById, [id], (error, results) => {
        let noStudentfound = results.rows.length;
        console.log(noStudentfound)
        if (!noStudentfound) {
            res.status(201).send("Student doesnot exists");
        }
        else {
            pool.query(queries.deleteStudent, [id], (error, results) => {
                if (error) throw error;
                res.status(201).send("Student deleted successfully");
            })
        }
    })


}
module.exports = { getStudents, getStudentById, addStudent, deleteStudent }