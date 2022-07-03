// SET UP VARIABLES FOR THE DIFFERENT ClASSES of different questions
var beginBtn = $('#begin-btn');
var questionOneId = $('.question-one');
var questionTwoId = $('.question-two');
var questionThreeId = $('.question-three');
var questionFourId = $('.question-four');
var questionFiveId = $('.question-five');
var questionSixId = $('.question-six');

var finalScorePage = $('.final-score')

var currentPage =$('.introduction')
var container = $('.quiz-container');

var timeEl = $('#timer');

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

var scoreSubmissions = $('#highscore-submissions');



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

var highScoreButton = $('#high-score');
var refreshButton = $('#refresh')

// high scores page
//have an init function that puts the score on the page from the local storage and 

refreshButton.on('click', event => {
    event.preventDefault();
    console.log("workedbeing")
    var storedPlayerList = JSON.parse(localStorage.getItem('personScore'));
    var highScoreName = storedPlayerList.submissionInput;
    var highScoreScore = storedPlayerList.finalScore;
    console.log(storedPlayerList)
    console.log(highScoreName)
    console.log(highScoreScore)
    var liName = $('.nameList');
    liName.text("Initials: " + highScoreName + " Score: " + highScoreScore)
    console.log("worked")
});

var highScoreSubmissions = $('.highscore-submissions');
var highScoreName;
var highScoreScore;

var highScoreList = $('.submit-list');
var playerList = [];

const init = function() {
    
    console.log("init worked")
    if (storedPlayerList !== null) {
        playerList = storedPlayerList;
    }
    renderHighScores();
}

const renderHighScores = function() {
    console.log(storedPlayerList)
    for (var i = 0; i < playerList.length; i++) {
        var userScore = playerList[i];

        var li = $('<li>');
        li.text(userScore);
        highScoreList.append(li);
    }
    console.log("render worked")
};
console.log(highScoreScore)


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

var secondsLeft = 60;

const setTime = function() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.text("Time: " + secondsLeft);

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            variablePageCurrent = "questionSix";
            pageLooper();
        } else if (variablePageCurrent === "finalScore") {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//start button
beginBtn.on('click', event => {
    event.preventDefault();
    if (variablePageCurrent === 'intro') {
        variablePageCurrent = "questionOne";
        currentPage.attr('class', 'question-one');
        console.log("variablepagecurrent" + variablePageCurrent)
        questionOneCreation();
        setTime();
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
    } else if (variablePageCurrent === "questionFour") {
        variablePageCurrent = "questionFive";
        console.log('fifthcurrentpage' + variablePageCurrent);
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

//function for creating final score page
const finalScorePageCreation = function() {
    $('.final-score').empty();
    var finalScoreHeading = $('<h2>');
    var finalScore = $('<h1>');
    finalScore.addClass('finalSubmissionScore')
    var submissionForm = $('<form>');
    submissionForm.addClass('submission-form');
    if (secondsLeft <= 0) {
        finalScoreHeading.text('Your final score is determined by the amount of time left, you ran out of time so your score is ');
        finalScore.text('0')
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
    
    var submissionText = $('<h3>');
    submissionText.text('Input your initials to submit your score: ')
    submissionText.addClass('submission-text')
    submissionForm.append(submissionText);

    var submissionInput = $('<input>');
    submissionInput.attr('type', 'text')
    submissionInput.attr('placeholder', 'Input Initials');
    submissionInput.attr('max-length', '10');
    submissionInput.addClass('submission-input');
    submissionForm.append(submissionInput);
    
    var submissionBtn = $('<button>');
    submissionBtn.text('Submit');
    submissionBtn.addClass('submission-btn');
    submissionForm.append(submissionBtn);

    console.log(submissionInput)

    submissionBtn.on("click", function(event) {
        event.preventDefault();
        console.log(submissionInput)
        console.log(secondsLeft)
        var personScore = {
            submissionInput: submissionInput.val(),
            finalScore: secondsLeft
        };
        console.log(personScore)
        localStorage.setItem('personScore', JSON.stringify(personScore));
        });
    
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

const questionFiveCreation = function() {
    $('.question-five').empty();
    var questionFiveQuestion = $('<h2>');
    questionFiveQuestion.text(question5Question);
    currentPage.append(questionFiveQuestion); 
    currentPage.append(buttonContainer);
    console.log("seventh" + question5Answers)
    answerButtons(question5Answers);
    
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

const questionSixCreation = function() {
    $('.question-six').empty();
    var questionSixQuestion = $('<h2>');
    questionSixQuestion.text(question6Question);
    currentPage.append(questionSixQuestion); 
    currentPage.append(buttonContainer);
    console.log("seventh" + question6Answers)
    answerButtons(question6Answers);
    
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


// function that uses the variabel which states which question the page is on and then uses that to make a variable related to the correct answer for that question and then send that through to the button click value match
const correctAnswerFunction = function(buttonValue) {
    var correctAnswerFromQuestions = ""
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
        secondsLeft -= 10;
        console.log("incorrect" + incorrectCounter); // *** take out
        pageLooper();
    };
    
};
