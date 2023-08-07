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

  let questionId = 0;
  const questionElement = document.getElementById("Que");
  function questionContainer(questionId) {
    if (questionId === 0) {
      backButton.disabled = true;
    } else {
      backButton.disabled = false;
    }
    if (questionId === length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
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

  function handleNext() {
    questionId += 1;
    questionContainer(questionId);
  }

  function handleBack() {
    questionId -= 1;
    questionContainer(questionId);
  }

  nextButton.addEventListener("click", () => {
    handleNext();
  });

  backButton.addEventListener("click", () => {
    handleBack();
  });

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

  // let score = 0;
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
