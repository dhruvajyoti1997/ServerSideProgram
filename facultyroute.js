const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message : "faculty get request"
    })
})

router.post('/', (req,res,next) =>{
    res.status(200).json({
        message : "faculty post request"
    })
})

module.exports = router