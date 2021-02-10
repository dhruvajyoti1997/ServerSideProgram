const mongoose = require('mongoose')

const studenntschema = new mongoose.Schema({

    name: String,
   rollNo: Number,
   email: String,
   gender : String
})


module.exports = mongoose.model('Student',studenntschema)