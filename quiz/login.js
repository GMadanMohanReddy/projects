document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button");

  submitButton.onclick = () => {
    const firstName = document.getElementById("FirstName").value;
    const secondName = document.getElementById("SecondName").value;
    const mobileNum = document.getElementById("contact").value;

    var usersData = {
      firstName: "firstName",
      secondName: "secondName",
      mobileNum: "mobileNum",
    };

    localStorage.setItem("user", JSON.stringify(usersData));

    console.log(firstName, secondName, mobileNum);
    if (firstName !== "" && mobileNum !== "" && secondName !== "") {
      window.location.href = "index.html";
    } else {
      alert("Enter the details!!");
    }

    return false;
  };

  // console.log("firstName")
});
