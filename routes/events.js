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

router.get('/events/:id', (req, res) => {
  db.getEventbyId(req.params.id)
    .then((event) => {
      res.render('event', event)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/event/:id/edit', (req, res) => {
  db.getEventbyId(req.params.id)
    .then((event) => {
      db.getAlllocations()
        .then((locations) => {
          const viewData = { event, locations }
          console.log(viewData)
          res.render('eventEdit', viewData)
        })
        .catch((err) => res.send(err.message))
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/event/:id/edit', (req, res) => {
  const { eventTitle, eventDate, locationId, eventDescription } = req.body

  const id = req.params.id

  return db
    .updateEvent(id, eventTitle, eventDate, locationId, eventDescription)
    .then(() => {
      res.redirect('/events')
    })
    .catch((err) => res.send(err.message))
})

router.post('/events/delete', (req, res) => {
  const id = Number(req.body.id)

  db.deleteEvent(id)
    .then(() => {
      res.redirect('/events')
    })
    .catch((err) => res.send(err.message))
})

module.exports = router
