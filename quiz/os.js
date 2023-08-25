document.addEventListener("DOMContentLoaded", () => {
  const osQuestions = {
    0: {
      question:
        "In Operating Systems, which of the following is/are CPU scheduling algorithms ?",
      options: [
        "Priority",
        "Round Robin",
        "Shortest Job First",
        "All of the Above",
      ],
      answer: "All of the Above",
      chosen_option: null,
    },
    1: {
      question: "What is the main function of the command interpreter ?",
      options: [
        "to provide the interface between the API and application program",
        "to handle the files in the operating system",
        " to get and execute the next user-specified command",
        "none of the mentioned",
      ],
      answer: "To get and execute the next user-specified command",
      chosen_option: null,
    },
    2: {
      question:
        "To access the services of the operating system, the interface is provided by the ___________",
      options: [" Library", "System calls", "Assembly instructions", " API"],
      answer: "System calls",
      chosen_option: null,
    },
    3: {
      question: "CPU scheduling is the basis of ___________ ?",
      options: [
        "multiprogramming operating systems",
        "larger memory sized systems",
        "multiprocessor systems",
        "none of the mentioned",
      ],
      answer: "multiprogramming operating systems",
      chosen_option: null,
    },
  };

  const length = Object.keys(osQuestions).length;
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

    questionElement.innerHTML = osQuestions[questionId].question;
    for (var i = 1; i <= 4; i++) {
      const option = document.getElementById(`option${i}`);
      option.value = osQuestions[questionId].options[i - 1];
      const spanElement = document.getElementById(`optionS${i}`);
      spanElement.innerHTML = osQuestions[questionId].options[i - 1];
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
        osQuestions[questionId].chosen_option = radios[i].value;

        break;
      } else {
        osQuestions[questionId].chosen_option = null;
      }
    }
    console.log(osQuestions[questionId].chosen_option);
    handleNext();

    if (osQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (osQuestions[questionId].chosen_option === radios[i].value) {
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
        osQuestions[questionId].chosen_option = radios[i].value;
        break;
      } else {
        osQuestions[questionId].chosen_option = null;
      }
    }
    // selectionHandler(questionId);
    // chosenOptionHandler(questionId);
    handleBack();

    if (osQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (osQuestions[questionId].chosen_option === radios[i].value) {
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
      if (osQuestions[i].answer === osQuestions[i].chosen_option) {
        score = score + 10;
      }
      if (osQuestions[i].chosen_option == null) {
        count++;
      }
      if (
        osQuestions[i].chosen_option != null &&
        osQuestions[i].answer !== osQuestions[i].chosen_option
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
