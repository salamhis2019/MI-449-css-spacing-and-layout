const quotes = document.querySelector('.quote')
const author = document.querySelector('.author')
const button = document.querySelector('.btn')

button.addEventListener('click', getQuote)

function getQuote() {
  // FETCH THE API
  fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5')
    // CONVERT THE RESPONSE TO JSON
    .then(response => response.json())
    .then(people => {
      // ITERATE THROUGH JSON OBJECTS AND TAKE DATA WE WANT
      people.forEach(person => {
        quotes.textContent = `"${person.quote}"`
        author.textContent = `- ${person.author}`
      })
    })
}
