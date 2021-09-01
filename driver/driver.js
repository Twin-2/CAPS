'use strict';

require('dotenv').config();
const io = require('socket.io-client');
let baseURL = 'http://localhost:3232'

const hub = io.connect(baseURL)
const driver = io.connect(`${baseURL}/driver`)







//alert system when picks up item and becomes in-transit
//allerts system when an item is delivered

hub.on('pickup', (payload) => {
    setTimeout(() => {
        console.log(`DRIVER: Picked up order ${payload.orderId}`)
        hub.emit('in-transit', payload)
    }, 1000)

    setTimeout(() => {
        console.log(`DRIVER: Delivered order ${payload.orderId}`)
        driver.emit('delivered', payload)
    }, 3000)
})

