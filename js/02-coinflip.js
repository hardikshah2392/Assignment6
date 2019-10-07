var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose Heads or Tail (h/t).");
window.console.log(coinFlip);

if (!coinFlip) {
    if (choice === 'h') {
        window.alert("The flip was heads and you chose heads...you win!");
    }
    else if (choice === "t") {
        window.alert("The flip was heads but you chose tails...you lose!");
    }
} else if (coinFlip) {
    if (choice === 'h') {
        window.alert("The flip was tails but you chose heads...you lose!");
    }
    else if (choice === "t") {
        window.alert("The flip was tails and you chose tails...you win!");
    }
}
