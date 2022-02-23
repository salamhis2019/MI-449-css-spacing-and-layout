const quotes = document.querySelector('.quote')
const author = document.querySelector('.author')
const button = document.querySelector('.btn')

let allQuotes

fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5')
  .then(response => response.json())
  .then(results => {
    allQuotes = results
    button.disabled = false
    showRandomQuote()
  })

function showRandomQuote() {
  if (allQuotes) {
    const randomQuote = Math.floor(Math.random() * allQuotes.length)
    const displayQuote = allQuotes[randomQuote]
    quotes.textContent = displayQuote.quote
    author.textContent = displayQuote.author
  }
}

button.addEventListener('click', showRandomQuote)

// function getQuote() {
//   // FETCH THE API
//   fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/5')
//     // CONVERT THE RESPONSE TO JSON
//     .then(response => response.json())
//     .then(people => {
//       console.log(people)
//       // ITERATE THROUGH JSON OBJECTS AND TAKE DATA WE WANT
//       quotes.textContent = `"${people[0].quote}"`
//       author.textContent = `- ${people[0].author}`
//     })
// }
