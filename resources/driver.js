'use strict';

const events = require('../lib/events.js')
//alert system when picks up item and becomes in-transit
//allerts system when an item is delivered

events.on('pickup', (payload) => {
    setTimeout(() => {
        console.log(`DRIVER: Picked up order ${payload.orderId}`)
        events.emit('in-transit', payload)
    }, 1000)

    setTimeout(() => {
        console.log(`DRIVER: Delivered order ${payload.orderId}`)
        events.emit('delivered', payload)
    }, 3000)
})

