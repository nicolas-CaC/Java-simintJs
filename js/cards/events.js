// EVENTOS

const cardEnter = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index)
}

const cardLeave = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index, true)

}

const cardClick = (e) => {
    selected = e.currentTarget.dataset.index
    matchCategory(selected)
    eventsAssignmentAll()
}

const eventCleaner = (container) => {
    container.removeEventListener('mouseenter', cardEnter)
    container.removeEventListener('mouseleave', cardLeave)
    container.removeEventListener('click', cardClick)
}

const eventAssignment = (container) => {
    container.addEventListener('mouseenter', cardEnter)
    container.addEventListener('mouseleave', cardLeave)
    container.addEventListener('click', cardClick)
}

const eventsAssignmentAll = () => {

    for (let container of cardsContainer) {

        eventCleaner(container)

        const { index } = container.dataset

        if (index !== selected) {
            eventAssignment(container)
            changeColor(container, index, true)
        }
    }
}

// EVENTOS: ASIGNACION

eventsAssignmentAll()