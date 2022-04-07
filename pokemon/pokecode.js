

const getAPIData = async (url) => {
    try {
        const result = await fetch(url)
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

const pokeGrid = document.querySelector('.pokegrid')

async function loadPokemon(offset, limit) {
    const data = await getAPIData('https://pokeapi.co/api/v2/pokemon/snorlax')
    populatePokeGrid(data)
}

function populatePokeGrid(pokemonArray) {
    console.log(pokemonArray)
    // loop through array and populate individual pokemon cards
    for (const singlePokemon of pokemonArray.results) {
        populatePokeCard(singlePokemon)
    }
}

function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => pokeCard.classList.toggle('is-flipped'))
    //populate the fron of the card
    pokeCard.appendChild(populateCardFront(pokemon))

    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}


function populateCardFront(pokemon) {
    pokemon
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace'
    const pokeImg = document.createElement('img')
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png`
    const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = 'snorlax'

    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
}

function populateCardBack(pokemon) {

}

loadPokemon(0, 0)