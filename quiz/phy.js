document.addEventListener("DOMContentLoaded", () => {
  const phyQuestions = {
    0: {
      question: "The absorption of ink by blotting paper involves ?",
      options: [
        "viscosity of ink",
        "capillary action phenomenon",
        "capillary action phenomenon",
        "siphon action",
      ],
      answer: "capillary action phenomenon",
      chosen_option: null,
    },
    1: {
      question: "In what form is heavy water used in a nuclear reactor ?",
      options: ["Coolant", "Controller", "Diluent", "Preservative"],
      answer: "Diluent",
      chosen_option: null,
    },
    2: {
      question: "Which item is used in the fabrication of the transistor ?",
      options: ["Silicon", "Silver", "Aluminium", "Copper"],
      answer: "Silicon",
      chosen_option: null,
    },
    3: {
      question: "X-rays cannot pass through what ?",
      options: ["Skin", "Bone", "Meat", "Wood"],
      answer: "Bone",
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
    smoothScrollTo(modalElement);
  });

  const homeButton = document.getElementById("HOME");
  homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  function smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1; // Duration in milliseconds
    let startTime = null;

    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easeInOutCubic = easeInOutCubicFn(
        progress,
        startPosition,
        distance,
        duration
      );

      window.scrollTo(0, easeInOutCubic);

      if (progress < duration) {
        requestAnimationFrame(animationStep);
      }
    }

    requestAnimationFrame(animationStep);
  }

  function easeInOutCubicFn(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", () => {
    window.location.reload();
  });
});
