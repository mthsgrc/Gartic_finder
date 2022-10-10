"use strict";

let arrayWordList = geralWords;
printWords(arrayWordList);

const inputWord = document.querySelector(".input-field");
const lengthBtnsWrapper = document.getElementById("lengthBtnsWrapper");
const clearBtn = document.querySelector(".clr-btn");
const themeBtnsWrapper = document.querySelector(".themeBtnsWrapper");
let titleUpdate = document.querySelector(".titleDisplay")

let wordLengthValue = 0;

clearBtn.addEventListener("click", clearInput);
wordCopyListener();

inputWord.addEventListener("keyup", () => {
  wordLengthValue = inputWord.value.length;
  getWord();
});

themeBtnsWrapper.addEventListener("click", () => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) { return; }

  switch (event.target.className) {
    case "geralWords":
      arrayWordList = geralWords;
      break;
    case "alimentosWords":
      arrayWordList = alimentosWords;
      break;
  }
  titleUpdate.innerHTML = `${event.target.innerHTML}`
  printWords(arrayWordList);
  wordCopyListener();
});

lengthBtnsWrapper.addEventListener("click", () => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) { return; }

  if (event.target.value == "all") {
    printWords(arrayWordList);
    wordCopyListener();
    return;
  }
  wordLengthValue = parseInt(event.target.value, 10);
  let nLettersWords = wordLengthFilter(arrayWordList, wordLengthValue);
  if (inputWord.value === "") {
    printWords(nLettersWords);
    wordCopyListener();
  } else {
    getWord();
  }
});

function wordLengthFilter(words, i) {
  let filteredWords = words.filter(word => word.replace(/ /g, "").length == i);
  return filteredWords;
}

function getWord(word = inputWord.value) {
  let tmpWordsArray = wordLengthFilter(arrayWordList, wordLengthValue);
  let guessedWord = word.split("");

  let possibleWords = [];

  tmpWordsArray.filter((w) => {
    let tmpRegex = guessedWord.join("").replace(/ /gi, ".");
    let regexStr = new RegExp(`^${tmpRegex}`, 'g');

    if (w.match(regexStr) !== null) possibleWords.push(w);
  });

  printWords(possibleWords);
  wordCopyListener();
}

function printWords(words) {
  const printedWordListDiv = document.querySelector(".printedWordList");
  let text = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      text += `<span class="word-of-list">${words[i]}</span>`;
    } else {
      text += ` - <span class="word-of-list">${words[i]}</span>`;
    }
  }
  text += "";
  printedWordListDiv.innerHTML = text;
  wordBlink();
}

function clearInput() {
  inputWord.value = "";
  inputWord.focus();
  printWords(arrayWordList);
  wordCopyListener();
}

function wordCopyListener() {
  let wordOfList = document.querySelectorAll(".word-of-list");
  wordOfList.forEach((word) => {
    word.addEventListener("click", () => copy(word.textContent));
  });
}


function wordBlink() {
  let wordOfList = document.querySelectorAll(".word-of-list");

  wordOfList.forEach((word) => {
    word.addEventListener("mouseover", (e) => {
      e.target.setAttribute("class", "highlighted");
    });
    word.addEventListener("mouseout", (e) => {
      e.target.removeAttribute("class");
    });
  });
}


async function copy(text) {
  text = await navigator.clipboard.writeText(text);
}


wordCopyListener();
wordBlink();

// e.targer.style.backgroundColor = rgba(50,. 50, 50, 0.5)
