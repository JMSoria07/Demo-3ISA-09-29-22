//connect to database 

//import mysql
const mysql = require ('mysql2')


con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "6922",
     database: 'Student'
})

con.connect((err)=>{
    if(!err){
        console.log("connected to the database at port 3306...")
    }
    else console.log("not able to connect...")
})

// let sql = "CREATE DATABASE IF NOT EXISTS Student"

// con.execute(sql,(err,results) =>{
//     if(!err){
//         console.log("Student database successfully created")
//     }
// })

// let sql2 = "CREATE TABLE IF NOT EXISTS student (sid INT PRIMARY KEY, name VARCHAR(50), age INT );"

// con.query(sql2,(err,results)=>{
//     if(!err)
//         console.log("Student table successfully created")
    
// })

// let sql3 = "INSERT INTO student VALUES (2,'Pablo Gomez',18)"
// con.query(sql3,(err,result)=>{
//     if(!err)
//         console.log(result)
//         else console.log("cannot insert data")
    
// })

let sql4 = "SELECT stud.name, subj.description\
FROM student as stud, subject as subj\
WHERE stud.sid=subj.sid"
con.query(sql4,(err,result)=>{
        if(!err)
        console.log(result )
    })

// let sql5 = "UPDATE student SET name='Pablo Gomez' WHERE sid2"
// con.query(sql5,(err,results)=>{
//     if(!err)
//     console.log("successfully updated the record")
// })

// let sql6 = "DELETE FROM student WHERE sid=1"
// con.query(sql6,(err,results)=>{
//     if(!err)
//     console.log("record deleted")
// })
