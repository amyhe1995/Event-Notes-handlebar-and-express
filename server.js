const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const locationRoutes = require('./routes/locations')
const eventRoutes = require('./routes/events')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'public')))

// Routes
server.use('/', locationRoutes)
server.use('/', eventRoutes)

server.get('/', (req, res) => {
  res.render('home')
})

module.exports = server
