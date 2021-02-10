const express = require('express');
const app= express();
const path = require('path')
const http= require('http')
var bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator')
const port =3000

const urlencodedparser = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs')
app.get('/', (req,res) =>{
    res.render('index')
})
app.get('/register', (req,res) =>{
    res.render('register')
})
app.post('/register',urlencodedparser, [
    check('username','The username must be 3+ character long')
    .exists()
    .isLength({min: 3}),
    check('email','Not a valid E-mail')
    .isEmail()
    .normalizeEmail()
],(req,res) =>{
  //  res.json(req.body)
  const errors = validationResult (req);
  if (!errors.isEmpty()) {
    return res.status(400).jsonp({ errors: errors.array() });
    //alert('The username must be 3+ character long')
  }
})
app.listen(port, () =>
console.info(`App listening on port: ${port}`)
)