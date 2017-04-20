//Global Variables 

var wins = 0;
var losses = 0;
var addition = 0;


//Assigns Random Values to Randome Number and Crystals using math floor
var randomnumber = Math.floor((Math.random()* 100) + 19);
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

//updates addition in html
var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	addition = 0;
    randomnumber = Math.floor((Math.random()* 100) + 19);

	$('.randomnumber').empty();
	$('.randomnumber').append(randomnumber);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
    updateAddition();
}
var logic = function (){
	if (addition == randomnumber) {
		wins ++;
		restart();
	}else if(addition > randomnumber){
		losses ++;
		restart();
	}else{
		updateAddition();
	}
}
$('.randomnumber').append(randomnumber);

$('.addition').append(addition);
//function

$(document).ready(function(){
	$('#red').click(function(){
		addition = addition + red;
		logic();
	})
	$('#blue').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#green').click(function(){
		addition = addition + green;
		logic();
	})
});







