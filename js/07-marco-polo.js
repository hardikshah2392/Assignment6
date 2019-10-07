var i;

for (i = 1; i < 101; i += 1) {
    if (i % 15 === 0) {
        window.document.write("Marco! Polo" + "<br>");
    }else if (i % 5 === 0) {
        window.document.write("Polo" + "<br>");   
    }else if (i % 3 === 0) {
        window.document.write("Marco!" + "<br>");
    }else {
        window.document.write(i + "<br>");
    }
}