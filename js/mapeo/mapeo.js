const pepe = document.getElementsByTagName('pepe')[0]
pepe.className = 'container-fluid bg-dark py-5 bg-opacity-75'

const cardgroup = document.createElement('div')
cardgroup.className = 'row row-cols-1 row-cols-md-3 g-4'

const cardTemplate = ({ title, text, percent, footer, bg }) => `
            <div class="btn card border border-2 border-muted ${bg} text-white" data-index="0">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${text}</p>
                    <p class="card-text">${percent}}</p>
                    <p class="card-text">${footer}</p>
                </div>
            </div>`


class Card {
    constructor(title, text, nro, bg) {
        this.title = title
        this.text = text
        this.percent = nro
        this.footer = 'El mismo footer para todos'
        this.bg = bg
    }
}

const card1 = new Card('Titulo 1', ' Esta es la primera card', 20, 'bg-primary')
const card2 = new Card('Titulo 2', ' Esta es la segunda card', 40, 'bg-secondary')
const card3 = new Card('Titulo 3', ' Esta es la tercera card', 60, 'bg-warning')

const cardsArray = [card1, card2, card3]
const cardsMap = cardsArray.map(card => cardTemplate(card)).join('')

cardgroup.innerHTML = cardsMap
pepe.append(cardgroup)