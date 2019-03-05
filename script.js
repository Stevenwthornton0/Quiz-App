let questionNumber = 0;
let score = 0;

function answersMakeup (arr) {
  const answers = [];
  for (let i = 0; i < arr.length; i++) {
    answers.push(`
        <label class='answerOptions'>
          <input type='radio' value='${arr[i].value}' name='answer' required>
          <span>${arr[i].value}</span>
        </label>
    `);
  }
  return answers.join('');
}

function generateQuestionElement(item) {
  return `
  <div class='question-${questionNumber}>
    <h2>${STORE[questionNumber].question}</h2>
    <form class='answerForm>
      <fieldset>
        ${answersMakeup(STORE[questionNumber].answers)}
        <button type='submit' class='submitButton'>Submit</button>
      </fieldset>
    </form>
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

function updateQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber+1);
}

function updateScore() {
  score++;
  $('.score').text(score);
}

function findCorrectAnswer(boolean) {
  const correct = STORE[questionNumber].answers.find(answer => answer.isCorrect === boolean);
  return correct.value;
}

function selectAnswer() {
  $('form.answerForm').on('submit', function(event) {
    event.preventDefault();
    console.log('submitted');
    let correct = findCorrectAnswer(true);
    if (corect === $('input:checked').val()) {
      correctAnswer();
    } else {
      incorrectAnswer();
    };
  })
}

function correctAnswer() {

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
  selectAnswer();
  overallScore();
}

//calls all functions when the document is ready
$(implementQuiz)