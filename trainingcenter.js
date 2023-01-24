
import http from 'k6/http';
import accesso from './token.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["Uttora","JDhanmondi","Pubali","Rupali"];

 

	var name2 = ["Boxoffice","Training center","House","Agency","Company"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;

}

function generateDivision(){
	

 

	

	var name = getRandomInt(1, 4)
	return name;

}



export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '8s', // total duration
      preAllocatedVUs: 8, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({

    
        "name": generateName(),
        "division": generateDivision(),
        "district": generateDivision(),
        "sub_district": generateDivision(),
        "address": "string",
        "serial_no": Math.floor(Math.random() * 1000000000)
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post('https://trmisapi.inneedcloud.com/api/training-center/', payload, { headers });
}
