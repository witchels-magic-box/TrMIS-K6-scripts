
import http from 'k6/http';
import accesso from './token.js';

function getRandomEmail(domain,length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["professorX", "beast", "colossus", "cyclops", "iceman", "wolverine"];

 

	var name2 = ["SalesMAn", "Admin" , "IT Executive", "Marketing Executive", "Developer", "Nurse", "Doctor","abrasive", "brash", "callous", "daft", "eccentric"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}



export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '5s', // total duration
      preAllocatedVUs: 5, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    
    
        "name": generateName(),
        "code": getRandomEmail("Test",5),
        "phone": Math.floor(Math.random() * 10000000),
        "alt_phone": Math.floor(Math.random() * 10000000),
        "email": getRandomEmail("Test",5)
      
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post('https://trmisapi.inneedcloud.com/api/settings/coordinators/', payload, { headers });
}
