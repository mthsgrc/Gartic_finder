"use strict";

let arrayWordList = geralWordList;
printWords(arrayWordList);

// const nLetterBtn = document.querySelector(".filter-btn");
// const alltLetterBtn = document.querySelector(".btn-all");
const inputWord = document.querySelector(".input-field");
const wrapper = document.getElementById("wrapper");

let wordLengthValue = 0;

wordCopyListener();
// wordOfList.addEventListener("click", () => {
// 	copy(event.target.value);
// });


inputWord.addEventListener("keyup", () => {
	wordLengthValue = inputWord.value.length;
	getWord()
})

wrapper.addEventListener("click", () => {
	const isButton = event.target.nodeName === "BUTTON";
	if (!isButton) {
		return;
	}

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
}

function clearInput(){
	inputWord.value = "";
	inputWord.focus();
	printWords(arrayWordList);
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
		word.addEventListener("mouseover", () => word.setAttribute("class": "highlight-word");
		word.addEventListener("mouseout", () => word.removeAttribute("class": "highlight-word ") key: "value", );
	}); 


async function copy(text) {
	text = await navigator.clipboard.writeText(text);
}

wordCopyListener();
wordBlink();