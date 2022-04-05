import { starships } from "../data/starships.js"

const nav = document.querySelector(".nav")
const navList = document.querySelector(".navList")
const shipViewer = document.querySelector(".shipViewer")

function populateNav() {
    starships.forEach((starship) => {
        const listItem = document.createElement('li')
        const anchor = document.createElement('a')
        anchor.href = '#'
        listItem.textContent = starship.name


        listItem.appendChild(anchor)
        navList.appendChild(listItem)
    })
}
populateNav()
function populateShipView () {

}