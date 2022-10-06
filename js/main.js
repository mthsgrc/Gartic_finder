"use strict";

// const nLetterBtn = document.querySelector(".filter-btn");
// const alltLetterBtn = document.querySelector(".btn-all");
const inputWord = document.querySelector(".input-field");
const wrapper = document.getElementById("wrapper");
let wordLengthValue = 0;

wrapper.addEventListener("click", () => {
	const isButton = event.target.nodeName === "BUTTON";
	if (!isButton) {
		return;
	}

	if (event.target.value == "all") {
		printWords(arrayWordList);
		return;
	}
	wordLengthValue = parseInt(event.target.value, 10);
	let nLettersWords = wordLengthFilter(arrayWordList, wordLengthValue);
	if (inputWord.value === "") {
		printWords(nLettersWords);
	} else {
		getWord(inputWord.value);
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
}

printWords(arrayWordList);