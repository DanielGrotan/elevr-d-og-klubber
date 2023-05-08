export default function quiz(questions) {
  // Selectors
  const quizContainer = document.querySelector(".quiz__content");

  // State
  let currentQuestionIndex = 0;
  const lastQuestionIndex = questions.length - 1;
  let selectedAlternative = null;
  let score = 0;

  const questionProgress = document.createElement("p");
  questionProgress.className = "quiz__progress";

  const questionContainer = document.createElement("div");
  questionContainer.className = "quiz__question-container";

  const submitButton = document.createElement("button");
  submitButton.className = "btn quiz__submit-btn";
  submitButton.innerHTML = "Neste spørsmål";

  quizContainer.appendChild(questionProgress);
  quizContainer.appendChild(questionContainer);
  quizContainer.appendChild(submitButton);

  // On mount
  renderCurrentQuestion();

  // Handlers
  function setAlternative(index) {
    selectedAlternative = index;
  }

  function renderCurrentQuestion() {
    questionProgress.innerHTML = `${currentQuestionIndex + 1} / ${
      questions.length
    }`;

    questionContainer.innerHTML = null;

    const { question, alternatives } = questions[currentQuestionIndex];

    const questionText = document.createElement("h3");
    questionText.className = "quiz__question";
    questionText.innerHTML = question;

    const alternativesContainer = document.createElement("div");
    alternativesContainer.className = "quiz__alternatives";

    const shuffledAlternatives = alternatives.sort(
      (a, b) => 0.5 - Math.random()
    );

    for (let i = 0; i < shuffledAlternatives.length; i++) {
      const { text } = shuffledAlternatives[i];

      const alternativeContainer = document.createElement("div");
      alternativeContainer.className = "quiz__alternative-container";

      const radioButton = document.createElement("input");
      radioButton.className = "quiz__alternative";
      radioButton.id = `alternative${i + 1}`;
      radioButton.type = "radio";
      radioButton.name = "alternative";

      radioButton.addEventListener("click", () => {
        setAlternative(i);
      });

      const alternativeLabel = document.createElement("label");
      alternativeLabel.className = "quiz__alternative-label";
      alternativeLabel.htmlFor = `alternative${i + 1}`;
      alternativeLabel.innerHTML = text;

      alternativeContainer.appendChild(radioButton);
      alternativeContainer.appendChild(alternativeLabel);

      alternativesContainer.appendChild(alternativeContainer);
    }

    selectedAlternative = null;

    questionContainer.appendChild(questionText);
    questionContainer.appendChild(alternativesContainer);
  }

  function handleSubmit() {
    if (selectedAlternative === null) return;

    if (currentQuestionIndex === lastQuestionIndex) {
      let resultMessage;

      if (score <= 6) {
        resultMessage =
          "Dessverre, det virker ikke som om programmeringsklubben vår passer for deg akkurat nå. Men ikke gi opp, og fortsett å utforske interesser du har!";
      } else if (score <= 12) {
        resultMessage =
          "Du har noen grunnleggende ferdigheter og interesser innen programmering, og vi tror du kan ha nytte og glede av å være med i klubben vår. Velkommen om bord!";
      } else {
        resultMessage =
          "Det er tydelig at du har en sterk interesse for programmering og teknologi. Vi tror at vår klubben kan gi deg den ekstra fordelen du trenger for å ta dine ferdigheter til neste nivå. Vi ser frem til å ha deg med på laget!";
      }

      quizContainer.innerHTML = `
        <p class="quiz__result-message">${resultMessage}</p>
      `;

      return;
    }

    score +=
      questions[currentQuestionIndex].alternatives[selectedAlternative].points;
    console.log(score);

    currentQuestionIndex++;
    renderCurrentQuestion();
  }

  // Events
  submitButton.addEventListener("click", handleSubmit);
}
