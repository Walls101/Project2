import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const allMembersOfCongress = [...senators, ...representatives]//modern combining of array data... like a boss :D
const senatorsDiv = document.querySelector('.senatorsDiv')
const seniorityHeader = document.querySelector('.seniority')
const loyaltyPeople = document.querySelector('.loyaltyPeople')
const loyaltyList = document.querySelector('.loyaltyList')

function simplifiedSenators() {
    return senators.map(senator => {
        const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `

        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`, 
            gender: senator.gender,
            party: senator.party,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: senator.seniority, 
            state: senator.state,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct
        }

    })
    
}
/*
const RepSenators = senators.filter(senator => senator.party === "R")
const DemSenators = senators.filter(senator => senator.party === "D")

const RepSenButton = document.createElement("button")
RepSenButton.textContent = "Republican Party"
RepSenButton.addEventListener("click", () => populateDom(RepSenators))

const DemSenButton = document.createElement("button")
DemSenButton.textContent = "Democratic Party"
DemSenButton.addEventListener("click", () => populateDom(DemSenators))

header.appendChild(RepSenButton);
header.appendChild(DemSenButton);
*/
function populateSenatorDiv(simplifiedSenators) {
    simplifiedSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorsDiv.appendChild(senFigure)

    })
}


populateSenatorDiv(simplifiedSenators())

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

const biggestVactionerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(" and ")


seniorityHeader.textContent = `The most senior Senator is ${mostSeniorMember.name} and the biggest fans of vacations are ${biggestVactionerList}.`



simplifiedSenators().forEach(senator => {
    loyaltyPeople.textContent = 'This is a list of the most loyal!'
    if(senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)
    }
})
