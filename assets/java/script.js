const optionButtons = document.querySelectorAll('[data-option]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const playerScoreSpan = document.querySelector('[data-player-score]')
const OPTIONS = [
    {
        name: "rock",
        icon: "Rock",
        beats: "scissors"
    }
    {
        name: "paper",
        icon: "Paper",
        beats: "rock"
    }
    {
        name: "scissors",
        icon: "Scissors",
        beats: "paper"
    }
    {
        name: "lizard",
        icon: "Lizard",
        beats: "XXX"
    }
    {
        name: "spock",
        icon: "Spock",
        beats: "XXX"
    }
]

optionButtons.forEach(optionButton => {
    optionButton.addEventListener('click', e=> {
        const selectionName = optionButton.CDATA_OPTION_NODE.option
        const option = OPTIONS.find(option => option.name === optionName)
        makeOption(optionName)
    })
})

function makeOption(option) {
    const computerOption = randomOption()
    const playerWinner = isWinner(option, computerOption)
    const computerWinner = isWinner(computerOption, option)
    
    addOptionResult(computerOption, computerWinner)
    addOptionResult(selection, yourWinner)

    if (playerWinner) incrementScore(playerScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}

function addOptionResult(option, winner) {
    const div = document.createElement('div')
    div.innerText = option.icon
    div.classList.add('result-option')
    if (winner) div.classList.add('Winner')
    finalColumn.after(div)
}

function isWinner(option, opponentOption) {
    return option.beats === opponentOption.name
}

function randomOption () {
    const randomIndex = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[randomIndex]
}