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
  };
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
  `;
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

function renderQuestion() {
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
    if (correct === $('input:checked').val()) {
      correctAnswer();
    } else {
      incorrectAnswer();
    };
  });
}

function correctAnswer() {
  $('.questionAndAnswers').hmtl(`
    <div class='correctAnswerFeedback'>
      <p>Correct!</p>
      <button type=button class='nextButton'>Next</button>
    </div>
    `);
  updateScore();
}

function incorrectAnswer() {
  let correct = findCorrectAnswer(true);
  console.log(correct);
  $('.questionAndAnswers').html(`
    <div class='incorrectAnswerFeedback>
      <p>That is incorrect</p>
      <p>The correct answer is<span>${correct}</span></p>
      <button type=button class='nextButton'>Next</button>
    </div>
  `);
}

function renderOverallScore(num) {
  $('.questionAndAnswers').html(`
    <div class='finalPage'>
      <h2>Final Score: ${num} out of 10</h2>
      <button type='button' class='restartButton'>Restart Quiz</button>
    </div>
  `)
}

function renderNextQuestion() {
  $('main').on('click', '.nextButton', function(event) {
    if (questionNumber === 10) {
      renderOverallScore(score)
    } else {
      updateQuestionNumber();
      renderQuestion();
      selectAnswer();
  });
}

function restartQuiz() {
  $('main').on('click', 'restartButton', function(event) {
    location.reload();
  });
}

function implementQuiz() {
  startQuiz();
  renderQuestion();
  selectAnswer();
  renderNextQuestion();
  restartQuiz();
}

//calls all functions when the document is ready
$(implementQuiz)