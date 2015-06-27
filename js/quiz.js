//quiz with functional array- add crowns & more questisons


function print(message) {
  var output = document.getElementById('output')
  output.innerHTML = message;
}

// two dimenisoinal array that holds questions and answers (5 questions total). Use prompt method to ask question
 var quiz = [ 
 ['What year did World War 1 begin?', '1914'],
 ['What was the name of the first artifical satellite launched in space?', 'Sputnik'],
  ["Who coined the term 'debugging' in programming", 'Grace Hopper'],
 ["What was Elenaor Roosevelt's maiden name?", "Roosevelt"],
 ["What was the family name of the first shogun of the Kamakura bakufu in feudal Japan?", "Minamoto"],
];



//loop to cycle through questions
var answer; 
var correctAnswer = [];
var wrongAnswer = [];
var wrongAnswers = [];
for (i=0; i<quiz.length; i++) {
	answer = prompt(quiz[i][0])
	console.log(answer);
	if(answer.toLowerCase()===quiz[i][1].toLowerCase()) {
		correctAnswer.push(quiz[i]);
		console.log(correctAnswer)
	} else {
		wrongAnswer.push(quiz[i]);
		wrongAnswers.push(answer);
	}
}

var message = "<h3> Results </h3>"
if (correctAnswer.length > 0) {
	 message += "<h4>You got " + correctAnswer.length + " questions right:</h4>";
	for(var i=0; i<correctAnswer.length;i++) {
		message +='<p>'+correctAnswer[i][0]+'<br>';
		message +=correctAnswer[i][1]+'</p>';
	} 
}
if (wrongAnswer.length > 0) {
	message += "<h4>You got the following questions wrong:</h4>";
	for (var i=0; i<wrongAnswer.length; i++) {
		message +='<p>'+wrongAnswer[i][0]+'<br>';
		message +=wrongAnswers[i]+'</p>'
	}
}

//print answers answered correctly and questions answered incorrectly to the webpage

//adding in score and crowns 

if (correctAnswer.length === 5) {
	message += "<p>Congratulations! You've earned a gold crown!</p> <img src=img/gold.jpg>";
} else if (correctAnswer.length === 3 || correctAnswer.length === 4) {
		message += "<p> <b> Good job! You've earned a sliver crown! </b></p> <img src=img/sliver.jpg>";
	} else if (correctAnswer.length === 1 || correctAnswer.length === 2){
			message += "<p> <b> Nice Work! You've earned a bronze crown! </b> </p> <img src=img/bronze.jpg>";
	} else if (correctAnswer.length === 0) {
		message += "<p><b>Thanks for playing! You've earned a particpation ribbon </b></p> <img src=img/part.jpg>";
	}

print(message);

