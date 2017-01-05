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
    this.audioFile = new buzz.sound("assets/audio/" + audioFile, {
        formats: [ 'm4a' ],
        preload: true
    });
    // this.translation = translation;
}

var answerString = $('#question-container').data('answer');
var lettersString = $('#question-container').data('letters');

function Question(image, answer, letters) {
    this.image = image;
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
// var letters = [
//     new Letter("あ", "1_a"),
//     new Letter("い", "2_i"),
//     new Letter("う", "3_u"),
//     new Letter("え", "4_e"),
//     new Letter("お", "5_o")
// ];
//
// // var letters = [];
// // var letter1 = new Letter("あ", "1_a");
// // var letter2 = new Letter("い", "2_i");
// // var letter3 = new Letter("う", "3_u");
// // var letter4 = new Letter("え", "4_e");
// // var letter5 = new Letter("お", "5_o");
//
// //
// //creates a new image for this Question
// //


//
// var currentQuestion = new Question(image1.imageFile, [letters[1], letters[3]], letters);
//
// // how can we define a bunch of questions/levels in a json file?
// // and then write a function to display any of them
// function setQuestion(question) {
//
// }
// //
// //Template for letter buttons
// //
// var buildLetterButtonTemplate = function(letter, index) {
//     var template = '<div class="letter-button" data-index="' + index + '">' + letter.letter + '</div>'
//
//     return $(template)
// };
//
//
// // //Set a correct answer
// // var correctAnswer = ['い', 'え'];
//
// //React acording to a given answer
// //store answer
//
// function createLetterButtons() {
//     var $letterContainer = $('.letter-container');
//     var num = currentQuestion.letters.length;
//     for (var i = 0; i < num; i++) {
//         var $newLetterButton = buildLetterButtonTemplate(currentQuestion.letters[i], i);
//         $letterContainer.append($newLetterButton);
//     }
// }
//
$(document).ready(function() {

// $(document).on('ready page:load', function() {
  // console.log($('#question-container').data('imageFileName'));
  // console.log($('#question-container').data('audioFileName'));
  // console.log($('#question-container').data('answer'));
  // console.log($('#question-container').data('letters'));

  var varImageFileName = $('#question-container').data('imageFileName');
  var varAudioFileName = $('#question-container').data('audioFileName');

  var currentQuestionImage = new Image(varImageFileName, varAudioFileName);

  console.log(currentQuestionImage);

  // createLetterButtons();

  // var $currentLetter = $('.letter-button');
  // var $userAnswer = $('.user-answer');
  //
  // var userAnswerArr = [];
  //
  // $currentLetter.click(function() {
  //
  //   var letterIndex = $(this).data("index");
  //   var clickedLetter = currentQuestion.letters[letterIndex];
  //   // clickedLetter.audioFile.play();
  //
  //   userAnswerArr.push(clickedLetter)
  //   $userAnswer.append(clickedLetter.letter);
  //
  //   // console.log(userAnswerArr === currentQuestion.answer);
  //
  // });
  //
  // $(".question-image").click(function() {
  //   currentQuestionImage.audioFile.play();
  // });
  //
  // $('.submit-button').click(function() {
  //   console.log("user: " + userAnswerArr);
  //   console.log("answer: " + currentQuestion.answer);
  //
  //   if (isArraysEqual(currentQuestion.answer, userAnswerArr)) {
  //     $(".result-text").html("Correct!");
  //   } else {
  //     $(".result-text").html("Wrong...");
  //   }
  //
  //   $("#answer-result-modal").show();
  // });
  //
  // $(".close").click(function() {
  //   $("#answer-result-modal").hide();
  // });
});
