// ids used in html
// timer
// finitial
// secinitial


var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button')
var questionsContainerElement = document.getElementById('question-container'); 
var questionElement = document.getElementById('question'); 
var answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
// if start button is pressed start timer
nextButton.addEventListener('click', () => {
  currentQuestionIndex ++
  setNextQuestion()
});



  
  
function startGame() {
  console.log("game started") //logs if start button is clicked
  startButton.classList.add('hide') // hides start button once clicked and first question shows
  questionsContainerElement.classList.remove('hide') //removes hide from questions once start button is clicked
  shuffledQuestions = questions.sort(() => Math.random() - .5) //gives random array from questions
  currentQuestionIndex = 0
  setNextQuestion()
  
  
};

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]); 
};

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
     var button = document.createElement('button'); //defined button 
    button.innerText = answer.text
    button.classList.add('button');
    if (answer.correct) { 
      button.dataset.correct = answer.correct //.dataset add data attr to button
    } // done this way because answer is a string not a boolean
    button.addEventListener('click', selectAnswer); // event listener for answer
    answerButtonsElement.appendChild(button); 
  })
};

var timerElement = document.getElementById("timer");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    timerElement.textContent = `${secondsLeft}`;
    secondsLeft--;
    
    //need if statement for answer correct or wrong
    //need if statement for all questions answered stop game unhide form
    if(secondsLeft === 0) {
      timerElement.textContent = "Time Ran Out";
      clearInterval(timerInterval);
      clearInterval(timer);
      localStorage.setItem('score', secondsLeft);
      console.log('time ran out');
      // sendMessage();
    }
  }, 1000);
};

var timeEl = document.getElementsByClassName('initials')

// function sendMessage() {
//   timerElement.textContent = " ";
// };

setTime();


function resetState() {
  nextButton.classList.add('hide') // hides next button after new question appears
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

}; //resets everything back to default state every time we get a new question

function selectAnswer(element) {
  var selectedButton = element.target; //
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  });
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  
};

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
};




const questions = [
  {
    question: "How does PosiTrac work in a Plymouth?",
    answers: [
      { text: "Nobody knows.", correct: true },
      { text: "Osmosis.", correct: false },
      { text: "Rainbow Dust.", correct: false },
      { text: "Unicorn Farts.", correct: false }
    ]
  },
  {
    question: "Did you struggle with this challenge?",
    answers: [
      { text: "Yes but I learned a lot.", correct: true },
      { text: "A lot.", correct: true },
      { text: "Sure did.",  correct: true },
      { text: "You had better believe it.", correct: true },
    ]
  },
  {
    question: "When writing loops what should you double check for so you don't crash your browser?",
    answers: [
      { text: "Fruit.", correct: false },
      { text: "Gremlins.", correct: false },
      { text: "Check for eventual false.", correct: true },
      { text: "Monsters under the bed.", correct: true }
    ]
  },
  {
    question: "When writing a string what is the difference between single and double quotes?",
    answers:[
      { text: "Nothing.", correct: true },
      { text: "Internal document string vs User displayed string elements.", correct: true },
      { text: "User preference.", correct: true },
      { text: "Easier to read.", correct: true },
    ]
  },
  {
    question: "What will Josh change his Zoom name to today?",
    answers:[
      { text: "Papa Splice.", correct: true },
      { text: "Daddy Josh.", correct: true },
      { text: "Repo Master.", correct: true },
      { text: "Bob Ross.", correct: true },
    ]
  },
  {
    question: "Where do you link JavaScript in HTML",
    answers:[
      { text: "Yes.", correct: false },
      { text: "At the end of the document.", correct: true },
      { text: "In the head.", correct: false },
      { text: "What is JavaScript.", correct: false },
    ]
  },

];



// timer
  
  // if false subtract 15sec and move to next question
  
  // if timer reaches 0 stop game display score and do bellow

// once all questions have been answered and score is logged
  // display score
  // reveal initials form
      
  // display score to user in leader board
  // display initials next to score in leader board
  



  // completed
    // if start button is pressed display question 
    // if not display null // do not need this statement because loop does not start until button is clicked
    // click event when start button is pressed and first question is displayed
    // return hidden question
    // way to check if answer is true or false //done
    // if true reveal next question //using next button
    // question-container
    // next-button
    // answer-buttons
    // start-button
    // question
    // unhide start button
    // store score  and initial in local to be called by leader board
    // store answer 

