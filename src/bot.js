// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
// const {number, message} = require('./index')

venom
  .create('session-test')
  .then((client) => start(client))
  .catch((error) => console.log(error));

async function start(client) {
    await client
    .sendText("5518997922762@c.us", "Hello from Venom BOT 🤖")
    .then((result) => {
        console.log('Result: ', result); //return object success
        // return res.status(200).json({status: "status", message: "Mensagem enviada"})
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
}