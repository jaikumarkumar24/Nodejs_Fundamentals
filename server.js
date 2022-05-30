const axios = require('axios');
const url = 'https://www.letsrevolutionizetesting.com/challenge.json';

async function makeGetRequest(url) {
    try {
        const {data} = await axios.get(url); 
        if(data.message === "This is not the end"){
            const newUrl = data.follow.replace('challenge', 'challenge.json');
            console.log(data.message);
            return await makeGetRequest(newUrl);
        }else{
            return "congrats";
        }
     } catch(err) {
        throw new Error(err.message);
     } 
  }
  
makeGetRequest(url)
        .then((finalData)=>{ console.log(finalData); })
        .catch((error)=>{ console.log(error); });