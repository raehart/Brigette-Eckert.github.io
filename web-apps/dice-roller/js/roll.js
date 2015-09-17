
function Dice(sides) {
	this.sides = sides;
}

var d4 = new Dice(4);
var d6 = new Dice(6);
var d8 = new Dice (8);
var d10= new Dice(10);
var d12 = new Dice(12);
var d20 = new Dice(20);

Dice.prototype.roll = function() {
		var randomNumber = Math.floor(Math.random()* this.sides) + 1;
		return randomNumber;
	};


//d4 roll
$("#d4, #d4roll").click(function() {
	document.getElementById('d4roll').innerHTML = d4.roll();
});

//d6 roll
$("#d6, #d6roll").click(function() {
	document.getElementById('d6roll').innerHTML = d6.roll();
});

//d8 roll
$("#d8, #d8roll").click(function() {
	document.getElementById('d8roll').innerHTML = d8.roll();
});

$("#d10, #d10roll").click(function() {
	document.getElementById('d10roll').innerHTML = d10.roll();
});

$("#d12, #d12roll").click(function() {
	document.getElementById('d12roll').innerHTML = d12.roll();
});

$("#d20, #d20roll").click(function() {
	document.getElementById('d20roll').innerHTML = d20.roll();
});
