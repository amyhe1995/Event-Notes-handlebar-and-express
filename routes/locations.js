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

module.exports = router
