// Game object
// score

// Level
// letters
// exercises

// Exercise object
// image
// answer
// letters

// function Game(levels) {
//     this.levels = levels;
// }
//
// function Level(prep, exercise, letters) {
//     this.prep = prep;
//     this.exercise = exercise;
//     this.letters = letters;
// }
//
// function Prep(level, letters) {
//     this.level = level;
//     this.letters = letters;
// }
//
// function Exercise(questions) {
//     this.questions = questions;
// }
//
function Image(imageFile, audioFile) {
    this.imageFile = "assets/images/" + imageFile;
    this.audioFile = new buzz.sound(audioFile, {
        preload: true
    });
    // this.translation = translation;
}

function Question(answer, letters) {
    // this.image = image;
    this.answer = answer;
    this.letters = letters;
}

$(document).ready(function() {
// $(document).on('ready page:load', function() {

    var functionsForQuestionShow = function() {
      var varImageFileName = $('#question-container').data('imageFileName');
      var varAudioFileName = $('#question-container').data('audioFileName');

      var currentQuestionImage = new Image(varImageFileName, varAudioFileName);

      var answerString = $('#question-container').data('answer');
      var lettersString = $('#question-container').data('letters');
      var currentQuestion = new Question(answerString, lettersString);

      var buildLetterButtonTemplate = function(letter, index) {
          var template = '<div class="letter-button" data-index="' + index + '">' + letter + '</div>'

          return $(template)
      };

      function createLetterButtons() {
          var $letterContainer = $('.letter-container');
          var num = currentQuestion.letters.length;
          for (var i = 0; i < num; i++) {
              var $newLetterButton = buildLetterButtonTemplate(currentQuestion.letters[i], i);
              $letterContainer.append($newLetterButton);
          }
      }

      createLetterButtons();

      var $currentLetter = $('.letter-button');
      var $userAnswer = $('.user-answer');

      var userAnswer = "";

      $currentLetter.click(function() {

        var letterIndex = $(this).data("index");
        var clickedLetter = currentQuestion.letters[letterIndex];
        // clickedLetter.audioFile.play();

        userAnswer += clickedLetter
        $userAnswer.append(clickedLetter);

      });

      $(".question-image").click(function() {
        currentQuestionImage.audioFile.play();
      });

      $('.clear-answer').click(function() {
        userAnswer = "";
        $userAnswer.html(userAnswer);
      })

      $('.submit-button').click(function() {

          if (currentQuestion.answer === userAnswer) {
            $(".result-text").html("Correct!");
          } else {
            $(".result-text").html("Wrong...");
          }

          $("#answer-result-modal").show();
          userAnswer = "";
          $userAnswer.html(userAnswer);
      });

      $(".close").click(function() {
        $("#answer-result-modal").hide();
      });
    };

    if ($('.question-image').length > 0) {
      functionsForQuestionShow();
      console.log("Functions for questions show are loaded.");
    } else {
      console.log("Functions for questions show are not loaded.");
    }
});
