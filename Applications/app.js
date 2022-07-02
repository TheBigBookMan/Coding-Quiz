// SET UP VARIABLES FOR THE DIFFERENT ClASSES of different questions
var beginBtn = $('#begin-btn');
var questionOneId = $('.question-one');
var questionTwoId = $('.question-two');
var questionThreeId = $('.question-three');
var questionFourId = $('.question-four');
var questionFiveId = $('.question-five');
var questionSixId = $('.question-six');

var currentPage =$('.introduction')
var container = $('.quiz-container');

var variablePageCurrent = 'intro'

// correct and incorrect counters
var correctCounter = 0;
var incorrectCounter = 0;

// button creation
var buttonContainer = $('<div>');
buttonContainer.addClass('btn-container');

var button1 = $('<button>');
button1.addClass('btn1');
button1.addClass('btn-all');

var button2 = $('<button>');
button2.addClass('btn2');
button2.addClass('btn-all');

var button3 = $('<button>');
button3.addClass('btn3');
button3.addClass('btn-all');

var button4 = $('<button>');
button4.addClass('btn4');
button4.addClass('btn-all');

buttonContainer.append(button1);
buttonContainer.append(button2);
buttonContainer.append(button3);
buttonContainer.append(button4);

var buttonValue;

var buttonArray = [button1, button2, button3, button4];

//right or wrong display
var rightOrWrong = $('<h1>');
rightOrWrong.addClass('correctIncorrect');
buttonContainer.append(rightOrWrong);


//question answers
var question1Question = 'What is the display property that is used to organise items within a container in a more flexible way?'
var question1Answers = ["Flex", "Relative", "Element", "Display"];

var question2Question = 'What is the high-level programming language that was used mostly to make this project dynamically functioning?'
var question2Answers = ["Python", "Solidity", "Javascript", "C++"];

var question3Question = 'How many times can you give elements the same ID name?';
var question3Answers = ['3', '0', '2', '1'];

var question4Question = 'What does HTML stand for?';
var question4Answers = ['Hypertext Markdown Language', 'Hypertext Markup Language', 'How To Make Language', 'HighText Markdown Language'];

var question5Question = 'What attribute is used to store a link or relative file path for an image?';
var question5Answers = ['p', 'title', 'src', 'html'];

var question6Question = 'What is an example of camel case style of writing?';
var question6Answers = ['CamelCase', 'camelCase', 'CAMELCASE', 'CaMeLcAsE'];


//input the question array and match the buttons up with the answers and values
const answerButtons = function(questionArrayAnswers) {
    buttonArray[0].text(questionArrayAnswers[0]);
    buttonArray[0].val(questionArrayAnswers[0]);
    buttonArray[1].text(questionArrayAnswers[1]);
    buttonArray[1].val(questionArrayAnswers[1]);
    buttonArray[2].text(questionArrayAnswers[2]);
    buttonArray[2].val(questionArrayAnswers[2]);
    buttonArray[3].text(questionArrayAnswers[3]);
    buttonArray[3].val(questionArrayAnswers[3]);
    console.log("eigth" + questionArrayAnswers)
};

//start button
beginBtn.on('click', event => {
    event.preventDefault();
    if (variablePageCurrent === 'intro') {
        variablePageCurrent = "questionOne";
        currentPage.attr('class', 'question-one');
        console.log("variablepagecurrent" + variablePageCurrent)
        questionOneCreation();
        return variablePageCurrent;
    } 
});

// Page looper function to get to next page
const pageLooper = function() {
    if (variablePageCurrent === "questionOne") {
        variablePageCurrent = "questionTwo";
        console.log("sixth" + variablePageCurrent)
        currentPage.attr('class', 'question-two');
        console.log("currrrent" + currentPage)
        questionTwoCreation();
    } else if (variablePageCurrent === "questionTwo") {
        variablePageCurrent = "questionThree";
        console.log("newpagevariable" + variablePageCurrent);
        currentPage.attr('class', 'question-three');
        console.log('current page 3' + currentPage);
        questionThreeCreation();
    } else if (variablePageCurrent === "questionThree") {
        variablePageCurrent = "questionFour";
        console.log('fourth currentpage' + variablePageCurrent);
        currentPage.attr('class', 'question-four');
        questionFourCreation();
    }
};

// creating question-one page
const questionOneCreation = function() {
    $('.question-one').empty();
    var questionOneQuestion = $('<h2>');
    questionOneQuestion.text(question1Question);
    currentPage.append(questionOneQuestion); 
    currentPage.append(buttonContainer);
    answerButtons(question1Answers);  
    
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        console.log(variablePageCurrent)
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
        console.log(buttonValue)
    });
    
    button3.on('click', function() {
        buttonValue = button3.val();
        correctAnswerFunction(buttonValue);
    });
    
    button4.on('click', function() {
        buttonValue = button4.val();
        correctAnswerFunction(buttonValue);
    });
};

