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


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
//myEmitter.emit('event');
  

myEmitter.on('event', (a, b) => {
    setImmediate(() => {
      console.log('this happens asynchronously');
    });
  });
  myEmitter.emit('event', 'a', 'b');

  //eventEmitter.once()
  let m=1;
  myEmitter.once('eventOnce',()=>{
      console.log(++m);
  })

  myEmitter.emit('eventOnce');  // Prints: 1
myEmitter.emit('eventOnce');    // Ignored


myEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
  });
  myEmitter.emit('error', new Error('whoops!'));



const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', console.log);

const ee2 = new EventEmitter({ captureRejections: true });
ee2.on('something', async (value) => {
  throw new Error('kaboom');
});

ee2[Symbol.for('nodejs.rejection')] = console.log;