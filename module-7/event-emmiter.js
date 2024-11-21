const EventEmiter = require("events");

const myEmitter = new EventEmiter();

myEmitter.on("birthday",
  (gift) => {
    console.log("Happy birthday to you");
  });
myEmitter.on('birthday', (gift) => {

    console.log(`I will send a ${gift}`)
})
myEmitter.emit("birthday",'watch and buds');
