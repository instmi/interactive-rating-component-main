const ratingState = document.querySelector('#rating-state')
const ratingOptions = document.querySelectorAll('.options')
const rate = document.querySelector('#rate')

const thankYouState = document.querySelector('#thank-you-state')

const buttonSubmit = document.querySelector('#button__submit')
const buttonReturn = document.querySelector('#button__return')

buttonSubmit.addEventListener('click', changeState)

function changeState() {
   thankYouState.classList.remove('hidden')
   ratingState.classList.add('hidden')
}

buttonReturn.addEventListener('click', returnToRating)

function returnToRating() {
   thankYouState.classList.add('hidden')
   ratingState.classList.remove('hidden')
}

ratingOptions.forEach(option => {
   option.addEventListener('click', () => {
      rate.innerHTML = option.innerHTML
   })
})