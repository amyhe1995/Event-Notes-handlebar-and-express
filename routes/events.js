const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/events', (req, res) => {
  db.getEvents()
    .then((events) => {
      console.log(events)
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
  const event = {
    locationId: req.body.locationId,
    eventTitle: req.body.eventTitle,
    eventDate: req.body.eventDate,
    eventType: req.body.eventType,
    eventDescription: req.body.eventDescription,
    eventPrice: req.body.eventPrice,
  }
  console.log(event)
  db.addEvent(event)
    .then(() => {
      res.redirect('/events')
    })
    .catch((err) => res.send(err.message))
})

module.exports = router
