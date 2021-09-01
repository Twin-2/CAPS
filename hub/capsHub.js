'use strict';

require('dotenv').config();

const PORT = process.env.PORT
console.log(PORT)
const io = require('socket.io')(PORT);
const Paintings_by_Laura = io.of("/Paintings-by-Laura")
const Chiron = io.of("/Chiron")
const driver = io.of('/driver')

// this is the global hub connection
io.on('connection', socket => {
    console.log('Global', socket.id)
    socket.on('new order', payload => {
        // console.log(payload)
        io.emit(`order ready for ${payload.store}`, payload)
    })
    socket.on('in-transit', inTransit)
    // io.on('pickup', (payload) => {
    //     driver.emit('pickup', payload)
    // })
    // io.on(`delivered`, payload => {
    //     console.log('made it here')
    //     socket.emit(`delivered for ${payload.store}`, payload)
    // })
    // io.on('delivered for Chiron', (payload) => {
    //     socket.emit('delivered', payload)
    // })
    // io.on('delivered for Paingins_by_Laura', (payload) => {
    //     socket.emit('delivered', payload)
    // })
});


Paintings_by_Laura.on('connection', socket => {
    console.log('Lauras store', socket.id)
    socket.on('pickup ready', payload => {
        pickUp(payload);
        io.emit('pickup', payload)
    })
})


Chiron.on('connection', socket => {
    console.log("David's store", socket.id)
    socket.on('pickup ready', payload => {
        console.log('line 39')
        pickUp(payload);
        io.emit('pickup', payload)
    })

})

driver.on('connection', socket => {
    console.log('driver', socket.id)
    socket.on('delivered', payload => {
        delivered(payload);
        io.emit(`delivered for ${payload.store}`, payload)
    })
})



function pickUp(payload) {
    let timestamp = new Date();
    console.log(
        'EVENT:', {
        event: 'pickup',
        time: timestamp,
        payload: payload
    })
}

// events.on('in-transit', inTransit)

function inTransit(payload) {
    let timestamp = new Date();
    console.log(
        'EVENT:', {
        event: 'in-transit',
        time: timestamp,
        payload: payload
    })
}

// events.on('delivered', delivered)
// // console.log('pickup', payload)


function delivered(payload) {
    let timestamp = new Date();
    console.log(
        'EVENT:', {
        event: 'delivered',
        time: timestamp,
        payload: payload
    })
}