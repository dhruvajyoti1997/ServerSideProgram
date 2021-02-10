const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Student = require('./studentSchema')
router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : "student get request"
    })
})

router.post('/', (req,res,next) =>{
    // res.status(200).json({
    //     message : "student post request"
    // })
const student = new Student({
    name: req.body.name,
   rollNo: req.body.rollNo,
   email: req.body.email,
   gender : req.body.gender
})
    //console.log(req.body)
    try {
    student.save().then(result =>{
        res.status(200).json({
            newStudent : result
        })
    })

} catch(err){
    res.status(500).json({
        error : err
    })
}
})

module.exports = router