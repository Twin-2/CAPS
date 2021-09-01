'use strict';

// require('dotenv').config();
// // const faker = require('faker');
// console.log(process.env.PORT)
const io = require('socket.io-client');
let baseURL = 'http://localhost:3232'

const hub = io.connect(baseURL)
const store = io.connect(`${baseURL}/Chiron`)

hub.on(`order ready for Chiron`, payload => {
    console.log(`Thank you, ${payload.customer}, for your business`)
    store.emit('pickup ready', payload)
})


hub.on('delivered for Chiron', (payload) => {
    console.log(`VENDOR: Thank you for delivering item ${payload.orderId}`)
})
