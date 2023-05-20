// UTILS

const totalPrice = () => {

    if (!tickets || !category) return;

    const totalValue = price * tickets
    const discount = (totalValue / 100) * categories[category].percent

    total = totalValue - discount

    totalTag.innerText = totalText + total
}

