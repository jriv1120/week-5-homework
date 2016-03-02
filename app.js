
var questions = [{
    question: "What was the name of the company the ooze that mutated the turtles came from?",
    choices: ["TGIF", "TGRI", "TIGR", "GRIT"],
    correctAnswer: 1
}, {
    question: "How did Master Splinter learn the martial arts he teaches to the turtles?",
    choices: ["Whatching old kung-fu movies.", "Watching his owner in Japan", "Living in a dojo before he mutated", "By reading comic books"],
    correctAnswer: 1
}, {
    question: "Which turtle was the rebel of the four?",
    choices: ["Leonardo", "Donatello", "Michaelangelo", "Raphael"],
    correctAnswer: 3
}, {
    question: "In the 2nd movie, who was the famous rapper that was performing in the club that the turtles fought the mutated fox and snapping turtle?",
    choices: ["Flavor Flav", "Ice T", "Vanilla Ice", "Ice Cube"],
    correctAnswer: 0
}, {
    question: "What was the name of Shredder's ninja henchmen?",
    choices: ["The Wu Clan", "The Blue Clan", "The Foot Clan", "The Black Ninjas"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {




    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}



function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}