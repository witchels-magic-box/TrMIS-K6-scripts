
import http from 'k6/http';
import accesso from './token.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = [ "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"];

 

	

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)])
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
        "serial_no": Math.floor(Math.random() * 1000000000),
        "remarks": "string"
      
      
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post('https://trmisapi.inneedcloud.com/api/settings/grades/', payload, { headers });
}
