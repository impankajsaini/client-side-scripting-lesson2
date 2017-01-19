/* custom javascript goes here */
console.log("app started!");

var clickMeButton = document.getElementById("clickMeButton");

clickMeButton.addEventListener("click", CLick);

function CLick() {
    console.log("clicked!");
}