const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getEvents,
  getAlllocations,
  addEvent,
}

function getEvents(db = connection) {
  return db('events')
    .join('locations', 'events.location_id', 'locations.id')
    .select(
      '*',
      'events.name AS event_name',
      'events.id AS event_id',
      'locations.id AS location_id',
      'locations.name AS location_name'
    )
}

function addEvent(
  eventTitle,
  eventDate,
  locationId,
  eventDescription,
  eventPrice,
  eventType,
  db = connection
) {
  return db('events').insert({
    name: eventTitle,
    location_id: locationId,
    date: eventDate,
    description: eventDescription,
    price: eventPrice,
    type: eventType,
  })
}

function getAlllocations(db = connection) {
  return db('locations').select()
}
