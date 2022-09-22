const threeLetterBtn = document.querySelector(".btn-3");
const fourLetterBtn = document.querySelector(".btn-4");
const fiveLetterBtn = document.querySelector(".btn-5");
const sixLetterBtn = document.querySelector(".btn-6");
const sevenLetterBtn = document.querySelector(".btn-7");
const eightLetterBtn = document.querySelector(".btn-8");
const nineLetterBtn = document.querySelector(".btn-9");
const tenLetterBtn = document.querySelector(".btn-10");
const elevenLetterBtn = document.querySelector(".btn-11");
const twelveLetterBtn = document.querySelector(".btn-12");
const thirtLetterBtn = document.querySelector(".btn-13");
const fourtLetterBtn = document.querySelector(".btn-14");
const fivetLetterBtn = document.querySelector(".btn-15");
const alltLetterBtn = document.querySelector(".btn-all");

const wrapper = document.getElementById("wrapper");

alltLetterBtn.addEventListener("click", (event) => {
	const isAllBtn = event.target.value === "all";
	if(!isAllBtn) {
		return;
	}
	printWords(arrayWordList);
})

wrapper.addEventListener("click", (event) => {
	const isButton = event.target.nodeName === "BUTTON";
	if(!isButton) {
		return;
	}
	if (event.target.value == "all") {return}
	let wordLengthValue = parseInt(event.target.value, 10);
	let nLettersWords = wordLengthFilter(arrayWordList, wordLengthValue);
	printWords(nLettersWords);
})

function wordLengthFilter(words, i) {
    filteredWords = words.filter(word => word.replace(/ /g,"").length == i);
    return filteredWords;
}

function printWords(words) {
    const printedWordListDiv = document.querySelector(".printedWordList");
    let text = "";
    for (let i = 0; i < words.length; i++) {
    		i == 0 ? text += words[i] + " " : text += " - " + words[i] + " ";
    }
    text += ""
    printedWordListDiv.innerHTML = text;
}

printWords(arrayWordList);



