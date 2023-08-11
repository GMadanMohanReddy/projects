document.addEventListener("DOMContentLoaded", () => {
  const mathQuestions = {
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

  const length = Object.keys(mathQuestions).length;
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

    questionElement.innerHTML = mathQuestions[questionId].question;
    for (var i = 1; i <= 4; i++) {
      const option = document.getElementById(`option${i}`);
      option.value = mathQuestions[questionId].options[i - 1];
      const spanElement = document.getElementById(`optionS${i}`);
      spanElement.innerHTML = mathQuestions[questionId].options[i - 1];
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
        mathQuestions[questionId].chosen_option = radios[i].value;

        break;
      } else {
        mathQuestions[questionId].chosen_option = null;
      }
    }
    console.log(mathQuestions[questionId].chosen_option);
    handleNext();

    if (mathQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (mathQuestions[questionId].chosen_option === radios[i].value) {
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
        mathQuestions[questionId].chosen_option = radios[i].value;
        break;
      } else {
        mathQuestions[questionId].chosen_option = null;
      }
    }
    // selectionHandler(questionId);
    // chosenOptionHandler(questionId);
    handleBack();

    if (mathQuestions[questionId].chosen_option !== null) {
      for (i = 0; i < 4; i++) {
        if (mathQuestions[questionId].chosen_option === radios[i].value) {
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
      if (mathQuestions[i].answer === mathQuestions[i].chosen_option) {
        score = score + 10;
      }
      if (mathQuestions[i].chosen_option == null) {
        count++;
      }
      if (
        mathQuestions[i].chosen_option != null &&
        mathQuestions[i].answer !== mathQuestions[i].chosen_option
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

  // function selectionHandler(questionId) {
  //   for (const radioButton of radios) {
  //     radioButton.addEventListener("change", () => {
  //       mathQuestions[questionId].chosen_option = radioButton.value;
  //       console.log(
  //         "your answer for" +
  //           `${questionId}` +
  //           "is" +
  //           `${mathQuestions[questionId].chosen_option}`
  //       );
  //     });
  //   }
  // }

  // function chosenOptionHandler(questionId) {
  // }

  // for (const radioButton of radios) {
  //   radioButton.addEventListener("change", selectionHandler(questionId));
  //   console.log(mathQuestions[questionId].chosen_option);
  // }

  // function selectionHandler() {
  //   if (this.checked) {
  //     mathQuestions[questionId].chosen_option = this.value;
  //     console.log(
  //       "chosen_option is :" + `${mathQuestions[questionId].chosen_option}`
  //     );
  //   }
  // }

  //  function scoreHandler() {}

  // radios.addEventListener("change", selectionHandler());

  // function selectionHandler() {
  //   for (const radioButton of radios) {
  //     radioButton.addEventListener("change",()=>{

  //       if (radioButton.checked) {
  //         mathQuestions[questionId].chosen_option = radioButton.value;
  //       }

  //     })

  //   }
  // }

  // function checkboxHandler() {

  // }
  /*this consts stores the element name*/
  // const valueOne = document.getElementById("option1");
  // const valueTwo = document.getElementById("option2");
  // const valueThree = document.getElementById("option3");
  // const valueFour = document.getElementById("option4");
  // const optionOne = document.getElementById("optionS1");
  // const optionTwo = document.getElementById("optionS2");
  // const optionThree = document.getElementById("optionS3");
  // const optionFour = document.getElementById("optionS4");
  // const next = document.getElementById("next");
  // const back = document.getElementById("back");
  // const radioButtons = document.getElementsByName("option");
  // let currentQuestion = 0;

  // let count = 0;

  // questionElement.innerHTML = mathQuestions[0].question;
  // optionOne.innerHTML = mathQuestions[0].options[0];
  // optionTwo.innerHTML = mathQuestions[0].options[1];
  // optionThree.innerHTML = mathQuestions[0].options[2];
  // optionFour.innerHTML = mathQuestions[0].options[3];
  // valueOne.value = mathQuestions[0].options[0];
  // valueTwo.value = mathQuestions[0].options[1];
  // valueThree.value = mathQuestions[0].options[2];
  // valueFour.value = mathQuestions[0].options[3];

  // back.disabled = true;
  // submit.hidden = true;

  // next.addEventListener("click",()=>{

  //     currentQuestion++;

  //     questionElement.innerHTML = mathQuestions[currentQuestion].question;
  //     optionOne.innerHTML = mathQuestions[currentQuestion].options[0];
  //     optionTwo.innerHTML = mathQuestions[currentQuestion].options[1];
  //     optionThree.innerHTML = mathQuestions[currentQuestion].options[2];
  //     optionFour.innerHTML = mathQuestions[currentQuestion].options[3];

  //     valueOne.value = mathQuestions[currentQuestion].options[0];
  //     valueTwo.value = mathQuestions[currentQuestion].options[1];
  //     valueThree.value = mathQuestions[currentQuestion].options[2];
  //     valueFour.value = mathQuestions[currentQuestion].options[3];

  //     if(currentQuestion = length(mathQuestions) - 1){

  //         next.disabled = true;
  //         submit.hidden = false;

  //     }

  // })

  /*next.addEventListener("click",()=>{
        
        if (currentQuestion < 3){


            alert("answer for last question is:" + mathQuestions[currentQuestion].answer)


            currentQuestion++;
            if (0< currentQuestion && currentQuestion-1 < 3){

                


            }else{
                alert("YOU COMPLETED THE QUIZ SUCCESSFULLY!!");
                next.hidden = true;
            }
            
        }        
    });


    back.addEventListener("click",()=>{

        currentQuestion--;
        if(currentQuestion <0){

            back.disabled = true;
            alert("YOU'RE AT THE START OF THE QUIZ!!");
            
            
        }else{

            next.hidden=false;

            questionElement.innerHTML = mathQuestions[currentQuestion-1].question;
            optionOne.innerHTML = mathQuestions[currentQuestion-1].options[0];
            optionTwo.innerHTML = mathQuestions[currentQuestion-1].options[1];
            optionThree.innerHTML = mathQuestions[currentQuestion-1].options[2];
            optionFour.innerHTML = mathQuestions[currentQuestion-1].options[3];

            valueOne.value = mathQuestions[currentQuestion-1].options[0];
            valueTwo.value = mathQuestions[currentQuestion-1].options[1];
            valueThree.value = mathQuestions[currentQuestion-1].options[2];
            valueFour.value = mathQuestions[currentQuestion-1].options[3];
        }
    });

   /* const labelValue = document.getElementById("option2").value;
    const labelInner =
    console.log(labelValue)

    /*function scoreCalc(){
        const selectedOption = document.querySelector("input[name='option']:checked").val;
        const selectedValue = selectedOption
    }
    /*next.addEventListener("click",()=>{

       
        
    

    });*/

  /*function showQuestions(){

        for( ;currentQuestion < length(mathQuestions) ; currentQuestion++){
        
           
            }
    
            count++;
    
    
    
    
        }
    }
    showQuestions();
    */
});
