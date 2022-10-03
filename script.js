//////////////////// Global Variables////////////////////

const card = document.querySelector('.card')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
// let cardFront = document.querySelectorAll('.front')
// let cardBack = document.querySelectorAll('.back')
// let cardRed = document

let changeDisplay = () => {
  back.style.display = 'none'
  front.style.display = 'block'
}

//////////////Event Listeners////////////////

//will need to change this once figure out how to make .back display instead of .card in CSS
card.addEventListener('click', changeDisplay)

// card.addEventListener('click')

// //adding class of .flipped to card that is clicked
// card.addEventListener('click', document.classList.add('.flippped'))
//will later need to remove .flipped class?

/////////////////////Game Functions////////////////
