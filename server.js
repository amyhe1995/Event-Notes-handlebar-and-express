const express = require('express')
const fs = require('fs')
const hbs = require('express-handlebars')
const server = express()
const routes = require('routes')
const data = require('./data.json')

// middleware setup
server.use(express.static('public'))
server.use(express.urlencoded({ extend: true }))
// HANDLEBARS CONFIGURATION
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// homepage route setup
server.get('/', (req, res) => {
  fs.writeFile(data, (err, data) => {
    if (err) return res.status(500).send(err.message)
    const parsedData = JSON.parse(data)
    res.render('home', parsedData)
  })
})

//edit page route
server.use('/', routes)
module.exports = server
