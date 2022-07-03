// Global variables
// Begin button
var beginBtn = $('#begin-btn');

// Variables for each page of the quiz
var questionOneId = $('.question-one');
var questionTwoId = $('.question-two');
var questionThreeId = $('.question-three');
var questionFourId = $('.question-four');
var questionFiveId = $('.question-five');
var questionSixId = $('.question-six');
var finalScorePage = $('.final-score');

// Variables for use in main functions
var currentPage =$('.introduction');
var container = $('.quiz-container');
var timeEl = $('#timer');
var secondsLeft = 60;

// Variable for track of current page and to change pages
var variablePageCurrent = 'intro';

// Correct and incorrect counters
var correctCounter = 0;
var incorrectCounter = 0;

// Button creation
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

// Right or wrong function variables
var rightOrWrong = $('<h1>');
rightOrWrong.addClass('correctIncorrect');
buttonContainer.append(rightOrWrong);

// High score page main variable
var scoreSubmissions = $('#highscore-submissions');
var refreshButton = $('#refresh');

// Quiz questions and answers
// Answers in arrays
var question1Question = 'What is the display property that is used to organise items within a container in a more flexible way?';
var question1Answers = ["Flex", "Relative", "Element", "Display"];

var question2Question = 'What is the high-level programming language that was used mostly to make this project dynamically functioning?';
var question2Answers = ["Python", "Solidity", "Javascript", "C++"];

var question3Question = 'How many times can you give elements the same ID name?';
var question3Answers = ['3', '0', '2', '1'];

var question4Question = 'What does HTML stand for?';
var question4Answers = ['Hypertext Markdown Language', 'Hypertext Markup Language', 'How To Make Language', 'HighText Markdown Language'];

var question5Question = 'What attribute is used to store a link or relative file path for an image?';
var question5Answers = ['p', 'title', 'src', 'html'];

var question6Question = 'What is an example of camel case style of writing?';
var question6Answers = ['CamelCase', 'camelCase', 'CAMELCASE', 'CaMeLcAsE'];

// Function for the refresh button that refreshes user names on the high score page
refreshButton.on('click', event => {
    event.preventDefault();
    // Gets the object from local storage using JSON
    var storedPlayerList = JSON.parse(localStorage.getItem('personScore'));
    var highScoreName = storedPlayerList.submissionInput;
    var highScoreScore = storedPlayerList.finalScore;
    // Add the persons initials and score to the unordered list
    var liName = $('.nameList');
    liName.text("Initials: " + highScoreName + " Score: " + highScoreScore);
});

// Function that assigns the titles and values from each question to the buttons
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

// Function that sets a timer to count down
const setTime = function() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.text("Time: " + secondsLeft);
        // If statement that says if the timer goes to 0 then the screen jumps to the finalScore page
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            variablePageCurrent = "questionSix";
            pageLooper();
        } else if (variablePageCurrent === "finalScore") {
            clearInterval(timerInterval);
        }
    }, 1000);
};

// Begin button on the introduction page with a listener that starts the quiz by going to questionOnePage and starts the timer
beginBtn.on('click', event => {
    event.preventDefault();
    if (variablePageCurrent === 'intro') {
        variablePageCurrent = "questionOne";
        currentPage.attr('class', 'question-one');
        questionOneCreation();
        setTime();
        return variablePageCurrent;
    } 
});

// Page looper function to get to next page, uses the variablePageCurrent to check for current status and then goes to the next page on calling
const pageLooper = function() {
    if (variablePageCurrent === "questionOne") {
        variablePageCurrent = "questionTwo";
        currentPage.attr('class', 'question-two');
        questionTwoCreation();
    } else if (variablePageCurrent === "questionTwo") {
        variablePageCurrent = "questionThree";
        currentPage.attr('class', 'question-three');
        questionThreeCreation();
    } else if (variablePageCurrent === "questionThree") {
        variablePageCurrent = "questionFour";
        currentPage.attr('class', 'question-four');
        questionFourCreation();
    } else if (variablePageCurrent === "questionFour") {
        variablePageCurrent = "questionFive";
        currentPage.attr('class', 'question-five');
        questionFiveCreation();
    } else if (variablePageCurrent === "questionFive") {
        variablePageCurrent = "questionSix";
        currentPage.attr('class', 'question-six');
        questionSixCreation();
    } else if (variablePageCurrent === "questionSix") {
        variablePageCurrent = "finalScore";
        currentPage.attr('class', 'final-score');
        finalScorePageCreation();
    }
};

