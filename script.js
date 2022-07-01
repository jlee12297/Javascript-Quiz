//establishing the variables I will use
var startBtn = document.querySelector('#startGame');
var question = document.querySelector('#question');
var firstChoice = document.querySelector('#choice1');
var secondChoice = document.querySelector('#choice2');
var thirdChoice = document.querySelector('#choice3');
var fourthChoice = document.querySelector('#choice4');
var scoreList = document.querySelector('#scoreList');
var timeLeftSpan = document.querySelector('#timeLeftSpan');
var timeLeft
//array to store past scores so we can render them onto the page upon reload
var storedScores = [];

// questions array

question1 = {question: "Between which HTML element do we insert our Javascript into the HTML?", ans:["<p>", "<link>", "<script>", "<javascript>"]}
question2 = {question:"Where can you insert Javascript into the HTML?", ans:["<head> section", "<body> section", "Don't need to insert it into HTML!", "both <head> and <body>"]}
question3 = {question:"Which method would you use to listen for a user clicking a button?", ans:[".addButtonListener", ".onClick", ".querySelector", ".addEventListener"]}
question4 = {question:"Which method will round your number w/ a decimal to the nearest integer?", ans:["Math.up", "Math.down", "Math.round", "round.down.up"]}
question5 = {question:"Which event occurs when the user clicks on an HTML element", ans:["keydown", "onclick", "keyup", "clickevent"]}
allquestions = [question1, question2, question3, question4, question5]
answersheet = [3,3,3,2,1]
questionIndex = 0

//function to render the stored scores onto the page as <li> elements in the designated score box
    function renderStoredScores() {
        scoreList.innerHTML= "";

          // Render a new li for each stored score
  for (var i = 0; i < storedScores.length; i++) {
    var savedScore = storedScores[i];

    var li = document.createElement("li");
    li.textContent = savedScore;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }

 }

// This function is being called below and will run when the page loads.
    function init() {
    // Get storedScores from localStorage
     var getStoredScores = JSON.parse(localStorage.getItem("storedScores"));
  
    // If scores were retrieved from localStorage, update the storedScores array to it
     if (getStoredScores !== null) {
      storedScores = getStoredScores;
    }
  
    // This is a helper function that will render storedScores to the DOM
     renderStoredScores();
  }
  
     function saveScore() {
    // Stringify and set key in localStorage to storedScores array
      localStorage.setItem("storedScores", JSON.stringify(storedScores));
  }
  
  document.getElementById("choice1").hidden = true;
  document.getElementById("choice2").hidden = true;
  document.getElementById("choice3").hidden = true;
  document.getElementById("choice4").hidden = true;

// startGame
    // triggered by event listener on start game button
    startBtn.addEventListener("click", function() {

        document.getElementById("choice1").hidden = false;
        document.getElementById("choice2").hidden = false;
        document.getElementById("choice3").hidden = false;
        document.getElementById("choice4").hidden = false;
    
    // start timer
    timeLeft = 60;
    timer = setInterval(function(){
        timeLeft--;
        timeLeftSpan.textContent=timeLeft
        if(timeLeft === 0){
            // if time runs out, lose
            timeLeftSpan.textContent="GAME OVER you have zero "
            clearInterval(timer);
            window.alert("Ran out of time! Feel free to try again.")
            document.location.reload(true);
        }
    },1000)
    loadQuestion(questionIndex);
 
})
    // loadQuestion()
    function loadQuestion(qIndex){
        question.textContent = allquestions[qIndex].question;
        firstChoice.textContent = allquestions[qIndex].ans[0] 
        secondChoice.textContent = allquestions[qIndex].ans[1]
        thirdChoice.textContent = allquestions[qIndex].ans[2]
        fourthChoice.textContent = allquestions[qIndex].ans[3]

    }

    function checkAnswer(qIndex,userChoice){
        answer = allquestions[qIndex].ans[answersheet[qIndex]];
        console.log(answer)
        if (answer === userChoice){
            console.log("CORRECT");
            questionIndex++
        } else {
            console.log("INCORRECT");
            questionIndex++;
            timeLeft -= 10;
        }
        if (questionIndex < 5){
        loadQuestion(questionIndex);
        } else {
            setScoreBoard();
            clearInterval(timer);
            timeLeftSpan.textContent = "Congrats, you answered all questions! Check your score.";
            document.getElementById("timeBox").hidden = true;
    }}


    function setScoreBoard(){
        //take remaining timeLeft as the score, make a popup window to take the players initials, then put it into a scoreboard, where it is locally stored
       
        var score = timeLeft;
        listItem = document.createElement('li');
        
        initials = prompt("Please type your gamertag so we can save your score!")
        listItem.textContent = initials + "  got " + score +  " points!"
        var scoreText = listItem.textContent
        storedScores.push(scoreText);
        
        saveScore();
        renderStoredScores();
        document.location.reload(true);
    }

    firstChoice.addEventListener("click", function() {
        // retrieve firstChoice text in a variable
        userChoice = firstChoice.textContent;
        checkAnswer(questionIndex, userChoice);
    })

    secondChoice.addEventListener("click", function() {
        userChoice = secondChoice.textContent;
        checkAnswer(questionIndex, userChoice);
    })

    thirdChoice.addEventListener("click", function() {
        userChoice = thirdChoice.textContent;
        checkAnswer(questionIndex, userChoice);
    })

    fourthChoice.addEventListener("click", function() {
        userChoice = fourthChoice.textContent;
        checkAnswer(questionIndex, userChoice);
    })

   init()