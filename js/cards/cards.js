// CONFIG CARDS

for (let card of cards) {
    card.classList.add('card__align--center')

    const lastP = card.querySelector('p:last-child')
    lastP.classList.add('text-danger')

    const nthChild = card.querySelector(':nth-child(3)')
    const b = document.createElement('b')
    b.innerText = nthChild.innerText
    nthChild.innerHTML = b.outerHTML
}