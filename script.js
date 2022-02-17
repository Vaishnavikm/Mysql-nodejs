// 'use strict';

const fs = require('fs');
var mysql = require('mysql2')
const express = require('express');
const path = require('path');
const exp = require('constants');
const { join } = require('path');
//const parser = require('body-parser');
const app = express();
//const angular = require('angular');
const port = 9000

// const cors = require('cors');
// app.use(cors({
//     origin: '*'
// }));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "Vaishu@2000",
  database: 'food'
})
connection.connect(function(err) {
  if (err) console.log(err);
  console.log('Database connected...') 
})

app.listen(port, (err) => {
  if (err) console.log("Error starting server");
  else console.log(`Server listening at ${port}`);
})
app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/Customer', (req, res) => {
  connection.query('SELECT * FROM customer', (err, data, fields) => {
    if(!err) {
      data = JSON.stringify(data, null, 2)
      res.write(data)
      res.end()
      return
    }else {
      console.log(err);
    }
  })
})






// var http = require('http');

// Create a server object
// http.createServer(function(req, res) {

//     // http header
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     var url = req.url;

//     if (url === '/') {
        
//       var mysql = require('mysql')
//       const SqlString = require('mysql/lib/protocol/SqlString')
      
//       var connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: "qwerty123!@#"

//       })
      
//       connection.connect(function(err) {
//         if (err) throw err
//         console.log('You are now connected...') 
//       })
//     } 
    
//      else {
//       //  res.writeHead(200);
//         res.write('Server loaded.');
//         res.end();

//     }
// }).listen(3000, function() {

//     // The server object listens on port 3000
//     console.log("\nServer starts at port 3000");
// });

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/
//