
$(document).ready(function(){

// Initial display numbers generated
// Random number generated
var score = 0;
var wins = 0;
var losses = 0;
var chooseGem;
var chooseGem1;
var chooseGem2;
var chooseGem3;


var ranDisplayNumber = [];

    for(var i = 19; i <= 120; i++) {
	ranDisplayNumber.push(i);
}
var gemValue = [];
	for(var i = 1; i<=12; i++) {
		gemValue.push(i);
	}
chooseGem = gemValue[Math.floor(Math.random() * gemValue.length)];
chooseGem1 = gemValue[Math.floor(Math.random() * gemValue.length)];
chooseGem2 = gemValue[Math.floor(Math.random() * gemValue.length)];
chooseGem3 = gemValue[Math.floor(Math.random() * gemValue.length)];

console.log(ranDisplayNumber)

var chooseNumber = ranDisplayNumber[Math.floor(Math.random() * ranDisplayNumber.length)];
console.log(chooseNumber)

// Inserts generated values into HTML

$("#ranNum").html(chooseNumber);


$("#diamond").on("click", function() {
	
     score = chooseGem + score;

	$("#totalScore").html("Total Score: " + score);
	endgame();
	
});

$("#redDiamond").on("click", function() {
	
    
     score = chooseGem1 + score;

	$("#totalScore").html("Total Score: " + score);
	endgame();

	
});

$("#saphire").on("click", function() {
	
     score = chooseGem2 + score;
	$("#totalScore").html("Total Score: " + score);
	endgame();
	
});

$("#topaz").on("click", function() {
	
     score = chooseGem3 + score;

	$("#totalScore").html("Total Score: " + score);
	endgame();
	
});

// Sets scores and alerts for win/lose situations

function endgame() {
	if(score === chooseNumber) {
		alert("You win!!");
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}

	else if(score > chooseNumber) {
		alert("You lose :(");
		losses++;
		$("#losses").html("Losses: " + losses);
		reset();
	}
}

// Resets all game settings

function reset() {
	score = 0;
		$("#totalScore").html("Total Score: " + score);
		chooseNumber = ranDisplayNumber[Math.floor(Math.random() * ranDisplayNumber.length)];
		$("#ranNum").html(chooseNumber);
		chooseGem = gemValue[Math.floor(Math.random() * gemValue.length)];
		chooseGem1 = gemValue[Math.floor(Math.random() * gemValue.length)];
		chooseGem2 = gemValue[Math.floor(Math.random() * gemValue.length)];
		chooseGem3 = gemValue[Math.floor(Math.random() * gemValue.length)];
}


});

	