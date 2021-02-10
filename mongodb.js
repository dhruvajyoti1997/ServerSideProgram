const mongodb = require('mongodb')
//const MongoClient = require('mongodb/lib/mongo_client')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const database ='task-manager'
MongoClient.connect(connectionURL, {useNewParser : false}, (error, client) =>{
    if(error)
    {
        return console.log('Unable To Connect')
    }

    const db=  client.db(database)
  //  db.collection('users').insertOne({
     //   name : 'Dhruva',
   //     age: 23
  //  })

  /*db.collection('users').insertOne({
      name : 'jenny',
     age: 27
   }) */
   db.collection('users').insertOne({
      name : 'Shiba',
     age: 24
   }) 
})
   