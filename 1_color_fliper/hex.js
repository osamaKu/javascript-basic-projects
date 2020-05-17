var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});
