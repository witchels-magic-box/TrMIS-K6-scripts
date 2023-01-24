import http from 'k6/http';
import accesso from './token.js';

var nm;
const name1 = ["A", "B", "C","D","E","F","G"];
let p=name1.length;
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateDivision(){
	

 

	

	var name = getRandomInt(1, 9)
	return name;

}








function generateName(){

  p--;

  

  nm=name1[p-1];
  
   
  return nm;

  
  





}




export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '3s', // total duration
      preAllocatedVUs: 3, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    "prerequisite_course_id": [
        generateDivision(),generateDivision()
    ],
    "course_id": generateDivision()
  });
  
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post('http://127.0.0.1:8000/api/training-course/course-prerequisite/', payload, { headers });
  

}
