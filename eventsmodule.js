import EventEmitter from 'events';

const door = new EventEmitter();

door.addListener('open', () => {        //Alias for emitter.on().
    console.log('Door was opened');
  });
  
door.emit('open');

door.getMaxListeners('open');

door.eventNames();

const count = door.listenerCount('open');
console.log(count);

console.log(door.listeners('open'));


//emitter.off()     Alias for emitter.removeListener()

const ee = new EventEmitter();
ee.once('my-event', () => {
    console.log('Once emit the func');
});
ee.emit('my-event');

door.setMaxListeners(50);