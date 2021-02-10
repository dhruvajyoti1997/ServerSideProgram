const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {useNewUrlParser: true, useCreateIndex: true});

const Users = mongoose.model('users', {
name : {
    type : String,
    required: true
},
age : {
    type : Number
}
});

const me = new Users({ name: 'Zildjian', age : 30 });
me.save().then(() => { console.log(me) }).catch((error) =>{
    console.log('Error',error)
});