const optionButtons = document.querySelectorAll('[data-option]')
const OPTIONS = [
    {
        name: "rock",
        icon: "<i class="fas fa-hand-rock"></i>",
        beats: "scissors"
    }
    {
        name: "paper",
        icon: "<i class="fas fa-hand-paper"></i>",
        beats: "rock"
    }
    {
        name: "scissors",
        icon: "<i class="fas fa-hand-scissors"></i>",
        beats: "paper"
    }
    {
        name: "lizard",
        icon: "<i class="fas fa-hand-lizard"></i>",
        beats: "XXX"
    }
    {
        name: "spock",
        icon: "<i class="fas fa-hand-spock"></i>",
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
    const yourWinner = isWinner(option, computerOption)
    const computerWinner = isWinner(computerOption, option)
    
    addOptionResult(computerSelection, computerWinner)
    addOptionResult(selection, yourWinner)
}

function addOptionResult(option, winner) {

}

function isWinner(option, opponentOption) {
    return option.beats === opponentOption.name
}

function randomOption () {
    const randomIndex = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[randomIndex]
}