// Level 1 – specific set of words/images, go through in order
// Collect words/images, make/find recordings
// Level 2 - randomly choose from level 2 set of words
// Collect words/images, make/find recordings
// Level 3 - randomly choose from level 3 set of words
// Level 4 - randomly choose from level 4 set of words
// Level 5 - randomly choose from level 5 set of words

// $(document).ready(function() {
// });

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

// // var currentExercise = new Exercise("house.jpg",  )
//
// // letter object
// // letter
// // audio file
//
// function Letter(letter, audioFile) {
//     this.letter = letter;
//     this.audioFile = new buzz.sound("assets/audio/" + audioFile, {
//         formats: [ 'm4a' ],
//         preload: true
//     });
// }
//

$(document).ready(function() {
// $(document).on('ready page:load', function() {

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
    console.log("user: " + userAnswer);
    console.log("answer: " + currentQuestion.answer);

      if (currentQuestion.answer === userAnswer) {
        $(".result-text").html("Correct!");
      } else {
        $(".result-text").html("Wrong...");
      }

      $("#answer-result-modal").show();
  });

  $(".close").click(function() {
    $("#answer-result-modal").hide();
  });
});
