"use strict";

// const threeLetterBtn = document.querySelector(".btn-3");
// const fourLetterBtn = document.querySelector(".btn-4");
// const fiveLetterBtn = document.querySelector(".btn-5");
// const sixLetterBtn = document.querySelector(".btn-6");
// const sevenLetterBtn = document.querySelector(".btn-7");
// const eightLetterBtn = document.querySelector(".btn-8");
// const nineLetterBtn = document.querySelector(".btn-9");
// const tenLetterBtn = document.querySelector(".btn-10");
// const elevenLetterBtn = document.querySelector(".btn-11");
// const twelveLetterBtn = document.querySelector(".btn-12");
// const thirtLetterBtn = document.querySelector(".btn-13");
// const fourtLetterBtn = document.querySelector(".btn-14");
// const fivetLetterBtn = document.querySelector(".btn-15");

const nLetterBtn = document.querySelector(".filter-btn");
const alltLetterBtn = document.querySelector(".btn-all");
const inputWord = document.querySelector(".input-field");
const wrapper = document.getElementById("wrapper");
let wordLengthValue = 0;

alltLetterBtn.addEventListener("click", (event) => {
  const isAllBtn = event.target.value === "all";
  if (!isAllBtn) {
    return;
  }
  wordLengthValue = 24;
  inputWord.value === "" ? printWords(arrayWordList) : getWord(inputWord.value);

  printWords(arrayWordList);
});

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) { return; }
  if (event.target.value == "25") {
    printWords(arrayWordList);
    return;
  }
  wordLengthValue = parseInt(event.target.value, 10);
  let nLettersWords = wordLengthFilter(arrayWordList, wordLengthValue);
  inputWord.value === "" ? printWords(nLettersWords) : getWord(inputWord.value);
});

function wordLengthFilter(words, i) {
  let filteredWords = words.filter(word => word.replace(/ /g, "").length == i);
  return filteredWords;
}

function printWords(words) {
  const printedWordListDiv = document.querySelector(".printedWordList");
  let text = "";
  for (let i = 0; i < words.length; i++) {
    i === 0 ? text += words[i] + " " : text += " - " + words[i] + " ";
  }
  text += "";
  printedWordListDiv.innerHTML = text;
}

function getWord(word = inputWord.value) {
  let tmpWordsArray = wordLengthFilter(arrayWordList, wordLengthValue);
  let guessedWord = word.split("");

  let possibleWords = [];

  tmpWordsArray.filter((w) => {
    if (w[0] === guessedWord[0]) possibleWords.push(w);
  });

  printWords(possibleWords);
}

printWords(arrayWordList);



// tmpWordsArray.filter(function(w) {
//   let splitWord = w.split("");
//   testWord: for (let i = 0; i < splitWord.length; i++) {
//     if (w[i] == guessedWord[i]) {
//       possibleWords.push(w);
//       break testWord;
//     }
//   }
// });
