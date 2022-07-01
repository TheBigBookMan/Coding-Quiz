// SET UP VARIABLES FOR THE DIFFERENT ClASSES of different questions
var beginBtn = $('#begin-btn');
var questionOneId = $('.question-one');
var currentPage =$('.introduction')
var container = $('.quiz-container');

var variablePageCurrent = 'intro'

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



//start button
beginBtn.on('click', event => {
    event.preventDefault();
    if (variablePageCurrent === 'intro') {
        variablePageCurrent = "questionOne";
        currentPage.attr('class', 'question-one');
        questionOneCreation();
    } else {
        variablePageCurrent = "intro";
        currentPage.attr('class', 'introduction');
        console.log(variablePageCurrent)
    };
    return variablePageCurrent;
});

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
};

// creating question-one page
const questionOneCreation = function() {
    $('.question-one').empty();
    var questionOneQuestion = $('<h2>');
    questionOneQuestion.text(question1Question);
    currentPage.append(questionOneQuestion); 
    //add in function call to function of question 1 button creation 
    currentPage.append(buttonContainer);
    answerButtons(question1Answers);  

};

/*NEED TO KEEP ADDING ON THE NEWLY CREATED PAGES TO THIS FUNCTION AS ITS A TRACKER FOR CORRECT VALUES*/
// function that uses the variabel which states which question the page is on and then uses that to make a variable related to the correct answer for that question and then send that through to the button click value match
const correctAnswerFunction = function(buttonValue) {
    console.log(buttonValue)
    var correctAnswerFromQuestions = ""
    if (variablePageCurrent === "questionOne") {
        correctAnswerFromQuestions = question1Answers[0];
        console.log(correctAnswerFromQuestions)
        console.log(buttonValue)
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);

        
    }
};
// console.log(correctAnswerFunction('Flex'))

//event listener for clicking on the buttons and then each click will then send the value of the click to the correct answer or not function to return if correct or wrong
button1.on('click', function() {
    var buttonValue = button1.val();
    correctAnswerFunction(buttonValue);
    console.log(buttonValue);
    return buttonValue;
    
});


// function for correct answer
const rightOrWrongAnswer = function(answer, correctAnswer) {
    if (answer === correctAnswer) {
        rightOrWrong.text("Correct!")
    } else {
        rightOrWrong.text('Incorrect!')
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