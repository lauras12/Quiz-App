'use strict'

// Questions, Choices, and Answers
const myQuestions = [
	{
    number: 1,
      
    theQuestion: `When was Puerto Rico discovered?`,
      
    choice1:`South of Africa`,
    choice2:`Carribbean Sea & Atlantic Ocean`,
    choice3:`East of Canada`,
    choice4:`Pacific Ocean`,
      
    answers: `Carribbean Sea & Atlantic Ocean`
    },
    
    {
    number: 2,
    
    theQuestion:`When was Puerto Rico discovered?`,
    
    choice1:`1593`,
    choice2:`1493`, 
    choice3:`1943`, 
    choice4:`1543`,
    
    answers: `1493`
    },
    
	{
    number: 3,
    
    theQuestion:`What is the main language?`,
    
    choice1:`French`,
    choice2:`Spanish`,
    choice3:`Portuguese`,
    choice4:`English`,
     
    answers: `Spanish`
	},
  
    {
    number: 4,
    
    theQuestion:`What famous artist is NOT from Puerto Rico?`,
	
    choice1:`Daddy Yankee`,
    choice2:`Shakira`,
    choice3:`Ricky Martin`,
    choice4:`Bad Bunny`,
    
    answers: `Shakira`
	},

	{
    number: 5,

    theQuestion:`What is the main currency of Puerto Rico?`,
    
    choice1:`Spanish Dollars`, 
    choice2:`US Dollars`, 
    choice3:`Puerto Rican Dollars`, 
    choice4:`Mexican Pesos`,
    
    answers: `US Dollars`
  },
  
  {
    number: 6,
    
    theQuestion:`What does 'Puerto Rico' mean?`,
    
    choice1:`Rich Man`,
    choice2:`Rich Port`, 
    choice3:`Rich Land`, 
    choice4:`Rich Person`,
    
    answers: `Rich Port`
  },
  
  {
    number: 7,
    
    theQuestion:`When did Puerto Rico become a commonwealth associated with USA?`,
    
    choice1:`February 29 1948`,
    choice2:`July 25 1952`, 
    choice3:`April 15 1956`, 
    choice4:`December 22 1960`,
    
    answers: `July 25 1952`
  },
  
  {
    number: 8,
    
    theQuestion:`Which is the capital of Puerto Rico?`,
    
    choice1:`Vieques`,
    choice2:`San Juan`, 
    choice3:`Arecibo`, 
    choice4:`Culebra`,
      
    answers: `San Juan`
	},
  {
    number: 9,
   
    theQuestion:`One of the 7 natural wonders in the world is located in Puerto Rico, What is it?`,
    
    choice1:`El Bosque Seco`,
    choice2:`El Yunque Tropical Rainforest`, 
    choice3:`Flamenco Beach`, 
    choice4:`Serralles Castle`,
    
    answers: `El Yunque Tropical Rainforest`
	},
  {
    number: 10,
    
    theQuestion: `What is the most popular sport in Puerto Rico?`,
    
    choice1:`Soccer`,
    choice2:`Baseball`, 
    choice3:`Basketball`, 
    choice4:`Tennis`,
    
    answers: `Baseball`
	},
];


let questionNumber = 1;
let correctAnswers = 0;

// Form 
function questionForm(correctAnswers, question, questionsAnswered) {
  return `
    <section id="question-page" role="main" class="col-6">
    <h2 id="question">${question.theQuestion}</h2>
    
    <form>
      <fieldset>
      <legend id='choice-box'>Choices</legend>
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" checked value="${question.choice1}" >  A. </input>
          ${question.choice1}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice2}" >  B. </input>
          ${question.choice2}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice3}">  C. </input>
          ${question.choice3}
        </label>
  
        <label class="box-choice">
          <input class="answer" type="radio" name="choice" value="${question.choice4}">  D. </input>
          ${question.choice4}
        </label>
      </fieldset>  
      <br>
      <button id="submit-button"><b>Submit</b></button>
    </form>

    <div id="status-bar">
    <br>
      <span id="question-count">Question: ${question.number}/10</span>
      <span id="score-count">Score: ${correctAnswers} </span>
    </div>
  </section>
  `;
}
// Start button function
function clickStartButton() {
  $('#start-button').click(function(event) {
    nextQuestion();
  });
}


// Submit button function
function clickSubmitButton() {
  $('#quiz').on('click', '#submit-button', function(event) {
    event.preventDefault();
        const answer= $('input:checked').val();
            if (checkAnswer(answer)) {
              showPositiveFeedback();
            }
            else {
              showNegativeFeedback();
            }
  });
}

// Function that changes the "next" button once you go thru all 10 questions and shows res page
function clickNextButton() {
  $('#quiz').on('click', '#next-button', function(event){
      if(questionNumber === 10) {
        theResultsAreIn(correctAnswers);
      }
      else {
        showTheAnswer();
        nextQuestion();
      }
  })
}

// Function that allows you to go the next question 
function nextQuestion() {
  const question = myQuestions [questionNumber-1];
  const questionsAnswered = 
  questionNumber - 1;
   $('#quiz').html(questionForm(correctAnswers, question, questionsAnswered));
}

// Function that checks if answer is correct
function checkAnswer(answer) {
  if(answer === myQuestions[questionNumber-1].answers) {
    console.log('Correct!');
    return true;
  } 
  else {
    console.log('That answer is wrong, the correct answer is ' + myQuestions[questionNumber-1].answers);
    return false;
  }
  
}

// Feedback
function showPositiveFeedback () {
  $('#quiz').html(correctPage);
    runIfCorrect();

}

// Page that appears to show feedback
const correctPage = 
    `<section class="feedback" role="main">
       <h2>Correct!</h2>
       <button id="next-button"><b>Next</b></button>
    </section>`
;
const incorrectPage =
     `<section class="feedback" role="main">
       <h2>That is wrong, the correct answer is <em>b</em> </h2>
       <button id="next-button"><b>Next</b></button>
    </section>`;

function showNegativeFeedback() {
  $('#quiz').html(incorrectPage);
 
}

function showTheAnswer() {
  questionNumber++;
}
function runIfCorrect() {
  correctAnswers++;
}

// Final Quiz res
function clickRestartButton() {
  $('#quiz').on('click', '#restart-button', function(event) {
    questionNumber = 1;
    correctAnswers = 0;
    nextQuestion();
  });
}

function theResultsAreIn(correctAnswers) {
  $('#quiz').html(`
    <section id="final-page">
      <h2>Final Score: ${correctAnswers} out of 10</h2>
      <h1>Retake the quiz if you scored less than 8/10</h1>
      <button id="restart-button"><b>Retake Quiz</b></button>
    </section>
  `); 
}

// Calls the functions
function callButtons() {
  clickStartButton();
  clickSubmitButton();
  clickNextButton();
  clickRestartButton();
}

callButtons();




