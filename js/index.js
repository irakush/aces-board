const urlDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const urlShuffleCards = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let deck_id


const urlUsers = 'http://localhost:3000/users'

const testUrl = 'https://deckofcardsapi.com/api/deck/5co87pz3b0rg/draw/?count=1'

urlGet(urlUsers)
.then(data => {
  console.log('RES: ', data)

  showUsers(data)
})

function showUsers(users) {
  const listUsers = getEl('#list')

  users.forEach(user => {
    const li = createEl('li')
    li.textContent = user.username

    listUsers.append(li)
  })
}

function shuffleCards() {
  urlGet(urlShuffleCards)
    .then(data => {
      // deck_id = data.deck_id
      // console.log(deck_id)
      const draw_card = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`
      urlGet(draw_card)
        .then(data => {
          addCard(data)
  })

    })
}

function drawCard(draw_id){
  
}

getEl('#draw_card').addEventListener('click', () => {
  shuffleCards()
})


function addCard(cards) {
  cards.cards.forEach(card => {
    const crd = getEl('#casino')
    console.log(crd)
    const img = createEl('img')

    img.src=card.image 
    img.alt="Avatar" 
    img.style="width:100%"
    crd.append(img)
  })
}





// Elements Functions
function getEl(el) {
  return document.querySelector(el)
}

function createEl(el) {
  return document.createElement(el)
}

// URL Functions
function urlGet (url, method, id) {
  return fetch(url)
    .then(res => res.json())
}

function urlCUD (url, method, id) {
  fetch(url)
    .then(res => res.json())
}