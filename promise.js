const state = true;

const myPromise = new Promise ((resolve,reject)=>{
    if(state){
        const workDone = 'Here is the thing I built'
        return resolve(workDone);
    }else{
        const why = 'Still working on something else'
        return reject(why);
    }
})

const checkifitsdone = ()=>{
    myPromise
    .then( ok=>{ console.log(ok) })
    .catch( err => { console.error(err) });
}

checkifitsdone();