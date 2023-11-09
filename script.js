'use strict';
 
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

let questionsEl=document.querySelector("#questions");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
let resultEl=document.querySelector("#result");
let currentQuestion=0;
let score = 0;

function displayQuestion(){
    let data= quizData[currentQuestion];
    questionsEl.textContent = data.question;
    answerA.textContent = `A. ${data.Options.A}`;
    answerB.textContent = `B. ${data.Options.B}`;
    answerC.textContent = `C. ${data.Options.C}`;
}

function checkAnswer(selectedAnswer) {
    let data= quizData[currentQuestion];
    if (selectedAnswer === data.correctAnswer) {
        score += 1;
    }

    currentQuestion += 1;

    if(currentQuestion < quizData.length ){
        displayQuestion();
    }
    else{
        displayResult();
    }
}


function displayResult(){
    questionsEl.textContent = "Quiz completed!";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    resultEl.textContent = `Your score: ${score} out of ${quizData.length}`;
   
}



displayQuestion();

answerA.addEventListener("click", () => checkAnswer("A"));
answerB.addEventListener("click", () => checkAnswer("B"));
answerC.addEventListener("click", () => checkAnswer("C"));



