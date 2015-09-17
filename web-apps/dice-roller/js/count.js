function counterDice(side) {
	this.side = side;
	start = 1;
}

var d4counter = new counterDice(4);
var d6counter = new counterDice(6);
var d8counter = new counterDice (8);
var d10counter= new counterDice(10);
var d12counter = new counterDice(12);
var d20counter = new counterDice(20);



counterDice.prototype.countUp = function() {
		for(i=start; i< this.side +1; i++){
			console.log(this.side);
			console.log(i)
		}
	};




//count up (left click)
$("#d4c, #d4count").click(function() {
	document.getElementById('d4count').innerHTML = d4counter.countUp();
});

$("#d6c, #d6count").click(function() {
	document.getElementById('d6count').innerHTML = d6counter.countUp();
});

$("#d8c, #d8count").click(function() {
	document.getElementById('d8count').innerHTML = d8counter.countUp();
});

$("#d10c, #d10count").click(function() {
	document.getElementById('d10count').innerHTML = d10counter.countUp();
});

$("#d12c, #d12count").click(function() {
	document.getElementById('d12count').innerHTML = d12counter.countUp();
});

$("#d20c, #d20count").click(function() {
	document.getElementById('d20count').innerHTML = d20counter.countUp();
});

//count down (right click)







/**counterDice.prototype.countDown = function() {
		for(var i=0;i<totalSide;i++) {
			var count=totalSide - i;
			return count;
		}
	}; */