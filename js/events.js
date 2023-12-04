// EVENTLISTENERS

// NEW GAME BUTTON
getEl('#btn_new_game').addEventListener('click', () => {
  console.log('start')
  shuffleCards()
    .then(data => {
      deckId = data.deck_id

      cleanTable()

      getCards(deckId, 2)
        .then(cards => showCardOnTable(cards, "#cards_player"))
    })
})

// HIT BUTTON
getEl('#btn_hit').addEventListener('click', () => {

  getCards(deckId, 1)
    .then(cards => showCardOnTable(cards, "#cards_player"))
})

// STAND BUTTON
getEl('#btn_stand').addEventListener('click', () => {
  
  getCards(deckId, 2)
    .then(cards => showCardOnTable(cards, "#cards_casino"))
})