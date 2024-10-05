let fighters = ["\uD83D\uDC09", "\uD83D\uDC25", "\uD83D\uDC0A", "\uD83D\uDCA9", "\uD83E\uDD8D", "\uD83D\uDC22", "\uD83D\uDC29", "\uD83E\uDDA9", "\uD83E\uDD80", "\uD83D\uDC1D", "\uD83E\uDD16", "\uD83D\uDC18", "\uD83D\uDC38", "\uD83D\uDD77", "\uD83D\uDC06", "\uD83E\uDD95", "\uD83E\uDD81"];
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener( "click",function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})
