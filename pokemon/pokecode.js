import {  removeChildren  } from '../utils/index.js'

const getAPIData = async (url) => {
    try {
      const result = await fetch(url)
      return await result.json()
    } catch (error) {
      console.error(error)
    }
  }
  
  class Pokemon {
    constructor(name, height, weight, abilities, types, moves, hp, attack, defense, specialAtack, specialDefense, speed) {
      // (done)would need to add 'moves' property to this constructor function. For moves
      ;(this.id = 9001),
        (this.name = name),
        (this.height = height),
        (this.weight = weight),
        (this.abilities = abilities),
        (this.types = types),
        //would need (this.moves = moves) here (done)
        (this.moves = moves),
        (this.hp = hp),
        (this.attack = attack),
        (this.defense = defense),
        (this.specialAtack = specialAtack),
        (this.specialDefense = specialDefense),
        (this.speed = speed)
    }
  }
  
  const loadedPokemon = []

  const pokeHeader = document.querySelector('header')
  const pokeGrid = document.querySelector('.pokegrid')

  const loadButton = document.createElement('button')
  loadButton.textContent = 'Load Pokemon'
  pokeHeader.appendChild(loadButton)
  loadButton.addEventListener('click', async () =>{
    removeChildren(pokeGrid)
    if( loadedPokemon.length === 0) {
      await loadPokemon(0,50)
    } else {
      loadedPokemon.forEach((item) => populatePokeCard(item))
    }
  })

  const newButton = document.createElement('button')
  newButton.textContent = 'New Pokemon'
  pokeHeader.appendChild(newButton)
  newButton.addEventListener('click', () => {
    const pokeName = prompt('What is the name of your new Pokemon?')
    const pokeHeight = prompt("What is the Pokemon's height?")
    const pokeWeight = prompt("What is the Pokemon's weight?")
    const pokeAbilities = prompt(
      "What are your Pokemon's abilities? (use a comma separated list)"
    )
    const pokeTypes = prompt(
      "What are your Pokemon's types? (up to 2 types separated by a space)"
    )
    const pokeMoves = prompt(
      "What are your Pokemon's moves? (up to 2 moves and separated by a comma)"
    )
    const pokemonHp = prompt("What is the pokemon's HP?")
    const pokemonAtk = prompt("What is the pokemon's Attack?")
    const pokemonDef = prompt("What is the pokemon's Defense?")
    const pokemonSpecialAtk = prompt("What is the pokemon's Special Attack?")
    const pokemonSpecialDef = prompt("What is the pokemon's Special Defense?")
    const pokemonSpd = prompt("What is the pokemon's Speed?")
  
    //Prompt the user for a set of moves if you want to show them(done)

    const newPokemon = new Pokemon(
      pokeName,
      pokeHeight,
      pokeWeight,
      makeAbilitiesArray(pokeAbilities),
      makeTypesArray(pokeTypes),
      //makeMovesArray would be called here (done)
      makeMovesArray(pokeMoves),
      pokemonHp,
      pokemonAtk,
      pokemonDef,
      pokemonSpecialAtk,
      pokemonSpecialDef,
      pokemonSpd
    )
    console.log(newPokemon)
    populatePokeCard(newPokemon)
  })
  
  function makeAbilitiesArray(commaString) {
    // example comma string 'run-away, gluttony'
    return commaString.split(',').map((abilityName) => {
      return { ability: { name: abilityName } }
    })
  }
  
  function makeTypesArray(spacedString) {
    // example spaced string 'poison flying'
    return spacedString.split(' ').map((typeName) => {
      return { type: { name: typeName } }
    })
  }
  
