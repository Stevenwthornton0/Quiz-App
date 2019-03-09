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

function generateQuestionElement(arr) {
  return `
  <div class='question-${questionNumber}'>
    <div class='line'></div>
    <div class='questionContainer'>
      <h2>${arr[questionNumber].question}</h2>
    </div>
    <form class='answerForm'>
      <fieldset>
        ${answersMakeup((arr[questionNumber]).answers)}
        <input type='submit' class='submitButton' value'Submit'>
      </fieldset>
    </form>
  </div>
  `;
} 

function startQuiz() {
  $('.startQuiz').on('click', '.startButton', function(event) {
    $('.startQuiz').remove();
    $('.questionNumber').text(1);
    $('.questionAndAnswers').css('display', 'block');
    $('.background').css('filter', 'brightness(50%)')
  });
}

function renderQuestion() {
  $('.questionAndAnswers').html(generateQuestionElement(STORE));
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
  $('form').on('submit', function(event) {
    event.preventDefault();
    let correct = findCorrectAnswer(true);
    if (correct === $('input:checked').val()) {
      correctAnswer();
    } else {
      incorrectAnswer();
    };
  });
}

function correctAnswer() {
  $('.questionAndAnswers').html(`
    <div class='line'></div>
    <div class='correctAnswerFeedback'>
      <p>That is Correct!</p>
      <button type='button' class='nextButton'>Next</button>
    </div>
    `);
  updateScore();
}

function incorrectAnswer() {
  let correct = findCorrectAnswer(true);
  $('.questionAndAnswers').html(`
    <div class='line'></div>
    <div class='incorrectAnswerFeedback'>
      <div class='feedbackContainer'>
        <p>That is incorrect!</p>
        <p>The correct answer is <span><b>${correct}</b></span></p>
      </div>  
      <button type='button' class='nextButton'>Next</button>
    </div>
  `);
}

function renderOverallScore(num) {
  $('.questionAndAnswers').html(`
    <div class='finalPage'>
      <p>Final Score: ${num} out of 10</p>
      <button type='button' class='restartButton'>Restart Quiz</button>
    </div>
  `)
}

function renderNextQuestion() {
  $('main').on('click', '.nextButton', function(event) {
    if (questionNumber === 9) {
      renderOverallScore(score)
    } else {
      updateQuestionNumber();
      renderQuestion();
      selectAnswer();
    };
  });
}

function restartQuiz() {
  $('main').on('click', '.restartButton', function(event) {
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