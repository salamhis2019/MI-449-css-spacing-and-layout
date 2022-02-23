const quotes = document.querySelector('.quote')
const author = document.querySelector('.author')
const button = document.querySelector('.btn')

button.addEventListener('click', getQuote)

function getQuote() {
  fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5')
    .then(response => response.json())
    .then(people => {
      people.forEach(person => {
        quotes.textContent = `"${person.quote}"`
        author.textContent = `- ${person.author}`
      })
    })
}
