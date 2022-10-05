//////////////////// Global Variables////////////////////

const allCards = document.querySelectorAll('.cardBack')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const button = document.getElementById('againButton')

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

const shuffledColors = () => {
  Math.floor(Math.random() * colors.length)
}

shuffledColors[0] = document.body.children[1].children[0]
shuffledColors[1] = document.body.children[1].children[1]
shuffledColors[2] = document.body.children[1].children[2]
shuffledColors[2] = document.body.children[1].children[3]
shuffledColors[4] = document.body.children[1].children[4]
shuffledColors[5] = document.body.children[1].children[5]
shuffledColors[6] = document.body.children[1].children[6]
shuffledColors[7] = document.body.children[1].children[7]

let colorOne
let colorTwo
let cardOne
let cardTwo
let selectedColors = []

//randomize colors array
//Shows one color more than twice (i.e. blue square can show up 3 times)
//cant click some squares (since expanding to 6 or 8)
//boxes arent staying the same color (if dont get a match)
//if card1 + card2 are the same, increase correct guesses by 1, if 4 correct guesses=win
//random array of colors, create divs with dom manipulation that ties to an attribute (ex. color=purple)
//click card, get index of location in DOM, node list that matches length of color array--link div with index of colors array

let checkForMatch = () => {
  // let correctGuesses=0
  if (selectedColors.length === 2) {
    if (selectedColors[0] === selectedColors[1]) {
      console.log("It's a match!")
      // correctGuesses+= 1
      selectedColors = []
      cardOne = null
      cardTwo = null
      colorOne = null
      colorTwo = null
      // if (correctGuesses === 4) {
      //   console.log('Game won!')
      //   gameOver = true
      // }
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

// if (gameOver === true) {
//   return
// }

//new random index created every time changeDisplay is run
//randomized array set to cards

//create random array of colors at game start
//how to link them colors to cards on board (link 0's)
//change changeDisplay function to get color of card flipped,
const changeDisplay = (e) => {
  shuffledColors()
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
//fix view when page size changes (i.e. full page size versus half screen size)
