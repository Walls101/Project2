console.log('Hello Console')


let filmList = document.querySelector('#filmList')

let newImage = document.createElement('img')

newImage.src = 'https://starwars-visualguide.com/assets/img/films/6.jpg'

filmList.appendChild(newImage)

console.log('filmList')