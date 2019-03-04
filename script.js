let questionNumber = 0;
let score = 0;

function generateQuestionElement(item) {
  return `
  <div class='question-${questionNumber}>
  <h2>${STORE[questionNumber].question}</h2>
  <form>
  <fieldset>
  <label class='answerOptions'>
  <input type='radio' value='${STORE[questionNumber].answers[0].value}' name='answer' required>
  <span>${STORE[questionNumber].answers[0].value}</span>
  </label>
  <label class='answerOptions'>
  <input type='radio' value='${STORE[questionNumber].answers[1].value}' name='answer' required>
  <span>${STORE[questionNumber].answers[1].value}</span>
  </label>
  <label class='answerOptions'>
  <input type='radio' value='${STORE[questionNumber].answers[2].value}' name='answer' required>
  <span>${STORE[questionNumber].answers[2].value}</span>
  </label>
  <label class='answerOptions'>
  <input type='radio' value='${STORE[questionNumber].answers[3].value}' name='answer' required>
  <span>${STORE[questionNumber].answers[3].value}</span>
  </label>
  </div>
  ` 
}

function startQuiz() {
  $('.startQuiz').on('click', '.startButton', function(event) {
    console.log('startQuiz ran')
    $('.startQuiz').remove();
    console.log('element removed')
    $('.questionNumber').text(1);
    $('.questionAndAnswers').css('display', 'block');
  });
}

function renderQuiz() {
  $('.questionAndAnswers').html(generateQuestionElement(STORE));
  console.log(generateQuestionElement(STORE));
}

function updateScore () {
  score++;
  $('.score').text(score);
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
  renderQuiz();
  correctAnswer();
  incorrectAnswer();
  overallScore();
}

//calls all functions when the document is ready
$(implementQuiz)