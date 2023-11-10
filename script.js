'use strict';
 //Questions & answers are placed in a variable as a array
let quizData= [
    {
    question:"Which country drinks the most amount of coffee per person? ",
    Options: {
        A:"Finland",
        B:"Colombia",
        C:"Italy",
    },
    correctAnswer:"A"
},
{
    question:"What is the largest social media network in the world?",
    Options: {
        A:"Twitter",
        B:"Instagram",
        C:"Facebook",
    },
    correctAnswer:"C"
},
{
    question:"Which of the following can’t an astronaut do in space?",
    Options: {
        A:"Sleep",
        B:"Cry",
        C:"Read",
       
    },
    correctAnswer:"B"
},
{
    question:"“The only way to do great work is to love what you do.”",
    Options: {
        A:"Steve Jobs",
        B:"Bill Gate",
        C:"Mark Zukerberg",
    },
    correctAnswer:"A"
},
{
    question:"Do you ever know,Where were French fries invented?",
    Options: {
        A:"Belgium",
        B:"France",
        C:"The US"
    },

    correctAnswer:"A",
}];

//set the variable to corresponding HTML element

let questionsEl=document.querySelector("#questions");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let resultEl=document.querySelector("#result");

//Intialize currentquestion and score to 0
let currentQuestion=0;
let score = 0;

//create a function to display questions and options

function displayQuestion(){
    let data= quizData[currentQuestion];
    questionsEl.textContent = data.question;
    answerA.textContent = `A. ${data.Options.A}`;
    answerB.textContent = `B. ${data.Options.B}`;
    answerC.textContent = `C. ${data.Options.C}`;
}

//check answer in array and the user input is same

function checkAnswer(selectedAnswer) {
    let data= quizData[currentQuestion];
    if (selectedAnswer === data.correctAnswer) {
        score += 1;
    }

    currentQuestion += 1;

    if(currentQuestion < quizData.length ){
        //call the function if still the questions are available
        displayQuestion();
    }
    else{
        //call the function if the user reaches the last question
        displayResult();
    }
}

//create a function to display the result
function displayResult(){
    questionsEl.textContent = "Quiz completed!";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
   
}



displayQuestion();

//events 
answerA.addEventListener("click", () => checkAnswer("A"));
answerB.addEventListener("click", () => checkAnswer("B"));
answerC.addEventListener("click", () => checkAnswer("C"));



