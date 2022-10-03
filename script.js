//////////////////// Global Variables////////////////////

const allCards = document.querySelectorAll('.cardBack')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
console.log(allCards)

const changeDisplay = (e) => {
  e.target.classList.toggle('blue')
}

//////////////Event Listeners////////////////

allCards.forEach((card) => {
  card.addEventListener('click', changeDisplay)
})

//*****LOGIC TO IDENTIFY FLIPPED CARD*****
// const addClass= (e)=>{
//   e.target.classList.add('flipped')
// }
// allCards.forEach((card)=>{
//   card.addEventListener('click',addClass)
// })

//******welcome button*****//////
// const letsPlay=document.querySelector('welcomeButton')
// letsPlay.addEventListener('click', )

/////////////////////Game Functions////////////////

// let playGame=()=>{
//   if (this.class==="blue")
// }
