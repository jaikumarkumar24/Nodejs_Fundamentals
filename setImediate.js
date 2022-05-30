const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);            //3. A setTimeout, setImmediate callback is added to macrotask queue
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {        //2. A Promise.then() callback is added to promises microtask queue
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);        //1. A process.nextTick callback is added to process.nextTick queue
};
start();

//Event loop executes tasks in process.nextTick queue first, 
//and then executes promises microtask queue, and then executes macrotask queue

//output
// start
// foo
// bar
// zoo
// baz

//setTimeout()

setTimeout(() => {
  }, 2000);                 // runs after 2 seconds
  
  setTimeout(() => {
  }, 50);                   // runs after 50 milliseconds
  
  clearTimeout(id);


//setInterval()

  setInterval(() => {
  }, 2000);                 // runs every 2 seconds

  clearInterval(id);