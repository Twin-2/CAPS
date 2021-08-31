'use strict';

require('dotenv').config();
require('./resources/vendor.js')
require('./resources/driver.js')
const events = require('./lib/events.js');
// const { pickUp } = require('./resources/vendor.js');

//notifies driver when vendor alerts that an item is ready for pick up

//notifies vendor as item is picked up, intransit, and delivered.

//console logs all event with a timestamp

events.on('pickup', pickUp)

function pickUp(payload) {
    let timestamp = Date.now();
    console.log(
        'EVENT:', {
        event: 'pickup',
        time: timestamp,
        payload: payload
    })
}

events.on('in-transit', inTransit)

function inTransit(payload) {
    let timestamp = Date.now();
    console.log(
        'EVENT:', {
        event: 'in-transit',
        time: timestamp,
        payload: payload
    })
}

events.on('delivered', delivered)
// console.log('pickup', payload)


function delivered(payload) {
    let timestamp = Date.now();
    console.log(
        'EVENT:', {
        event: 'delivered',
        time: timestamp,
        payload: payload
    })
}