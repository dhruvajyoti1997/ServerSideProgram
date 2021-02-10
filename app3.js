const express = require('express')
const studentRoute = require('./student')
const facultyRoute =require('./facultyroute')
const app = express();
const mongoose = require('mongoose')
const bodyparser  = require('body-parser')
app.use(bodyparser.urlencoded({extended : false}))

// app.use('/', (req,res,next) =>{
//     res.status(200).json({message : `app is running on 5555`})
// })
mongoose.connect('mongodb+srv://dhruva:12345@dhruva.ayptx.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser : true},{ useUnifiedTopology: true })
mongoose.connection.on('error', err =>{
    console.log('error occured')
})
mongoose.connection.on('connected', connected =>{
    console.log('connected successfully!')
})
app.use(bodyparser.json())
app.use('/student', studentRoute)
app.use('/faculty', facultyRoute)
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Bad Url Request"
    })
})
module.exports = app