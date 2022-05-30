const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


//on is used to add a callback function that's going to be executed when the event is triggered
eventEmitter.on('start', () => {
    console.log('started');
  });

  eventEmitter.emit('start');       //emit is used to trigger an event


  eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  eventEmitter.emit('start', 1, 100);
  