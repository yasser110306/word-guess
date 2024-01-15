const answer = "hamdy";
const answerArr = answer.split("");
let numberOfTry = 1;
let charchterBox = document.querySelectorAll(
  `[data-tryNumber = "${numberOfTry}"] input`
);

// limiting N of chars
charchterBox.forEach((box) => {
  box.maxLength = "1";
});

function tryChecker() {
  if (numberOfTry <= 5) {
    checkBoxes();
  }
}
// counter to clac number of right chars
let inPlaceCounter = 0;

function checkBoxes() {
  let charBoxNumber = 0;
  // repeating the function until all chars are checked
  charchterBox.forEach((box) => {
    // checks if char exists
    if (answerArr.includes(box.value)) {
      // checks if char in place
      if (answerArr.indexOf(box.value) === charBoxNumber) {
        // giving the box the in place style
        box.classList.add("in-place-style");
        box.style.border = "none";

        // making the try unchangable
        box.disabled = true;

        inPlaceCounter++;
      } else {
        // giving the box the not in place style
        box.classList.add("not-in-place-style");
        box.style.border = "none";

        // making the try unchangable
        box.disabled = true;
      }
    } else {
      // giving the box wrong style
      box.classList.add("wrong-style");
      box.style.border = "none";

      // making the try unchangable
      box.disabled = true;
    }

    // goes to next input
    charBoxNumber++;
  });

  // judge after try is checked if player won or lost
  loseOrWin();

  // goes to next try
  numberOfTry++;
  console.log(numberOfTry);

  // updating the selector to go to the next try
  charchterBox = document.querySelectorAll(
    `[data-tryNumber = "${numberOfTry}"] input`
  );
}

function loseOrWin() {
  if (inPlaceCounter === answer.length) {
    document.querySelector(".win").style.display = "flex";
  } else if (inPlaceCounter !== answer.length && numberOfTry === 5) {
    document.querySelector(".lose").style.display = "flex";
  }
}

const checkWordBtn = document.getElementById("check-word-btn");

checkWordBtn.addEventListener("click", tryChecker);
