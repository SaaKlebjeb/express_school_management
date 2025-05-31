const express=require('express')
require('dotenv').config()
const app=express()
const cors=require('cors')
app.use(cors())// Cross-Origin Resource Sharing(cors).
app.use(express.json());
const requestTime=(req,res,next)=>{
    req.requestTime=(new Date()).toLocaleString()
    next()
}
app.use(requestTime)
//import 
const employee=require('./src/route/employee.route')
const student=require('./src/route/student.route')
const teacher=require('./src/route/teacher.route')
//use it
//employee
employee(app)
//student
student(app)
//teacher
teacher(app)
app.listen(process.env.PORT || 3000,()=>{
    console.log('running on port:', process.env.PORT ||3000)
})