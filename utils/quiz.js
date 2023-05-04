export default function quiz(questions) {
  // Selectors
  const quizContainer = document.querySelector(".quiz__content");

  // State
  let currentQuestionIndex = 0;
  const lastQuestionIndex = questions.length - 1;
  let selectedAlternative = null;

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
  function renderCurrentQuestion() {
    questionProgress.innerHTML = `${currentQuestionIndex + 1}/${
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

      alternativesContainer.appendChild(radioButton);
      alternativesContainer.appendChild(alternativeLabel);
    }

    selectedAlternative = null;

    questionContainer.appendChild(questionText);
    questionContainer.appendChild(alternativesContainer);

    function setAlternative(index) {
      selectedAlternative = index;
    }
  }

  // Events
}
