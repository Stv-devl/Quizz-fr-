const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

//Test the results.
//Add a message in the end block based on the results.
//Add colors according to the results.
//Manage the possibility of a correction attempt by the user (change a value and re-validate).

const inputs = document.querySelectorAll("input");
const questions = document.querySelectorAll(".question-answer");
const form = document.querySelector("form");
const napoleon = document.getElementById("napoleon");

//at submit, prevent default and start result() fonction
form.addEventListener("submit", handleForm);

//fonction => prevent default
function handleForm(e) {
  e.preventDefault();

  const results = [];
  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  //if checked reponse match with "reponses" const => true, if not false, => do array with true and false []
  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });

  showResults(results);
  addColors(results);
}

const resultContainer = document.querySelector(".result");
const resultText = document.querySelector(".support");
const score = document.querySelector(".score");
const answer = document.querySelector(".answer");

//show result
function showResults(result) {
  const errorsNumber = result.filter((e) => e === false).length;

  switch (errorsNumber) {
    case 0:
      resultContainer.style.height = "100%";
      resultText.textContent = "✔️ Bravo, c'est un sans fautes ✔️";
      score.innerHTML = "<p> Score : <span>5 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";

      break;
    case 1:
      resultContainer.style.height = "100%";
      resultText.textContent = "✨ Tu peux mieux faire ✨";
      score.innerHTML = "<p> Score : <span>4 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 2:
      resultContainer.style.height = "100%";
      resultText.textContent = "👀 Il reste quelques erreurs ✨";
      score.innerHTML = "<p> Score : <span>3 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 3:
      resultContainer.style.height = "100%";
      resultText.textContent = "👀 Encore un effort 😭 ";
      score.innerHTML = "<p> Score : <span>2 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 4:
      resultContainer.style.height = "100%";
      resultText.textContent = "😭 Tu n'es pas une flèche 😭";
      score.innerHTML = "<p> Score : <span>1 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 5:
      resultContainer.style.height = "100%";
      resultText.textContent = "👎 Tu n'as pas inventé la poudre 👎";
      score.innerHTML = "<p> Score : <span>0 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
  }
}

const questionContainer = document.querySelectorAll(".question-container");

//show result color
function addColors(result) {
  result.forEach((response, index) => {
    if (result[index]) {
      questionContainer[index].style.backgroundImage =
        "linear-gradient(to right, #a8ff78, #78ffd6)";
    } else {
      questionContainer[index].style.backgroundImage =
        "linear-gradient(to right, #f5567b, #fd674c)";
    }
  });
}
const radioInputs = document.querySelectorAll("input[type='radio']");

radioInputs.forEach((radioInput) =>
  radioInput.addEventListener("input", resetColor)
);

//reset color when we chose an other input
function resetColor(e) {
  const index = e.target.getAttribute("name").slice(1) - 1;
  const parentQuestionContainer = questionContainer[index];

  parentQuestionContainer.style.backgroundColor = "#f1f1f1";
  parentQuestionContainer.style.backgroundImage = "none";
}
