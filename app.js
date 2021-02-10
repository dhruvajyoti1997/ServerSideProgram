const express= require('express')
const app= express()
const port =8818
var bodyParser = require('body-parser');
app.set('views', './views') //for setting up any template engines , views folder needs to be created.
app.set('view engine', 'ejs')
const urlencoded= bodyParser.urlencoded({ extended: false }) 

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/register', (req,res) =>{
    res.render('register')
})
app.post('/register' ,urlencoded, (req,res)=>{
    res.json(req.body)
})

app.listen(port, () =>
console.info(`App listening on port: ${port}`)
)


const mongodb = require('mongodb')

const mongoclient= mongodb.mongoclient;

const URL = 'mongo://localhost:27017';

const dbName = 'users';

mongoclient.connect(URL, (err,client) =>{
    if(err) {
        throw err;
        return;
    }
    console.log('Connection Successful');
})