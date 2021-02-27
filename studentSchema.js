const mongoose = require('mongoose')

const studenntschema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId ,
    name: String,
   rollNo: Number,
   email: String,
   gender : String
})


module.exports = mongoose.model('Student',studenntschema)