'use strict';

require('dotenv').config();
const faker = require('faker');
const events = require('../lib/events.js')

//alert system when there is an item for pick up

events.on('delivered', (payload) => {
    console.log(`VENDOR: Thank you for delivering item ${payload.orderId}`)
})

// function pickUp(payload) {
//     let timestamp = Date.now();
//     console.log(
//         'EVENT', {
//         event: 'pickup',
//         time: timestamp,
//         payload: payload
//     })
// }

setInterval(() => {
    let newOrder = {
        store: process.env.STORE_NAME,
        orderId: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    events.emit('pickup', newOrder)
}, 10000)

// module.exports = { pickUp }