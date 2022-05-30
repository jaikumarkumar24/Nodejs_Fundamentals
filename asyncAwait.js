const doSomeAsync = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve("i did"),300);
    })
}

const doSomething = async()=>{
    console.log(await doSomeAsync())
}

console.log('Before')
doSomething()
console.log('After')


const aFunction = async () => {
    return 'test';
  };
  
  aFunction().then(alert);


  const getFirstUserData = async () => {
    const response = await fetch('/users.json'); // get users list
    const users = await response.json(); // parse JSON
    const user = users[0]; // pick first user
    const userResponse = await fetch(`/users/${user.name}`); // get user data
    const userData = await userResponse.json(); // parse JSON
    return userData;
  };
  
  getFirstUserData();


  //Multiple async functions in series

  const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
  }
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  })
  