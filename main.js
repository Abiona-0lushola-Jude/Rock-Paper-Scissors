let blockArray = [
    {
        name:'rock',
        img: "images/icon-rock.svg"
    },
    {
        name:'paper',
        img: "images/icon-paper.svg"
    },
    {
        name:'scissors',
        img:"images/icon-scissors.svg"
    }
]
let rock = blockArray[0].img
let paper = blockArray[1].img
let scissors =blockArray[2].img
// 
const player = document.querySelector('#player')
const house = document.querySelector('#house')
const firstAction = document.querySelector('.firstAction')
const secondAction = document.querySelector('.secondAction')
const thirdAction = document.querySelector('.thirdAction')
// console.log(blockArray)
// 

let houseArray= []
let playerArray = []

// 
function  houseToggle(){
    blockInst = Math.floor(Math.random()*blockArray.length)
    houseArray.push(blockArray[blockInst].img)
    setTimeout(() => {
        if(blockArray[blockInst].img === blockArray[1].img){
        house.classList.toggle('openFirst')
        houseImg.src = blockArray[blockInst].img
    }else if (blockArray[blockInst].img === blockArray[2].img){
        house.classList.toggle('openSecond')
        houseImg.src = blockArray[blockInst].img
    }else if(blockArray[blockInst].img === blockArray[0].img){
        house.classList.toggle('openThird')
        houseImg.src = blockArray[blockInst].img
    }
    }, 1500);
}

// console.log(houseArray)
// console.log(playerArray)
// 
function playerToggleFirstAction(){
        player.classList.toggle('openFirst')
        playerImg.src = blockArray[1].img
        houseToggle()
        playerArray.push(blockArray[1].img)
        check()
        playAgainFunction()
}
// 
function playerToggleSecondAction(){
    player.classList.toggle('openSecond')
    playerImg.src = blockArray[2].img
    houseToggle()
    playerArray.push(blockArray[2].img)
    check()
    playAgainFunction()
}
// 
function playerToggleThirdction(){
    player.classList.toggle('openThird')
    playerImg.src = blockArray[0].img
    houseToggle()
    playerArray.push(blockArray[0].img)
    check()
    playAgainFunction()
}
// 
// 
let count = 1
function check(){
    let houseCheck = houseArray[houseArray.length - 1]
    let playerCheck = playerArray[playerArray.length - 1]
    setTimeout(() => {
        if(playerCheck === rock && houseCheck === scissors 
            || playerCheck === scissors && houseCheck ===paper ||
            playerCheck === paper && houseCheck === rock){
                console.log('WIN')
                let winCount = count++
                console.log(winCount)
                localStorage.setItem('score', winCount)
                score.textContent = localStorage.getItem('score')
                answer.textContent = "YOU WIN"
        }else if(playerCheck === houseCheck){
            answer.textContent = 'DRAW'
            console.log('DRAW')
        }
        else{
            console.log('YOU LOSE')
            answer.textContent = "YOU LOSE"
        }
    }, 1500);
}
// check()
function playAgainFunction(){
    game.classList.toggle('open')
    result.classList.toggle('open')
    houseImg.src = ''
    answer.textContent = ''
}

firstAction.addEventListener('click', playerToggleFirstAction)
secondAction.addEventListener('click', playerToggleSecondAction)
thirdAction.addEventListener('click', playerToggleThirdction)
const rulesBntn = document.querySelector('#ruleBtn')
const close = document.querySelector('#close')
const rules = document.querySelector('#rule')
const score = document.querySelector('#score')
const playAgain = document.querySelector('.playAgain')
const result = document.querySelector('.result')
const game = document.querySelector('.game')
const answer = document.querySelector('.answer')
const body = document.querySelector('body')
const playerImg = document.querySelector('#playerImg')
const houseImg = document.querySelector('#houseImg')


playAgain.addEventListener('click', playAgainFunction)
function rulesToggle(){
    rules.classList.toggle('open')
}
rulesBntn.addEventListener('click', rulesToggle)
close.addEventListener('click', rulesToggle)