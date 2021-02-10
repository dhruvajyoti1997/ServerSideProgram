const express = require('express')
const multer = require('multer')
const app = express()
const port =6666

const upload =  multer ({
    dest : 'images',
    limits : {
        fileSize: 5000
    },
    fileFilter(req,file,cb) //refer docs from internet
    {
    //  if(!file.originalname.endsWith('.pdf')) //refer docs from internet
    if(!file.originalname.match(/\.(doc|docx)$/)) //match allows regurlar expression
    {
          return cb(new Error('please upload a word document'))
      }
      cb(undefined,true)
    }
})
app.post('/upload', upload.single('upload'), (req,res) =>{
 res.send()
},
(error,req,res,next) =>
{
 res.status(400).send({ error : error.message})
})
//for handling express error while uploading files use (error,req,res,next) for not showing whole html content instead og that only show the errors in JSON format
app.listen(port, () =>
console.info(`App listening on port: ${port}`)
)