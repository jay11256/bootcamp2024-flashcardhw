const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    let card_p = document.getElementById("card-content")
    let text = ""
    if (showingTerm === true) {
        text = flashcards[currentIndex].term
    } else {
        text = flashcards[currentIndex].definition
    }
    card_p.innerText = text
}

// The rest of the code you will write is apart of event listeners

// Card Clicking
let card_div = document.getElementById("flashcard")
card_div.addEventListener("click", ()=> {
    console.log("card clicked")
    showingTerm = !showingTerm
    displayCard()
})

// Previous Button
let prev_button = document.getElementById("prev-btn")
prev_button.addEventListener("click", ()=> {
    console.log("previous button clicked")
    currentIndex -= 1
    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1
    }
    showingTerm = true
    displayCard()
})

// Next Button
let next_button = document.getElementById("next-btn")
next_button.addEventListener("click", ()=> {
    console.log("next button clicked")
    currentIndex += 1
    if (currentIndex >= flashcards.length) {
        currentIndex = 0
    }
    showingTerm = true
    displayCard()
})

// Add Card Button
let add_button = document.getElementById("add-card-btn")
add_button.addEventListener("click", ()=> {
    console.log("add button clicked")
    let term = document.getElementById("new-term").value
    let definition = document.getElementById("new-definition").value
    flashcards.push({term: term, definition: definition})
    displayCard()
})

// For fun :) remove last card button
let remove_button = document.getElementById("remove-card-btn")
remove_button.addEventListener("click", ()=> {
    console.log("remove button clicked")
    let card_p = document.getElementById("card-content")
    flashcards.pop()
    if (flashcards.length === 0) {
        card_p.innerText = "Empty :("
    }
})

// This line will display the card when the page is refreshed
window.onload = displayCard;
