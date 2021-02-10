const http = require('http')
const app = require('./app3')
const server = http.createServer(app)
 

server.listen(5555, console.log('app is running'))