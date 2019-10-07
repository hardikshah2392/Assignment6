var coinFlip;

var i;

for (i=0; i < 10; i += 1) {
    coinFlip = Math.round(Math.random());

    if (!coinFlip) {
        window.console.log("Heads");
    } else if (coinFlip) {
        window.console.log("Tails");
    }
}