/************************************************************/
// ELOQUENT JAVASCRIPT - A MODERN INTRODUCTION TO PROGRAMMING 	
// CHAPTER 2: PROGRAM FLOW EXERCISES
/************************************************************/
 
// Looping a triangle
var hash = "#";
do {
	console.log(hash);
	hash += "#";
	//console.log(hash.length);
	} while (hash.length <= 7);


// FizzBuzz
var mod3, mod5;
for (var i = 1; i <= 100; i++){
	mod3 = i % 3;
	mod5 = i % 5;
	if(!mod3 && !mod5){
		console.log("FizzBuzz");
	} else if (!mod3){
		console.log("Fizz");
	} else if (!mod5){
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

// Chessboard

var gridsize = prompt("How big do you want the grid?");
var pattern = "* ";
var outputPattern = "";
for(var y = 0; y < gridsize; y++){
	for(var x = 0; x < gridsize; x++){
		outputPattern += pattern[(x+y)%2];
	}
	console.log(outputPattern);
	outputPattern = "";
}
