import http from 'k6/http';
import accesso from './token.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}
function generateDivision(){
	

 

	

	var name = getRandomInt(1, 4)
	return name;

}
function generateName(){
	var name1 = ["Technical", "Sessional", "Laboratory", "Trainee", "Operators", "Officers", "Executive"];
    var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);

	return name;

}



export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '6s', // total duration
      preAllocatedVUs: 6, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    
        "title": generateName(),
        "description": "string",
        "training_course": generateDivision()
      

    
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post('https://trmisapi.inneedcloud.com/api/training-course/course-topic/', payload, { headers });

}