// similar function named 'makeMovesArray' goes here(done)
  function makeMovesArray(commaString) {
    return commaString.split(",").map((movesName) => {
      return { moves: {name: movesName}}
    })
  }

  async function loadPokemon(offset = 0, limit = 25) {
    const data = await getAPIData(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    )
    for (const nameAndUrl of data.results) {
      const singlePokemon = await getAPIData(nameAndUrl.url)
      const simplifiedPokemon = {
        id: singlePokemon.id,
        height: singlePokemon.height,
        weight: singlePokemon.weight,
        name: singlePokemon.name,
        abilities: singlePokemon.abilities.slice(0,2),
        types: singlePokemon.types,
        moves: singlePokemon.moves.slice(0, 2),
        hp: singlePokemon.stats[0].base_stat,
        attack: singlePokemon.stats[1].base_stat,
        defense: singlePokemon.stats[2].base_stat,
        specialAtk: singlePokemon.stats[3].base_stat,
        specialDef: singlePokemon.stats[4].base_stat,
        speed: singlePokemon.stats[5].base_stat
      }
      loadedPokemon.push(simplifiedPokemon)
      populatePokeCard(simplifiedPokemon)
    }
  }
  
  function populatePokeCard(pokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () =>
      pokeCard.classList.toggle('is-flipped'),
    )
    // populate the front of the card
    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
  }
  
  function populateCardFront(pokemon) {
    const pokeFront = document.createElement('figure')
    pokeFront.className = 'cardFace front'
  
    const pokeType = pokemon.types[0].type.name
    //const pokeType2 = pokemon.types[1]?.type.name
    // console.log(pokeType, pokeType2)
    pokeFront.style.setProperty('background', getPokeTypeColor(pokeType))
  
   /*  if(pokeType2) {
      pokeFront.style.setProperty('background', `linear-gradient(${getPokeTypeColor(pokeType)}, ${getPokeTypeColor(pokeType2)})`)
    } */
  
    const pokeImg = document.createElement('img')
    if (pokemon.id === 9001) {
      pokeImg.src = '../images/pokeball.png'
    } else {
      pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    }
    const pokeCaption = document.createElement('figcaption')
    pokeCaption.textContent = pokemon.name
  
    pokeFront.appendChild(pokeImg)
    pokeFront.appendChild(pokeCaption)
    return pokeFront
  }
  //I've added moves to the back of the card but I need to add moves label to them.
  function populateCardBack(pokemon) {
    const pokeBack = document.createElement('div')
    pokeBack.className = 'cardFace back'
    const label = document.createElement('h4')
    label.textContent = 'Abilities'
    pokeBack.appendChild(label)
  
    const abilityList = document.createElement('ul')
    pokemon.abilities.forEach((abilityItem) => {
      const listItem = document.createElement('li')
      listItem.textContent = abilityItem.ability.name
      abilityList.appendChild(listItem)
    })
    pokeBack.appendChild(abilityList)
    
    const label1 = document.createElement('h4')
    label1.textContent = 'Moves'
    pokeBack.appendChild(label1)

    const moveList = document.createElement('ul')
    pokemon.moves.forEach((moveItem) => {
      const itemList = document.createElement('li')
      itemList.textContent = moveItem.move.name
      moveList.appendChild(itemList)
    })
    pokeBack.appendChild(moveList)
    /*
    const pokeHP = document.createElement("h4")
    pokeHP.textContent = `HP: ${pokemon.hp}`
    pokeBack.appendChild(pokeHP)

    const pokeAtk = document.createElement('h4')
    pokeAtk.textContent = `Attack: ${pokemon.attack}`
    pokeBack.appendChild(pokeAtk)

    const pokeDef = document.createElement('h4')
    pokeDef.textContent = `Defense: ${pokemon.defense}`
    pokeBack.appendChild(pokeDef)

    const pokeSAtk = document.createElement('h4')
    pokeSAtk.textContent = `S. Attack: ${pokemon.specialAtk}`
    pokeBack.appendChild(pokeSAtk)

    const pokeSDef = document.createElement('h4')
    pokeSDef.textContent = `S. Defense: ${pokemon.specialDef}`
    pokeBack.appendChild(pokeSDef)

    const pokeSpd = document.createElement('h4')
    pokeSpd.textContent = `Speed: ${pokemon.speed}`
    pokeBack.appendChild(pokeSpd)
    */
    return pokeBack
  }
  
  function getPokeTypeColor(pokeType) {
    // if(pokeType === 'grass') return '#00FF00'
    let color
    switch (pokeType) {
      case 'grass':
        color = '#78C850'
        break
      case 'fire':
        color = '#F08030'
        break
      case 'water':
        color = '#6890F0'
        break
      case 'bug':
        color = '#A8B820'
        break
      case 'normal':
        color = '#A8A878'
        break
      case 'flying':
        color = '#A890F0'
        break
      case 'poison':
        color = '#A040A0'
        break
      case 'ghost':
        color = '#A292BC'
        break
      case 'electric':
        color = '#F8D030'
        break
      case 'psychic':
        color = '#F85888'
        break
      case 'ground':
        color = '#E0C068'
        break
      case 'dark':
        color = '#A29288'
        break
      case 'dragon':
        color = '#A27DFA'
        break
      case 'fairy':
        color = '#EE99AC'
        break
      case 'fighting':
        color = '#D67873'
        break
      case 'ice':
        color = '#98D8D8'
        break
      case 'rock':
        color = '#B8A038'
        break
      case 'steel':
        color = '#B8B8D0'
        break
      default:
        color = '#68A090'
    }
    return color
  }
  
  function filterPokemonByType(type) {
    return loadedPokemon.filter((pokemon) => pokemon.types[0].type.name === type)
  }
  
  // not figured out yet what the UI might be for sorted/filtered pokemon...
  const typeSelect = document.querySelector('.typeSelect')
  typeSelect.addEventListener('change', (event) => {
    const userTypeChoice = event.target.value.toLowerCase()
    const pokemonByType = filterPokemonByType(userTypeChoice)
    removeChildren(pokeGrid)
    pokemonByType.forEach((singlePokemon) => populatePokeCard(singlePokemon))
  })