// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create('session-test')
  .then((client) => start(client))
  .catch((error) => console.log(error));

async function start(client) {
    await client
    .sendText("5518997922762@c.us", "Hello from Venom BOT 🤖")
    .then((result) => {
        console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}