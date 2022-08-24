const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/events', (req, res) => {
  db.getEvents()
    .then((events) => {
      res.render('events', { events })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/events/add', (req, res) => {
  db.getAlllocations()
    .then((locations) => {
      res.render('eventAdd', { locations })
    })
    .catch((err) => res.send(err.message))
})

router.post('/events/add', (req, res) => {
  const {
    eventTitle,
    locationId,
    eventDate,
    eventDescription,
    eventType,
    eventPrice,
  } = req.body
  db.addEvent(
    eventTitle,
    eventDate,
    locationId,
    eventDescription,
    eventPrice,
    eventType
  )
    .then(() => {
      res.redirect('/events')
    })
    .catch((err) => res.send(err.message))
})

module.exports = router
