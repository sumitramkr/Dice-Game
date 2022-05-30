function dice1() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    return ("images/dice" + randomNumber1 + ".png");

}

function dice2 () {
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    return ("images/dice" + randomNumber2 + ".png");
}

// var dice_face1 = dice1();

// alert(dice1());

var dice_face1 = dice1();
var dice_face2 = dice2();
// alert(dice_face1);

if (dice_face1 > dice_face2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (dice_face1 < dice_face2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".img1").setAttribute("src", dice_face1);
document.querySelector(".img2").setAttribute("src", dice_face2);

