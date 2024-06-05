const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

let words = ["Awesome", "Cool", "Life", "Fun", "Famous"];

const typingDelay = 200;
const erasingDelay = 100;
const newLetterDelay = 2000; // Delay between current and next word
let wordIndex = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[wordIndex].length) {
        typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}
