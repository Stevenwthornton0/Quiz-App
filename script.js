
function startQuiz() {
  //calls ojects in STORE and redefines the html upon clicking start quiz
}

function correctAnswer() {
  //tells user that they got the answer correct and updates their score and question #
}

function incorrectAnswer() {
  //tells user they got the answer incorrect, and explains the correct answer. Does not add to score but updates question #
}

function overallScore() {
  //updates html at end of quiz based on user's score. Allows users to start a new quiz.
}

function implementQuiz() {
  startQuiz();
  correctAnswer();
  incorrectAnswer();
  overallScore();
}

//calls all functions when the document is ready
$(implementQuiz())