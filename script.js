const answer = "hamdy";
const answerArr = answer.split("");
console.log(answerArr);
const charchterBox = document.querySelectorAll(".try1 input");
console.log(charchterBox[0].data);

// limiting N of chars
const inputLimit = 1;
charchterBox.forEach((box) => {
  box.maxLength = "1";
});

function checkBoxes() {
  // repeating the function until all chars are checked
  for (let i = 0; i < charchterBox.length; i++) {
    // checks if char exists
    if (answerArr.includes(charchterBox[i].value)) {
      // checks if char in place
      if (answerArr.indexOf(charchterBox[i].value) + 1 === 1) {
        // giving the box the in place style
        charchterBox[i].classList.add("in-place-style");
        charchterBox[i].style.border = "none";

        // making the try unchangable
        charchterBox[i].disabled = true;
      } else {
        // giving the box the not in place style
        charchterBox[i].classList.add("not-in-place-style");
        charchterBox[i].style.border = "none";

        // making the try unchangable
        charchterBox[i].disabled = true;
      }
    } else {
      // giving the box wrong style
      charchterBox[i].classList.add("wrong-style");
      charchterBox[i].style.border = "none";

      // making the try unchangable
      charchterBox[i].disabled = true;
    }
  }
}

const checkWordBtn = document.getElementById("check-word-btn");

checkWordBtn.addEventListener("click", checkBoxes);
