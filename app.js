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

  //if checked reponse match with "reponses" const => true, if not false, => do array [true true true true true]

  radioButtons.forEach((radioButtons, index) => {
    if (radioButtons.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
    console.log(results);
  });

  showResults(results);

  /*addColors(results);*/
}

const result = document.querySelector(".result");
const support = document.querySelector(".support");
const score = document.querySelector(".score");
const answer = document.querySelector(".answer");

console.log(support);

function showResults(results) {
  const errorsNumber = results.filter((e) => e === false).length;

  switch (errorsNumber) {
    case 0:
      result.style.height = "100%";
      support.textContent = "✔️ Bravo, c'est un sans fautes ✔️";
      score.innerHTML = "<p> Score : <span>5 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";

      break;
    case 1:
      result.style.height = "100%";
      support.textContent = "✨ Tu peux mieux faire ✨";
      score.innerHTML = "<p> Score : <span>4 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 2:
      result.style.height = "100%";
      support.textContent = "👀 Il reste quelques erreurs ✨";
      score.innerHTML = "<p> Score : <span>3 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 3:
      result.style.height = "100%";
      support.textContent = "👀 Encore un effort 😭 ";
      score.innerHTML = "<p> Score : <span>2 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 4:
      result.style.height = "100%";
      support.textContent = "😭 Tu n'es pas une flèche 😭";
      score.innerHTML = "<p> Score : <span>1 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
    case 5:
      result.style.height = "100%";
      support.textContent = "👎 Tu n'as pas inventé la poudre 👎";
      score.innerHTML = "<p> Score : <span>0 / 5</span></p> ";
      answer.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez";
      break;
  }

  console.log(errorsNumber);
}

//changer couleur de l'ensemble question vert et rouge
