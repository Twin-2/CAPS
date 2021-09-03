'use strict';

require('dotenv').config();
const io = require('socket.io-client');
let baseURL = 'http://localhost:3232'

const hub = io.connect(baseURL)
const driver = io.connect(`${baseURL}/driver`)

hub.on('pickup', (payload) => {
    setTimeout(() => {
        console.log(`DRIVER: Picked up order ${payload.orderId}`)
        hub.emit('in-transit', payload)
    }, 1000)

    setTimeout(() => {
        console.log(`DRIVER: Delivered order ${payload.orderId}`)
        hub.emit('delivered', payload)
    }, 3000)
})

