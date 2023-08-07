function login() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (name !== "") {
        const loginForm = document.getElementById("login-form");
        const greeting = document.getElementById("greeting");
        loginForm.style.display = "none";
        greeting.textContent = `Hello, ${name}!`;
        greeting.style.display = "block";
    }
}

function showQuiz(quizType) {
    const quizContainer = document.querySelector(".quiz-container");
    const quizContent = document.getElementById("quiz-content");
    quizContainer.style.display = "none";
    quizContent.style.display = "block";

    // Here, you can dynamically load the questions for each quiz type from a data source (e.g., JSON)
    // For simplicity, I'll just show a placeholder question for each quiz type.

    const questions = {
        math: {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        physics: {
            question: "What is the SI unit of force?",
            options: ["Newton", "Watt", "Joule", "Volt"],
            answer: "Newton"
        },
        chemistry: {
            question: "What is the chemical symbol of water?",
            options: ["H2O2", "H2O", "CO2", "O2"],
            answer: "H2O"
        },
        python: {
            question: "What does 'print()' do in Python?",
            options: ["Reads input from the user", "Displays output to the screen", "Adds two numbers", "Imports a module"],
            answer: "Displays output to the screen"
        },
        clang: {
            question: "Which data type is used to store a single character in C?",
            options: ["char", "int", "float", "string"],
            answer: "char"
        }
    };

    const quizData = questions[quizType];

    const quizContentElement = document.getElementById("quiz-content");
    quizContentElement.innerHTML = `
      <div class="quiz-question">${quizData.question}</div>
      <div class="quiz-options">
        ${quizData.options.map(option => `<div class="quiz-option">${option}</div>`).join("")}
      </div>
    `;
}
