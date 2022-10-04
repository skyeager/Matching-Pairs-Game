//////////////////// Global Variables////////////////////

const allCards = document.querySelectorAll('.cardBack')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
console.log(allCards)

const colors = ['red', 'red', 'blue', 'blue']

const changeDisplay = (e) => {
  const cardPick = e.target
  if (cardPick.classList.contains('flipped')) {
    return
  }
  const randomIndex = Math.floor(Math.random() * colors.length)
  const color = colors[randomIndex]
  colors.splice(randomIndex, 1)
  cardPick.classList.toggle(color)
}

//////////////Event Listeners////////////////

allCards.forEach((card) => {
  card.addEventListener('click', changeDisplay)
})

//*****LOGIC TO IDENTIFY FLIPPED CARD*****
const addFlippedClass = (e) => {
  e.target.classList.add('flipped')
}
allCards.forEach((card) => {
  card.addEventListener('click', addFlippedClass)
})

//******WELCOME BUTTON*****//////
// const letsPlay=document.querySelector('welcomeButton')
// letsPlay.addEventListener('click', )

/////////////////////Game Functions////////////////

// let playGame = () => {
//   if (this.class === 'flipped') {
//   }
// }
// if (lastCardPicked === currentCardPicked) {

const randomIndex = Math.floor(Math.random() * colors.length)
const color = colors[randomIndex]

let playGame = () => {
  if (color === color) {
    alert("It's a match!")
  }
}
