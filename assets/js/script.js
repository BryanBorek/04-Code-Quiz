//My long list of global variables
var rootEl = $('#root');
var feedbackEl = $('#feedback');
var displayFeedback = $('<h4>');
var highscoreListEl = $('<ul>');
var timeLeftEl = $('#timer');
var highScores = $(JSON.parse(localStorage.getItem('savedHighscores')));
var correct = null;
var q = 0;
var questions = 
['Coding Quiz Challenge',
'What symbol should we use for strict comparisons?', 
'What does the equasion (8 == "8") evaluate to?', 
'If we declare a variable, var questionThree = 3, then later state, questionThree = 7, what will be the value of questionThree?',
'Choose the best answer: With jQuery you can modify...'];
var choices = ['START'];
var chs1 = ['!=','===','==','='];
var chs2 = ['true','undefined','false','NaN'];
var chs3 = ['10','undefined','3','7'];
var chs4 = ['javascript','HTML','CSS','all of the above'];
var totalScore = 0;
var timeLeft = 20;

//Show the 'View Highscores' button, 'START' button, and the timer
displayWelcome();
timeLeftEl.text("Time Left: 20");
$("#viewHighscores").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    displayHighscores();
});
//create and hide the 'Correct!' and 'Wrong!' feedback
feedbackEl.hide;
feedbackEl.append(displayFeedback);

//Adds to score if correct, subtracts from time if incorrect
function correctOrWrong() {
    q++;
    if(correct === true) {
        totalScore++;
        displayFeedback.text('Correct!');
        displayFeedback.addClass('text-black-50 font-italic m-2');
        feedbackEl.append(displayFeedback);
        feedbackEl.show().delay(400).fadeOut();
    } else if(correct === false){
        timeLeft = timeLeft - 5;
        displayFeedback.text('Wrong!')
        displayFeedback.addClass('text-black-50 font-italic m-2');
        feedbackEl.append(displayFeedback);
        feedbackEl.show().delay(400).fadeOut();
    } else {
        return;
    }
}
//Replace placeholder 'Time Left: 20' string and begins counting down from 20
function setTimer() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeLeftEl.text("Time Left: ");
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            quizOver();
        }
        timeLeftEl.append(timeLeft);
    }, 1000);
}
//The starting position with title and rules
function displayWelcome() {
    var questionEl = $('<h1>');
    questionEl.text(questions[q]);
    rootEl.append(questionEl);
    rootEl.append('<h2>' + 'Take this quick JavaScript quiz to see how well you know the basics. Be careful though, you only have 20 seconds, and any wrong answer will reduce the time by 5 seconds!' + '</h2>');

    for (var i = 0; i < choices.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(choices[i]);
        choiceEl.addClass('col-12 w-50 btn btn-primary m-1 rounded');
        choiceEl.addClass('btn' + i.toString())
        rootEl.append(choiceEl);
      }
      $(".btn0").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correctOrWrong();
        setTimer();
        question1();
    });
}

function question1() {
    rootEl.children().remove();

    choices = chs1.toString().split(',');
    var questionEl = $('<h2>');
    questionEl.text(questions[q]);
    rootEl.append(questionEl);

    for (var i = 0; i < choices.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(choices[i]);
        choiceEl.addClass('col-12 w-50 btn btn-primary m-1 rounded');
        choiceEl.addClass('btn' + i.toString())
        rootEl.append(choiceEl);
      }

    $(".btn0").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question2();
    });
    $(".btn1").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = true;
        correctOrWrong();
        question2();
    });
    $(".btn2").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question2();
    });
    $(".btn3").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question2();
    });
}

function question2() {
    rootEl.children().remove();

    choices = chs2.toString().split(',');
    var questionEl = $('<h2>');
    questionEl.text(questions[q]);
    rootEl.append(questionEl);

    for (var i = 0; i < choices.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(choices[i]);
        choiceEl.addClass('col-12 w-50 btn btn-primary m-1 rounded');
        choiceEl.addClass('btn' + i.toString())
        rootEl.append(choiceEl);
      }

    $(".btn0").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = true;
        correctOrWrong();
        question3();
    });
    $(".btn1").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question3();
    });
    $(".btn2").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question3();
    });
    $(".btn3").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question3();
    });
}

