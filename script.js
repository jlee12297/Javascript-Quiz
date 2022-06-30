//establishing the variables I will use
var startBtn = document.querySelector('#startGame');
var question = document.querySelector('#question');
var firstChoice = document.querySelector('#choice1');
var secondChoice = document.querySelector('#choice2');
var thirdChoice = document.querySelector('#choice3');
var fourthChoice = document.querySelector('#choice4');
var scoreSpan = document.querySelector('#scoreSpan');
var timeLeftSpan = document.querySelector('#timeLeftSpan');
var timeLeft

// questions array

question1 = {question: "Between which HTML element do we insert our Javascript into the HTML?", ans:["<p>", "<link>", "<script>", "<javascript>"]}
question2 = {question:"Where can you insert Javascript into the HTML?", ans:["<head> section", "<body> section", "Don't need to insert it into HTML!", "both <head> and <body>"]}
question3 = {question:"Which method would you use to listen for a user clicking a button?", ans:[".addButtonListener", ".onClick", ".querySelector", ".addEventListener"]}
question4 = {question:"Which method will round your number w/ a decimal to the nearest integer?", ans:["Math.up", "Math.down", "Math.round", "round.down.up"]}
question5 = {question:"Which event occurs when the user clicks on an HTML element", ans:["keydown", "onclick", "keyup", "clickevent"]}
allquestions = [question1, question2, question3, question4, question5]
answersheet = [3,3,3,2,1]
questionIndex = 0
// currentQuestion = 0
// timeLeft
// score
// highscores

// startGame
    // triggered by event listener on start game button
    startBtn.addEventListener("click", function() {
    
    // start timer
    timeLeft = 60;
    timer = setInterval(function(){
        timeLeft--;
        timeLeftSpan.textContent=timeLeft
        if(timeLeft === 0){
            // if time runs out, lose
            console.log("GAME OVER")
            clearInterval(timer);
        }
    },1000)
    loadQuestion(questionIndex);
 
})
    // loadQuestion()
    function loadQuestion(qIndex){
        question.textContent = allquestions[qIndex].question;
        firstChoice.textContent = allquestions[qIndex].ans[0] //allquestions[qIndex].ans1;
        secondChoice.textContent = allquestions[qIndex].ans[1] //allquestions[qIndex].ans2;
        thirdChoice.textContent = allquestions[qIndex].ans[2] //allquestions[qIndex].ans3;
        fourthChoice.textContent = allquestions[qIndex].ans[3] //allquestions[qIndex].ans4;

    }
    /*
     * Function: Compares the correct answer with the user selected answer
     * Param 1 qIndex: Correct Answer
     * PAram 2 userChoice: Choice of user 
     * returns: true or false 
    */
    function checkAnswer(qIndex,userChoice){
        //answer = allquestions[qIndex].[answersheet[qIndex]]
        answer = allquestions[qIndex].ans[answersheet[qIndex]];
        console.log(answer)
        // if statement compare userChoice and answer
        // 
    }

    firstChoice.addEventListener("click", function() {
        // retrieve firstChoice text in a variable
        checkAnswer(questionIndex, "");
    })

    secondChoice.addEventListener("click", function() {

    })

    thirdChoice.addEventListener("click", function() {

    })

    fourthChoice.addEventListener("click", function() {

    })
   