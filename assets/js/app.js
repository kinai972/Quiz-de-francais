/* --------------------------- */
/*       DOM's elements        */
/* --------------------------- */
const form = document.querySelector("form");
const questions = document.querySelectorAll(".question");
const choices = document.querySelectorAll(".choices");
const rightAnwsers = [
  "auTemps",
  "sEnSontAlles",
  "ontReussi",
  "assure-toiEst",
  "a",
];
const score = document.querySelector(".result");
const comment = document.querySelector(".comment");

/* ------------------------------------------ */
/*    Arrays to get all the user's awnsers    */
/* ------------------------------------------ */
let userAnwsers = [];
let checkAwsers = [];

/* ------------------------------------------ */
/*      Just to improve user's experiment     */
/* ------------------------------------------ */
const colors = {
  success: "#90ee90",
  fail: "#ffb8b8",
};
const effects = {
  success: "success",
  fail: "fail",
};

/* --------------------------------- */
/*             Submission            */
/* --------------------------------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Getting user's anwsers
  for (let i = 1; i <= questions.length; i++) {
    userAnwsers.push(
      document.querySelector(`option[name=q${i}]:checked`).value
    );
  }

  //   Checking the anwsers and make effects
  for (let i = 0; i < questions.length; i++) {
    if (userAnwsers[i] === rightAnwsers[i]) {
      checkAwsers.push(true);
      questions[i].style.background = `${colors["success"]}`;
      choices[i].style.background = `${colors["success"]}`;
      questions[i].classList.add(`${effects["success"]}`);
    } else {
      questions[i].style.background = `${colors["fail"]}`;
      choices[i].style.background = `${colors["fail"]}`;
      questions[i].classList.add(`${effects["fail"]}`);
    }

    // Delay to remove the effect classes
    setTimeout(() => {
      questions[i].classList.remove(`${effects["success"]}`);
    }, 500);
    setTimeout(() => {
      questions[i].classList.remove(`${effects["fail"]}`);
    }, 500);
  }

  //   The number of the correct anwsers
  let mark = checkAwsers.length;

  //   Getting the score and the comments
  comment.innerText = remark(mark);
  score.innerText = `${mark}/${questions.length}`;

  //   Resetting arrays
  userAnwsers = [];
  checkAwsers = [];
});

/* --------------------------------- */
/*             Functions             */
/* --------------------------------- */
// Comments depending on the mark
function remark(number) {
  switch (number) {
    case 0:
      return "Il va falloir réviser sérieusement !";
      break;

    case 1:
      return "Peut mieux faire !";
      break;

    case 2:
      return "Il reste quelques erreurs !";
      break;

    case 3:
      return "Pas mal !";
      break;

    case 4:
      return "Vous y êtes presque !";
      break;

    case 5:
      return "Alors là... Bravo !";
      break;

    default:
      break;
  }
}
