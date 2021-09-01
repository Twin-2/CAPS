# CAPS - Code Academy Postage System
Creator David Whitmore

## Version Log: 1.0.0
8/30/2021 -- 1.0 scafolding set up to generate items, then console log the steps of that item being picked up and delivered.

8/31/2021 -- 2.0 Big Change! restructured the same idea but using socket.io to manage the events rathern than node.js event emmitter. There is an expternal 'action' file that initiates the process.

## About

to run this app you will need to install node modules for all the sperate files. Then start up each of the main files for hub (capsHub.js), driver (driver.js), and vendors (individual vendors in each of the vendor files). Once all the servers are connected then you can start the actions.js file to see the magic happen!

For the visualization and prep for this project I created a Whiteboard to map the basic structure and intent. 

version 1

![CAPS day 1](https://user-images.githubusercontent.com/81482156/131420097-316ccdae-e7ce-456f-8053-9e38be516c7f.png)

version 2



## Tools

Node.js's native Event Emitter was used for the first phaase of initial build to get used to custom events.

npm package dotenv was used to store project specific variables

npm package faker was used to generate random items to be 'delivered'

socket.ion and socket.io-client were used to create a server hub for cross server communication. 
