import { films } from '../data/films'



// First, get a reference to the main element with the id 'filmList' and store it in a variable
let filmList = document.querySelector('#filmList')
// Second, use the document.createElement function/method to create a new img element
let newImage = document.createElement('img')
// Third, set the source property of the new image to a valid URL or path
newImage.src = 'https://starwars-visualguide.com/assets/img/films/6.jpg'
// Fourth, add the newly created image as a child of the main element
filmList.appendChild(newImage)
