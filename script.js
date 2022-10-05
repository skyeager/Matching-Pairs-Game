//////////////////// Global Variables////////////////////

const allCards = document.querySelectorAll('.cardBack')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const button = document.getElementById('againButton')
const messageSpace = document.querySelector('.messageSpace')

let gameOver = false

const colors = [
  'red',
  'red',
  'blue',
  'blue',
  'purple',
  'purple',
  'green',
  'green'
]

const shuffledColors = []

const shuffle = () => {
  for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random() * colors.length)
    shuffledColors.push(colors[random])
    colors.splice(random, 1)
  }
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].setAttribute('color', shuffledColors[i])
  }
}
shuffle()

let colorOne
let colorTwo
let cardOne
let cardTwo
let selectedColors = []
let totalMatches = 0

let checkForMatch = () => {
  if (selectedColors.length === 2) {
    if (selectedColors[0] === selectedColors[1]) {
      console.log("It's a match!")
      // cardOne.classList.toggle('flipped')
      // cardTwo.classList.toggle('flipped')
      // cardOne.classList.toggle(colorOne)
      // cardTwo.classList.toggle(colorTwo)
      cardOne = null
      cardTwo = null
      colorOne = null
      colorTwo = null
      selectedColors = []
      messageSpace.innerText = "It's a match!"
      console.log(messageSpace.innerText)
      totalMatches += 1
      if (totalMatches === 4) {
        messageSpace.innerText = 'Game over!'
      }
      return
    } else {
      console.log('not a match')
      setTimeout(() => {
        selectedColors = []
        cardOne.classList.toggle('flipped')
        cardOne.classList.toggle(colorOne)
        cardOne.classList.add('cardBack')
        cardTwo.classList.toggle('flipped')
        cardTwo.classList.toggle(colorTwo)
        cardTwo.classList.add('cardBack')
        selectedColors = []
        cardOne = null
        cardTwo = null
        colorOne = null
        colorTwo = null
        messageSpace.innerText = 'Not a match! Try again!'
      }, 1000)
      return
    }
  }
}

const changeDisplay = (e) => {
  if (e.target.classList.contains('flipped')) {
    return
  }
  if (cardTwo) {
    return
  }
  if (!cardOne) {
    cardOne = e.target
    colorOne = e.target.getAttribute('color')
    cardOne.classList.toggle(colorOne)
    selectedColors.push(colorOne)
  } else {
    cardTwo = e.target
    colorTwo = e.target.getAttribute('color')
    cardTwo.classList.toggle(colorTwo)
    selectedColors.push(colorTwo)
    checkForMatch()
  }
}

//////////////Event Listeners////////////////
const addFlippedClass = (e) => {
  e.target.classList.add('flipped')
}

allCards.forEach((card) => {
  card.addEventListener('click', changeDisplay)
})

allCards.forEach((card) => {
  card.addEventListener('click', addFlippedClass)
})

button.addEventListener('click', () => location.reload())

/////////////////////Game Functions////////////////
// TO DO

//tonight:
//message board
//game over for when all matches found
//understand code--study it!

//tomorrow:
//timer