// Function that creates the finals score page
const finalScorePageCreation = function() {
    // Erasing the elements and then using JQUERY to add in elements and content through the DOM
    $('.final-score').empty();
    var finalScoreHeading = $('<h2>');
    var finalScore = $('<h1>');
    finalScore.addClass('finalSubmissionScore');
    var submissionForm = $('<form>');
    submissionForm.addClass('submission-form');
    // If statement to check on the final page if the player ran out of time or if they answered all questions and made it to the end
    if (secondsLeft <= 0) {
        finalScoreHeading.text('Your final score is determined by the amount of time left, you ran out of time so your score is ');
        finalScore.text('0');
        currentPage.append(finalScoreHeading);
        currentPage.append(submissionForm);
        submissionForm.append(finalScore)
    } else {
        finalScoreHeading.text('Your final score is determined by the amount of time left, your score is ');
        finalScore.text(secondsLeft - 1);
        currentPage.append(finalScoreHeading);
        currentPage.append(submissionForm);
        submissionForm.append(finalScore);
    }
    
    // Creating the submit button the final page
    var submissionText = $('<h3>');
    submissionText.text('Input your initials to submit your score: ');
    submissionText.addClass('submission-text');
    submissionForm.append(submissionText);

    var submissionInput = $('<input>');
    submissionInput.attr('type', 'text');
    submissionInput.attr('placeholder', 'Input Initials');
    submissionInput.attr('max-length', '10');
    submissionInput.addClass('submission-input');
    submissionForm.append(submissionInput);
    
    var submissionBtn = $('<button>');
    submissionBtn.text('Submit');
    submissionBtn.addClass('submission-btn');
    submissionForm.append(submissionBtn);

    // Submit button has a listener to send the final score and initials of the player to local storage through JASON object
    submissionBtn.on("click", function(event) {
        event.preventDefault();
        var personScore = {
            submissionInput: submissionInput.val(),
            finalScore: secondsLeft
        };

        localStorage.setItem('personScore', JSON.stringify(personScore));
        }
    );
};

// Creating the question one page
const questionOneCreation = function() {
    // Emptying the elements from the page
    $('.question-one').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionOneQuestion = $('<h2>');
    questionOneQuestion.text(question1Question);
    currentPage.append(questionOneQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question1Answers);  
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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

// Creating the question two page
const questionTwoCreation = function() {
    // Emptying the elements from the page
    $('.question-two').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionTwoQuestion = $('<h2>');
    questionTwoQuestion.text(question2Question);
    currentPage.append(questionTwoQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question2Answers);
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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

// Creating the question three page
const questionThreeCreation = function() {
    // Emptying the elements from the page
    $('.question-three').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionThreeQuestion = $('<h2>');
    questionThreeQuestion.text(question3Question);
    currentPage.append(questionThreeQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question3Answers);
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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

// Creating the question four page
const questionFourCreation = function() {
    // Emptying the elements from the page
    $('.question-four').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionFourQuestion = $('<h2>');
    questionFourQuestion.text(question4Question);
    currentPage.append(questionFourQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question4Answers);
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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

// Creating the question five page
const questionFiveCreation = function() {
    // Emptying the elements from the page
    $('.question-five').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionFiveQuestion = $('<h2>');
    questionFiveQuestion.text(question5Question);
    currentPage.append(questionFiveQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question5Answers);
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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

// Creating the question six page
const questionSixCreation = function() {
    // Emptying the elements from the page
    $('.question-six').empty();
    // Using JQUERY and the DOM to insert question and the answer buttons on the page
    var questionSixQuestion = $('<h2>');
    questionSixQuestion.text(question6Question);
    currentPage.append(questionSixQuestion); 
    currentPage.append(buttonContainer);
    // Assigning the buttons with text and values to them
    answerButtons(question6Answers);
    // Event listeners for the buttons and once clicked to see if they are correct or incorrect
    button1.on('click', event => {
        buttonValue = button1.val();
        event.preventDefault();
        correctAnswerFunction(buttonValue);
    });

    button2.on('click', function() {
        buttonValue = button2.val();
        correctAnswerFunction(buttonValue);
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


// Function that takes in the button value from the buttons of the question that are clicked and uses if/else if statement to check if they are correct or incorrect
const correctAnswerFunction = function(buttonValue) {
    var correctAnswerFromQuestions = "";
    if (variablePageCurrent === "questionOne") {
        correctAnswerFromQuestions = question1Answers[0];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions); 
    } else if (variablePageCurrent === "questionTwo") {
        correctAnswerFromQuestions = question2Answers[2];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);  
    } else if (variablePageCurrent === "questionThree") {
        correctAnswerFromQuestions = question3Answers[3];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions); 
    } else if (variablePageCurrent === "questionFour") {
        correctAnswerFromQuestions = question4Answers[1];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);
    } else if (variablePageCurrent === "questionFive") {
        correctAnswerFromQuestions = question5Answers[2];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);
    } else if (variablePageCurrent === "questionSix") {
        correctAnswerFromQuestions = question6Answers[1];
        rightOrWrongAnswer(buttonValue, correctAnswerFromQuestions);
    }
};

// Function that takes in the answer guessed by the user and compares it to the correct answer for that question and then outputs if it's correct or incorrect and then calls the function to go to the next page
const rightOrWrongAnswer = function(answer, correctAnswer) {
    if (answer === correctAnswer) {
        rightOrWrong.text("Correct!");
        correctCounter ++;
        pageLooper();
    } else {
        rightOrWrong.text('Incorrect! The correct answer was ' + correctAnswer);
        incorrectCounter ++;
        secondsLeft -= 10;
        pageLooper();
    };
};