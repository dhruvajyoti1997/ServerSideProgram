const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Student = require('./studentSchema')
router.get('/', (req,res,next) =>{
    // res.status(200).json({
    //     message : "student get request"
    // })
    try {
    Student.find().then(result => {
     res.status(200).json({
         StudentData : result
     });
    })
} catch(err){
    res.status(500).json({
        error : err
    })
}
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

//delete one user starts

// router.delete('/name:', (req,res,next) =>{
//     try {
//     Student.remove({name: req.params.name}).then( result =>{
//         res.status(200).json({
//             message : "Following student is delete from the account",
//             result : result
//         })
//     })
// } catch(err){
//     res.status(500).json({
//         error : err
//     })
// }
// })

router.get('/id',(req,res,next) =>{
    console.log(req.params._id)
})
//delete user ends

//put vs patch , in put all the fields has to given while updating while in patch only id or any particular field is required during updation

module.exports = router