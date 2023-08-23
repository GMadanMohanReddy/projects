document.addEventListener("DOMContentLoaded", () => {
  const phyQuestions = {
    0: {
      question: "what is the value of 2+2 ?",
      options: ["5", "4", "6", "none"],
      answer: "4",
      chosen_option: null,
    },
    1: {
      question: "what is the value of 8-5 ?",
      options: ["1", "3", "4", "none"],
      answer: "3",
      chosen_option: null,
    },
    2: {
      question: "fsdfjdfsi fsdijfisdjfiasj",
      options: ["1", "2", "3", "none"],
      answer: "3",
      chosen_option: null,
    },
    3: {
      question: "what is the value of 8-5 ?",
      options: ["1", "3", "4", "none"],
      answer: "3",
      chosen_option: null,
    },
  };

  const length = Object.keys(phyQuestions).length;
  const nextButton = document.getElementById("next");
  const backButton = document.getElementById("back");
  const submitButton = document.getElementById("submit");
  const radios = document.getElementsByName("option");
  const greetingElement = document.getElementById("greeting");
  const scoreElement = document.getElementById("s_value");
  const wrongElement = document.getElementById("wrong");
  const notAttemptedElement = document.getElementById("unAttempted");
  const correctElement = document.getElementById("correct");
  const modalElement = document.getElementById("greeting");
  //const mainElement = document.getElementsByClassName("question");
  //const radioButtons = document.querySelector("input[name='option']");

  let questionId = 0;
  let score = 0;
  let count = 0;
  let wrong = 0;
  const questionElement = document.getElementById("Que");
  function questionContainer(questionId) {
    if (questionId === 0) {
      backButton.disabled = true;
    } else {
      backButton.disabled = false;
    }
    if (questionId === length - 1) {
      nextButton.disabled = true;
      submitButton.hidden = false;
    } else {
      nextButton.disabled = false;
      submitButton.hidden = true;
      greetingElement.hidden = false;
    }

    questionElement.innerHTML = phyQuestions[questionId].question;
    for (var i = 1; i <= 4; i++) {
      const option = document.getElementById(`option${i}`);
      option.value = phyQuestions[questionId].options[i - 1];
      const spanElement = document.getElementById(`optionS${i}`);
      spanElement.innerHTML = phyQuestions[questionId].options[i - 1];
    }
  }

  questionContainer(0);
  // selectionHandler(0);
  // chosenOptionHandler(0);

  function handleNext() {
    questionId += 1;

    questionContainer(questionId);
  }

  function handleBack() {
    questionId -= 1;
    questionContainer(questionId);
  }

  nextButton.addEventListener("click", () => {
    // selectionHandler(questionId);
    //chosenOptionHandler(questionId);

    for (i = 0; i < 4; i++) {
      if (radios[i].checked) {
        phyQuestions[questionId].chosen_option = radios[i].value;

        break;
      } else {
        phyQuestions[questionId].chosen_option = null;
      }
    }
    console.log(phyQuestions[questionId].chosen_option);
    handleNext();

    if (phyQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (phyQuestions[questionId].chosen_option === radios[i].value) {
          radios[i].checked = true;
        }
      }
    } else {
      for (i = 0; i < 4; i++) {
        radios[i].checked = false;
      }
    }
  });

  backButton.addEventListener("click", () => {
    for (i = 0; i < 4; i++) {
      if (radios[i].checked) {
        phyQuestions[questionId].chosen_option = radios[i].value;
        break;
      } else {
        phyQuestions[questionId].chosen_option = null;
      }
    }
    // selectionHandler(questionId);
    // chosenOptionHandler(questionId);
    handleBack();

    if (phyQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (phyQuestions[questionId].chosen_option === radios[i].value) {
          radios[i].checked = true;
        }
      }
    } else {
      for (i = 0; i < 4; i++) {
        radios[i].checked = false;
      }
    }
  });

  function scoreHandler() {
    for (i = 0; i < length; i++) {
      if (phyQuestions[i].answer === phyQuestions[i].chosen_option) {
        score = score + 10;
      }
      if (phyQuestions[i].chosen_option == null) {
        count++;
      }
      if (
        phyQuestions[i].chosen_option != null &&
        phyQuestions[i].answer !== phyQuestions[i].chosen_option
      ) {
        wrong++;
      }
    }
    return {
      score: score,
      count: count,
    };
  }

  submitButton.addEventListener("click", () => {
    submitButton.disabled = true;
    greetingElement.hidden = false;
    modalElement.style.display = "block";
    var { score, count } = scoreHandler();
    scoreElement.innerHTML = `${score}`;
    wrongElement.innerHTML = "QUESTIONS Wrong:" + " " + `${wrong}`;
    notAttemptedElement.innerHTML =
      "QUESTIONS not attempted" + " " + `${count}`;
    correctElement.innerHTML = "QUESTIONS Correct" + " " + `${score / 10}`;
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
