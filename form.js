const express = require('express');
const app= express();
const path = require('path')
const http= require('http')
var bodyParser = require('body-parser');
const port =3000
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
app.use('/',express.static(path.join(__dirname, '/static')));

// Set 'views' directory for any views 
// being rendered res.render()
//app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.json())

app.post('api/register',async (req,res) => {
    res.render("form.html")
    console.log(req.body)
})

//app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () =>
console.info(`App listening on port: ${port}`)
)