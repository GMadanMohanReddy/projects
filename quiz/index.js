/*alert("hi" + " "+ prompt("enter your name") + "!!" )*/
document.addEventListener("DOMContentLoaded", () => {
  const refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", () => {
    window.location.reload();
  });
  const mathQuiz = document.getElementById("math");
  mathQuiz.addEventListener("click", () => {
    window.location.href = "math.html";
  });

  const phyQuiz = document.getElementById("physics");
  phyQuiz.addEventListener("click", () => {
    window.location.href = "phy.html";
  });
  // function mathQuiz() {
  //   window.location.href = "math.html";
  // }
  const chemQuiz = document.getElementById("chemistry");
  chemQuiz.addEventListener("click", () => {
    window.location.href = "chem.html";
  });

  const clangQuiz = document.getElementById("c_lang");
  clangQuiz.addEventListener("click", () => {
    window.location.href = "clang.html";
  });

  const dbmsQuiz = document.getElementById("dbms");
  dbmsQuiz.addEventListener("click", () => {
    window.location.href = "dbms.html";
  });

  const osQuiz = document.getElementById("os");
  osQuiz.addEventListener("click", () => {
    window.location.href = "os.html";
  });
});
