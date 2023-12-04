console.log("test")

const urlDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const urlShuffleCards = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const urlUsers = 'http://localhost:3000/users'

let deckId
let playerTotalBetPoints = 100
let dealerTotalBetPoints = 100

let playerCardsValue = 0
let dealetCardsValue = 0

// Users Funtionality
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


// Work with CARDS

function getCardValue(card) {
  console.log(card.value)
  switch (card.value) {
    case "1":
      return 1
      break;
    case "2":
      return 2
      break;
    case "3":
      return 3
      break;
    case "4":
      return 4
      break;
    case "5":
      return 5
      break;
    case "6":
      return 6
      break;
    case "7":
      return 7
      break;
    case "8":
      return 8
      break;
    case "9":
      return 9
      break;
    case "10":
      return 10
      break;
    case "JACK":
      return 10
      break;
    case "QUEEN":
      return 10
      break;
    case "KING":
      return 10
      break;
    case "ACE":
      return 11
  }
}

function shuffleCards() {
  return fetch(urlDeck)
    .then(res => res.json())
}

function getCards(deckId, count) {
  const draw_card = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  return urlGet(draw_card)
}

function showCardOnTable(cards, cardsEl) {

  cards.cards.forEach(card => {
    const crd = getEl(cardsEl)
    // console.log(crd)
    // console.log(card.value)
    const img = createEl('img')

    img.src = card.image
    img.alt = "Avatar"
    img.style = "width:100%"
    crd.append(img)

    addPlayerValue(card, cardsEl)
    updateTableScore(cardsEl)
    checkResult()
  })
}

function addPlayerValue(card, player) {
  console.log(card.value, ' : ', player)
  const value = getCardValue(card)
  console.log('Value: ', value)
  if (player === "#cards_player") {
    playerCardsValue += value
  } else {
    dealetCardsValue += value
  }
}

function cleanTable() {
  const cardsEl = getEl('#cards_player')
  cardsEl.innerHTML = ''
  const cardsEl2 = getEl('#cards_casino')
  cardsEl2.innerHTML = ''

  playerCardsValue = 0
  dealetCardsValue = 0

  getEl('#score_player').textContent = `Player: 0`
  getEl('#score_casino').textContent = `Casino: 0`
}

function updateTableScore(player) {
  if (player === "#cards_player") {
    getEl('#score_player').textContent = `Player: ${playerCardsValue}`
  } else {
    getEl('#score_casino').textContent = `Casino: ${dealetCardsValue}`
  }
}

function checkResult() {
  if (playerCardsValue > 21) {
    console.log('You lose!')
    alert('You lose!')
  }
}













// Elements Functions
function getEl(el) {
  return document.querySelector(el)
}

function createEl(el) {
  return document.createElement(el)
}

// URL Functions
function urlGet(url, method, id) {
  return fetch(url)
    .then(res => res.json())
}

function urlCUD(url, method, id) {
  fetch(url)
    .then(res => res.json())
}