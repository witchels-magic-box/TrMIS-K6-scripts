import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



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
	var name1 = [ "Technical", "Sessional", "Laboratory", "Trainee", "Pharmacy", "Medicine", "Surgeon", "Biomedical", "Biotechnology", "Microbiology", "Forensic", "Pathology"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}









export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '10s', // total duration
      preAllocatedVUs: 10, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    
        "title": generateName(),
        "description": "string",
        "code": Math.floor(Math.random() * 10000000),
        "pass_mark": 50,
        "objective": "string",
        "course_category": generateDivision()
      

    
    
  });
  
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'training-course/', payload, { headers });
  

}
