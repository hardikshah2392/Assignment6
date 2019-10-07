var num1 = parseInt(window.prompt("Enter the first number"));
var num2 = parseInt(window.prompt("Enter the second number"));

if (num1 > num2) {
    window.document.write("The greater of both numbers is " + num1);
}else if (num2 > num1) {
    window.document.write("The greater of both numbers is " + num2);
}else {
    window.document.write("Both the numbers are equal.")
}