const questionTwoCreation = function() {
    $('.question-two').empty();
    var questionTwoQuestion = $('<h2>');
    questionTwoQuestion.text(question2Question);
    currentPage.append(questionTwoQuestion); 
    currentPage.append(buttonContainer);
    console.log("seventh" + question2Answers)
    answerButtons(question2Answers);
    
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        console.log(variablePageCurrent)
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
        console.log(buttonValue)
    });
    
    button3.on('click', function() {
        buttonValue = button3.val();
        correctAnswerFunction(buttonValue);
    });
    
    button4.on('click', function() {
        buttonValue = button4.val();
        correctAnswerFunction(buttonValue);
    });
};

const questionThreeCreation = function() {
    $('.question-three').empty();
    var questionThreeQuestion = $('<h2>');
    questionThreeQuestion.text(question3Question);
    currentPage.append(questionThreeQuestion); 
    currentPage.append(buttonContainer);
    console.log("seventh" + question3Answers)
    answerButtons(question3Answers);
    
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        console.log(variablePageCurrent)
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
        console.log(buttonValue)
    });
    
    button3.on('click', function() {
        buttonValue = button3.val();
        correctAnswerFunction(buttonValue);
    });
    
    button4.on('click', function() {
        buttonValue = button4.val();
        correctAnswerFunction(buttonValue);
    });
};

const questionFourCreation = function() {
    $('.question-four').empty();
    var questionFourQuestion = $('<h2>');
    questionFourQuestion.text(question4Question);
    currentPage.append(questionFourQuestion); 
    currentPage.append(buttonContainer);
    console.log("seventh" + question4Answers)
    answerButtons(question4Answers);
    
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        console.log(variablePageCurrent)
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
        console.log(buttonValue)
    });
    
    button3.on('click', function() {
        buttonValue = button3.val();
        correctAnswerFunction(buttonValue);
    });
    
    button4.on('click', function() {
        buttonValue = button4.val();
        correctAnswerFunction(buttonValue);
    });
};

/*NEED TO KEEP ADDING ON THE NEWLY CREATED PAGES TO THIS FUNCTION AS ITS A TRACKER FOR CORRECT VALUES*/
// function that uses the variabel which states which question the page is on and then uses that to make a variable related to the correct answer for that question and then send that through to the button click value match
const correctAnswerFunction = function(buttonValue) {
    console.log("second" + buttonValue)
    var correctAnswerFromQuestions = ""
    if (variablePageCurrent === "questionOne") {
        correctAnswerFromQuestions = question1Answers[0];
        console.log("third" + correctAnswerFromQuestions)
        console.log("fourth" + buttonValue)
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions); 
    } else if (variablePageCurrent === "questionTwo") {
        correctAnswerFromQuestions = question2Answers[2];
        console.log(correctAnswerFromQuestions)
        console.log(buttonValue)
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);  
    } else if (variablePageCurrent === "questionThree") {
        correctAnswerFromQuestions = question3Answers[3];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions); 
    } else if (variablePageCurrent === "questionFour") {
        correctAnswerFromQuestions = question4Answers[1];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);
    }
};



//event listener for clicking on the buttons and then each click will then send the value of the click to the correct answer or not function to return if correct or wrong
// create in the listeneres an if statement for the page variable and then turn that it into the new questions


// function for correct answer
const rightOrWrongAnswer = function(answer, correctAnswer) {
    if (answer === correctAnswer) {
        rightOrWrong.text("Correct!");
        correctCounter ++;

        console.log("fifth correct" + correctCounter); // *** take out
        pageLooper();
    } else {
        rightOrWrong.text('Incorrect! The correct answer was ' + correctAnswer);
        incorrectCounter ++;
        console.log("incorrect" + incorrectCounter); // *** take out
    };
    
};



//make a counter that takes in the correct answers and wrong asnwers etc which then gets presented to the end high score page, but add to the functions about the counters + 1 








//SET UP AN ARRAY WHICH CONTAINS THE CLASSES FOR THE DIFFERENT QUESTIONS TO DO RANDOMLY

//SET UP AN ON CLICK EVENT FOR THE BEGIN BUTTON TO GO TO A RANDOM QUESTION CLASS PAGE

//CREATE THE BUTTONS WITH JQUERY FOR THE ANSWERS


// THE TEXT WRONG OR CORRECT SHOWS UP AFTER GUESSING


//SET UP THE TIMER





//HAVE A FINAL RESULTS PAGE WITH FORM THAT SUBMITS THE INITIALS AND SCORE TO THE LOCALSTORAGE 




//MAKE THE VIEW HIGH SCORE PAGE SAVE AND GET THE NAME AND SCORE WITH JSON AND THE LOCAL STORAGE