document.addEventListener('DOMContentLoaded', () => {
  //opções de cartão
  const cardArray = [
    {
      name: 'hamster',
      img: 'img/hamster.jpg'
    },
    {
      name: 'cachorro',
      img: 'img/cachorro.jpg'
    },
    {
      name: 'capivara',
      img: 'img/capivara.jpg'
    },
    {
      name: 'bodes',
      img: 'img/bodes.jpg'
    },
    {
      name: 'coelho',
      img: 'img/coelho.jpg'
    },
    {
      name: 'gatinho',
      img: 'img/gatinho.jpg'
    },
    {
      name: 'coelho',
      img: 'img/coelho.jpg'
    },
    {
      name: 'bodes',
      img: 'img/bodes.jpg'
    },
    {
      name: 'gatinho',
      img: 'img/gatinho.jpg'
    },
    {
      name: 'cachorro',
      img: 'img/cachorro.jpg'
    },
    {
      name: 'hamster',
      img: 'img/hamster.jpg'
    },
    {
      name: 'capivara',
      img: 'img/capivara.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#acertos')
  const errorDisplay = document.querySelector('#erros')
  const errorTitle = document.querySelector('#erro')
  const acertoTitle = document.querySelector('#acerto')
  const btnreiniciar = document.querySelector('#btn-reiniciar')
  let erro = 0;
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/golfinho.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/golfinho.jpg')
      cards[optionTwoId].setAttribute('src', 'img/golfinho.jpg')
      alert('Você clicou na mesma imagem!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou!')
      cards[optionOneId].setAttribute('src', 'img/check.svg')
      cards[optionTwoId].setAttribute('src', 'img/check.svg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/golfinho.jpg')
      cards[optionTwoId].setAttribute('src', 'img/golfinho.jpg')
      alert('Desculpe, tente novamente!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = " " + cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      acertoTitle.style.textContent = " "
      errorDisplay.style.display = "none"
      errorTitle.style.display = "none"
      btnreiniciar.style.display = "flex"
      resultDisplay.textContent = ' Parabéns! Você encontrou todos eles!'
    
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})

function reiniciar() {
  location.reload();
}