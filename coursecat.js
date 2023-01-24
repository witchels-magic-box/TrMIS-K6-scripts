import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["Technical ", "Sessional ", "Laboratory ", "For Trainers", "Operation", "Office Management", "Medical"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
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
    "title": generateName(),
    "description": "Demo data"

    
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'training-course/course-category/', payload, { headers });

}