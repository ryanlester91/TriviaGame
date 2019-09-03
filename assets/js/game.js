//Global Variables
//===========================
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions;
var timeRemaining = 16;
var intervalID;
var indexQA = 0; //index to load a different question each round without game reset or screen refresh
var answered = false; //variable that stops timer if user has clicked an answer
var correct;



var triviaGame = [
  {
    question: 'I captained the Queen Anne\'s \ Revenge and placed lit matches under my hat to make my enemies believe I reeked of hellfire. I even blockaded the port of Charleston and made off with choice valuables before I met my end in a battle at Ocracoke. Who am I?',
    answers: ['Bartholomew Roberts', 'Blackbeard', 'Captain Henry Morgan'],
    correct: 'Blackbeard',
    right: 'Correct!',
    wrong: 'Wrong!',
    imageURL: 'assets/images/blackbeard.jpg'
  },
  {
    question: 'I plundered settlements and ships on the Spanish Main, and even the King of England treated me as a hero for stickin\'\ it to Spain. You may have heard of the rum with my name. Who am I?',
    answers: ['Captain Henry Morgan', 'Captain Kidd', 'Blackbeard'],
    correct: 'Captain Henry Morgan',
    right: 'Correct!',
    wrong: 'Wrong!',
    imageURL: 'assets/images/captain-morgan.jpg'
  },
  {
    question: '400 ships my crew and I snatched as we ventured from the Caribbean to West Africa; even my enemies swore I was invincible! A merry life and a short one was my motto. Who am I?',
    answers: ['Captain Kidd', 'Bartholomew Roberts', 'Captain Henry Morgan'],
    correct: 'Bartholomew Roberts',
    right: 'Correct!',
    wrong: 'Wrong!',
    imageURL: 'assets/images/black-bart-roberts.jpg'
  },
  {
    question: 'I buried my treasure here and there, and to this day people are still hunting for my riches. Who am I?',
    answers: ['Blackbeard', 'Captain Henry Morgan', 'Captain Kidd'],
    correct: 'Captain Kidd',
    right: 'Correct!',
    wrong: 'Wrong!',
    imageURL: 'assets/images/captain-kidd.jpeg'
  }
];
//Functions
//=====================================
  function startGame() {
    console.log("game has started");
    $(".startBtn").remove();
    correctAnswers = 0;
    incorrectAnswers = 0;
    createQuestions();
  }

var createQuestions = function () {
  answered = false;
  timeRemaining = 16;
  intervalID = setInterval(timer, 1000);
  if(answered === false) {
    timer();
  }
  correct = triviaGame[indexQA].correct;
  var question = triviaGame[indexQA].question;
  $(".question").html(question);
  for(i = 0; i < 4; i++) {
    var answer = triviaGame[indexQA].answers[i];
    
    console.log(indexQA[i].answers[j]);
    $(".answers").append("<h4 class= answersAll id=" + i + ">" + answer + "</h4");
      }
  
      $("h4").click(function() {
        var id = $(this).attr("id");
        if(id === correct) {
          answered = true; //stops the timer
          $(".answers").text("THE ANSWER IS: " + triviaGame[indexQA].answers[correct] + "");
          correctAnswer();
        }
        else(id === incorrect) {
            answered = true;
            $(".answers").text("YOU ANSWERED: " + triviaGame[indexQA].answers[id] + "BUT THE ANSWER IS: " + triviaGame[indexQA].answers[correct] + "");
            incorrectAnswer();
        }
      })

      function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQA].answers[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!");
        resetRound();
    };

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text("YOU HAVE ANSWERED WRONG!");
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaGame[indexQandA].image + ' ">'); // adds answer image
        indexQA++; // increments index which will load next question when loadQandA() is called again
        if (indexQA < triviaGame.length) {
            setTimeout(function () {
                createQuestions();
                $('.answerImage').remove();
            }, 5000); // removes answer image from previous round
        } else {
            setTimeout(function () {
                $('.question').remove();
                $('.timeRemaining').remove();
                $('.answerImage').remove();
                $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

    
    
    
    }