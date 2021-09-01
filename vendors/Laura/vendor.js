'use strict';

// require('dotenv').config();
// // const faker = require('faker');
// console.log(process.env.PORT)
const io = require('socket.io-client');
let baseURL = 'http://localhost:3232'

const hub = io.connect(baseURL)
const store = io.connect(`${baseURL}/Paintings-by-Laura`)
// hub.on()

hub.on(`order ready for Paintings_by_Laura`, payload => {
    console.log(`Thank you, ${payload.customer}, for your business`)
    store.emit('pickup ready', payload)
})

//alert system when there is an item for pick up

hub.on('delivered for Paintings_by_Laura', (payload) => {
    console.log(`VENDOR: Thank you for delivering item ${payload.orderId}`)
})

