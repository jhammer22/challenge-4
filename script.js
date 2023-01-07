// ids used
// question-container
// question
// answer-buttons
// start-button
// next-button
// finitial
// secinitial
// const=constant refrence to a value

const startButton = document.getElementById('start-button');
const shuffledQuestions, currentQuestionIndex;

// click event when start button is pressed do below
startButton.addEventListener('click', startGame);

// if start button is pressed display question 
  // if not display null
  // if start button is pressed start timer
  // return hidden question
function startGame() {
  console.log('game started')
  startButton.classList.add('hide')
  questionsContainerElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
};

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]) 
};

function showQuestion(question) {

}

function selectAnswer() {

};

// questions
  // event listener for answer
  // way to check if answer is true or false //done
  // store answer
  // if true reveal next question
  // if false subtract 15sec and move to next question
  // if timer reaches 0 stop game display score and do bellow
const questions = [
  {
    question: 'How does positrac work in a Plymouth?',
    answers: [
      { text: 'Nobody knows', correct: true },
      { text: 'Osmosis', correct: false},
      { text: 'Rainbow Dust', correct: false},
      { text: 'Unicorn Farts'}
    ]
  }
]
  





// once all questions have been answered and score is logged
  // display score
  // reveal initials form
  // store score  and initial in local to be called by      leader board     
  // display score to user in leader board
  // display initials next to score in leader board
  

