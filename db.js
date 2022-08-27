const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getEvents,
  getAlllocations,
  addEvent,
  getEventbyId,
  updateEvent,
  deleteEvent,
  addLocation,
}

function getEvents(db = connection) {
  return db('events')
    .join('locations', 'events.location_id', 'locations.id')
    .select(
      '*',
      'events.name AS event_name',
      'events.id AS event_id',
      'locations.id AS location_id',
      'locations.name AS location_name',
      'events.description As event_description'
    )
}

function addEvent(event, db = connection) {
  return db('events').insert({
    name: event.eventTitle,
    location_id: event.locationId,
    date: event.eventDate,
    description: event.eventDescription,
    price: event.eventPrice,
    type: event.eventType,
  })
}

function getEventbyId(id, db = connection) {
  return db('events')
    .join('locations', 'events.location_id', 'locations.id')
    .select(
      '*',
      'events.name AS event_name',
      'events.id AS event_id',
      'locations.id AS location_id',
      'locations.name AS location_name',
      'events.description As event_description'
    )
    .where('events.id', id)
    .first()
}

function updateEvent(
  id,
  eventTitle,
  eventDate,
  locationId,
  eventDescription,
  db = connection
) {
  return db('events')
    .update({
      name: eventTitle,
      location_id: locationId,
      date: eventDate,
      description: eventDescription,
    })
    .where('events.id', id)
}

function deleteEvent(id, db = connection) {
  return db('events').where('events.id', id).delete()
}

function getAlllocations(db = connection) {
  return db('locations').select()
}

function addLocation(name, description, db = connection) {
  return db('locations').insert({
    name: name,
    description: description,
  })
}