function question3() {
    rootEl.children().remove();

    choices = chs3.toString().split(',');
    var questionEl = $('<h2>');
    questionEl.text(questions[q]);
    rootEl.append(questionEl);

    for (var i = 0; i < choices.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(choices[i]);
        choiceEl.addClass('col-12 w-50 btn btn-primary m-1 rounded');
        choiceEl.addClass('btn' + i.toString())
        rootEl.append(choiceEl);
      }

    $(".btn0").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question4();
    });
    $(".btn1").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question4();
    });
    $(".btn2").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        question4();
    });
    $(".btn3").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = true;
        correctOrWrong();
        question4();
    });
}

function question4() {
    rootEl.children().remove();

    choices = chs4.toString().split(',');
    var questionEl = $('<h2>');
    questionEl.text(questions[q]);
    rootEl.append(questionEl);

    for (var i = 0; i < choices.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(choices[i]);
        choiceEl.addClass('col-12 w-50 btn btn-primary m-1 rounded');
        choiceEl.addClass('btn' + i.toString())
        rootEl.append(choiceEl);
      }

    $(".btn0").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        quizOver();
    });
    $(".btn1").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        quizOver();
    });
    $(".btn2").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = false;
        correctOrWrong();
        quizOver();
    });
    $(".btn3").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        correct = true;
        correctOrWrong();
        quizOver();
    });
}

function quizOver() {
    timeLeft = 0;
    rootEl.children().remove();

    var quizOverEl = $('<h1>');
    var yourScoreIs = $('<h3>');
    var enterInitials = $('<h3>');
    var highscoreForm = $('<form>');
    var userInitials = $('<input>');
    var submitBtn = $('<button>');
    var startOverBtn = $('<button>');

    startOverBtn.addClass('row btn btnSubmit btn-primary m-2 rounded');
    highscoreForm.addClass('row justify-content-center align-items-center initialsForm m-2');
    userInitials.addClass('row initialsInput m-2 rounded');
    userInitials.attr('id', 'initals-input');
    userInitials.attr('type', 'text');
    submitBtn.addClass('row btn btnSubmit btn-primary m-2 rounded');
    quizOverEl.text('Quiz Over!');
    enterInitials.text('Enter Initials:');
    yourScoreIs.text('You got ' + totalScore.toString() + ' out of 4 correct!');
    submitBtn.text('SUBMIT');
    startOverBtn.text('Start Over');
    rootEl.append(quizOverEl);
    rootEl.append(yourScoreIs);
    rootEl.append(highscoreForm);    
    highscoreForm.append(enterInitials);
    highscoreForm.append(userInitials);
    highscoreForm.append(submitBtn);
    rootEl.append(startOverBtn); 

    function handleFormSubmit(event) {
        event.preventDefault();
      
        var userInput = $('input[id="initals-input"]').val(); 
      
        // if there's nothing in the form entered, don't print to the page
        if (!userInput) {
            alert('Please enter between one and three characters if you would like to submit a score.')
            return;
        }
        else if (userInput.length > 3) {
            alert('Three characters maximum, please.')
            return;
        }

        var highScore = {
            Score: totalScore,
            Initials: userInput,
        } 
        highScores.push(highScore);
        localStorage.setItem('savedHighscores', JSON.stringify(highScores));
        $('input[id="initals-input"]').val('');
        displayHighscores();
    }

    highscoreForm.on('submit', handleFormSubmit);
    startOverBtn.on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        location.reload();
    });
}

function displayHighscores() {
    rootEl.children().remove();
    highscoreListEl.children().remove();
    var highscoreTitleEl = $('<h1>');
    var startOverBtn = $('<button>');
    highscoreTitleEl.text('Highscores');
    startOverBtn.text('Start Over');
    startOverBtn.addClass('row btn btnSubmit btn-primary m-2 rounded');


    for (var i = 0; i < highScores.length; i++) {
        var highscoreItemEl = $('<li>');
        highscoreItemEl.text(JSON.stringify(highScores[i]).replace('{','').replace('}','').replace(',',' - ').replace('"','').replace('"','').replace('"','').replace('"','').replace('"','').replace('"',''));
        highscoreItemEl.addClass('list-group-item w-50 justify-content-center align-items-center m-1 rounded');
        highscoreListEl.addClass('list-group justify-content-center align-items-center m-1 rounded');
        highscoreListEl.append(highscoreItemEl);
        }
    
    rootEl.append(highscoreTitleEl); 
    rootEl.append(startOverBtn); 
    rootEl.append(highscoreListEl);  
    
    startOverBtn.on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        location.reload();
    });
}