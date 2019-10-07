var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if (!coinFlip) {
        window.console.log("Heads");
    } else if (coinFlip) {
        window.console.log("Tails");
    }
} while (coinFlip != 1)