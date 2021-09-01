'use strict';

require('dotenv').config();
const faker = require('faker');
const io = require('socket.io-client');
let baseURL = 'http://localhost:3232';
const hub = io.connect(baseURL)


function setStore() {
    let storeName;
    let num = Math.round(Math.random())
    if (num === 1) {
        storeName = process.env.DAVID_STORE
    } else {
        storeName = process.env.LAURA_STORE
    }
    console.log(storeName)
    return storeName
}


setInterval(() => {
    let newOrder = {
        store: setStore(),
        orderId: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    hub.emit('new order', newOrder)
}, 6000)