// Modules and Globals
require('dotenv').config()
const path = require('path');
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
    });
  }
  
// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})