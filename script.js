///////////// GLOBAL VARIABLES/////////////

const allCards = document.querySelectorAll('.cardBack')
const button = document.getElementById('againButton')
const messageSpace = document.querySelector('.messageSpace')

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

let colorOne
let colorTwo
let cardOne
let cardTwo
let selectedColors = []
let totalMatches = 0
const shuffledColors = []

///////////GAME FUNCTIONS///////////

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

let checkForMatch = () => {
  if (selectedColors.length === 2) {
    if (selectedColors[0] === selectedColors[1]) {
      cardOne = null
      cardTwo = null
      colorOne = null
      colorTwo = null
      selectedColors = []
      messageSpace.innerText = "It's a match!"
      totalMatches += 1
      if (totalMatches === 4) {
        messageSpace.innerText = 'Game over!'
      }
      return
    } else {
      setTimeout(() => {
        selectedColors = []
        cardOne.classList.remove('flipped')
        cardOne.classList.toggle(colorOne)
        cardOne.classList.add('cardBack')
        cardTwo.classList.remove('flipped')
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

//////////////EVENT LISTENERS////////////////

const addFlippedClass = (e) => {
  if (cardTwo) {
    return
  }
  e.target.classList.add('flipped')
}

allCards.forEach((card) => {
  card.addEventListener('click', changeDisplay)
})

allCards.forEach((card) => {
  card.addEventListener('click', addFlippedClass)
})

button.addEventListener('click', () => location.reload())
