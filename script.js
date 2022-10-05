//////////////////// Global Variables////////////////////

const allCards = document.querySelectorAll('.cardBack')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const button = document.getElementById('againButton')

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

let checkForMatch = () => {
  if (selectedColors.length === 2) {
    if (selectedColors[0] === selectedColors[1]) {
      console.log("It's a match!")
      selectedColors = []
      cardOne = null
      cardTwo = null
      colorOne = null
      colorTwo = null
      return
    } else {
      console.log('not a match')
      setTimeout(() => {
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
      }, 2000)
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
  const randomIndex = Math.floor(Math.random() * colors.length)
  if (!cardOne) {
    cardOne = e.target
    colorOne = colors[randomIndex]
    cardOne.classList.toggle(colorOne)
    selectedColors.push(colorOne)
  } else {
    cardTwo = e.target
    colorTwo = colors[randomIndex]
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
// declaring a second match
// finish play game function

//can show one color more than twice (i.e. blue square can show up 3 times)
