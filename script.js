const answer = "hamdy";

const answerArr = answer.split("");

const allBoxes = document.querySelectorAll(".char");

let numberOfTry = 1;

let activeCharchterBox = document.querySelectorAll(
  `[data-tryNumber = "${numberOfTry}"] input`
);

activeCharchterBox.forEach((box) => {
  box.maxLength = "1";
  box.classList.add("active");
});
let notActiveCharchterBoxes = document.querySelectorAll(`.char:not(.active)`);
notActiveCharchterBoxes.forEach((input) => {
  input.readOnly = true;
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
  activeCharchterBox.forEach((box) => {
    box.value = box.value.toLowerCase();
    // checks if char exists
    if (answerArr.includes(box.value)) {
      // checks if char in place
      if (answerArr.indexOf(box.value) === charBoxNumber) {
        handleCorrectCharchter(box);
      } else {
        handleNotInPlaceCharchter(box);
      }
    } else {
      handleIncorrectCharchter(box);
    }

    // goes to next input
    charBoxNumber++;
  });

  // judge after try is checked if player won or lost
  handleLoseOrWin();

  // goes to next try
  numberOfTry++;

  // updating the selector to go to the next try
  activeCharchterBox = document.querySelectorAll(
    `[data-tryNumber = "${numberOfTry}"] input`
  );

  activeCharchterBox.forEach((box) => {
    box.maxLength = "1";
    box.classList.add("active");
    box.readOnly = false;
  });

  // updating the unactive inputs
  notActiveCharchterBoxes = document.querySelectorAll(`.char:not(.active)`);

  notActiveCharchterBoxes.forEach((input) => {
    input.readOnly = true;
  });
}

function handleCorrectCharchter(box) {
  // giving the box the in place style
  box.classList.add("in-place-style");
  box.style.border = "none";

  // making the try unchangable
  box.disabled = true;

  inPlaceCounter++;
}

function handleNotInPlaceCharchter(box) {
  // giving the box the not in place style
  box.classList.add("not-in-place-style");
  box.style.border = "none";

  // making the try unchangable
  box.disabled = true;
}

function handleIncorrectCharchter(box) {
  // giving the box wrong style
  box.classList.add("wrong-style");
  box.style.border = "none";

  // making the try unchangable
  box.disabled = true;
}

function handleLoseOrWin() {
  if (inPlaceCounter === answer.length) {
    document.querySelector(".win").style.display = "flex";
    allBoxes.forEach((input) => {
      input.disabled = true;
    });
  } else if (inPlaceCounter !== answer.length && numberOfTry === 5) {
    document.querySelector(".lose").style.display = "flex";
  }
}

const checkWordBtn = document.getElementById("check-word-btn");

checkWordBtn.addEventListener("click", tryChecker);
