const renderGifts = async () => {
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url${gift.image}`

            const giftName = document.createElement('h3')
            giftName.textContent = gift.name
            bottomContainer.appendChild(giftName)

            const giftCost = document.createElement('p')
            giftCost.textContent = gift.cost
            bottomContainer.appendChild(giftCost)

            const readMore = document.createElement('a')
            readMore.textContent = "Read More"
            readMore.href = `/gift/${gift.id}`
            readMore.setAttribute('role', 'button')
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        mainContent.textContent = "No Gifts Available for you darling!"
    }
}

renderGifts()