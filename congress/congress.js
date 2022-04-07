import { senators } from '../data/senators.js'
//import { representatives } from '../data/representatives.js'

//const allMembersOfCongress = [...senators, ...representatives]//modern combining of array data... like a genius
/*
const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeader = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')
*/
function simplifiedSenators() {
    senators.map(senator => {
        const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `

        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`, 
            gender: senator.gender,
            party: senator.party,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
            seniority: senator.seniority, 
            state: senator.state,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct
        }

    })
    
}

function populateSenatorDiv(simplifiedSenators) {
    //Todo: create figure element with image and figcaption
    //set the image source to imagURL
    //appendchildren to the DOM
}

/*
populateSenatorDiv(simplifiedSenators())

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => acc.
seniority > senator.seniority ? acc : senator)

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) =>
acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

console.log(biggestMissedVotesPct.missedVotesPct)

const biggestVactionerList = simplifiedSenators().filter(senator => senator.
missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(", ")

console.log(biggestVactionerList)


seniorityHeader.textContent = "The most senior Senator is ${mostSeniorMember.name} and the biggest fans of vacations are ${biggestVactionerList}."

simplifiedSenators().forEach(senator => {
    if(senator.)
})
*/