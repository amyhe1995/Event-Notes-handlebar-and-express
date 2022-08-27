const express = require('express')

const db = require('../db')

const router = express.Router()
router.get('/locations', (req, res) => {
  db.getAlllocations()
    .then((locations) => {
      const viewData = { locations }
      res.render('locations', viewData)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/location/add', (req, res) => {
  res.render('addLocation')
})

router.post('/location/add', (req, res) => {
  const { name, description } = req.body

  db.addLocation(name, description)
    .then(() => {
      res.redirect('/locations')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/location/:id', (req, res) => {
  db.getLocationById(req.params.id)
    .then((location) => {
      res.render('location', location)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/location/:id/edit', (req, res) => {
  db.getLocationById(req.params.id)
    .then((location) => {
      res.render('locationEdit', location)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/location/:id/edit', (req, res) => {
  const { name, description } = req.body
  const id = req.params.id
  return db
    .updateLocation(id, name, description)
    .then(() => {
      res.redirect('/locations')
    })
    .catch((err) => res.send(err.message))
})

module.exports = router
