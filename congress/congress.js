import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const allMembersOfCongress = [...senators, ...representatives]//modern combining of array data... like a genius

const senatorDiv = document.querySelector('.senatorsDiv')
const seniorityHeader = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')

function simplifiedSenators() {
    return senators.map(senator => {
        const middleName = senator.middle_name ? ' ${senator.middle_name} ' : ' '
    })
    
}



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