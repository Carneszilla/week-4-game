$(document).ready(function () {

	// Counters and other needed vars
	var plutoNum = 0;
	var marsNum = 0;
	var moonNum = 0;
	var sunNum = 0;

	// when random numbers are added up from clicking images
	var scoreNow = 0;

	// the random number created for game to even start/
	var scoreToMeet = 0

	var wins = 0;
	var losses = 0;



	// Gets Link for music
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("src", "assets/javascript/apolloMoon.mp3");
	// Theme Button
	$(".theme-button").on("click", function () {
		audioElement.play();
	});
	$(".pause-button").on("click", function () {
		audioElement.pause();
	});

	//This function will run when it is time to reset the game, which will set all of the following values back to 0.
	function resetGame() {
		scoreToMeet = 0;
		scoreNow = 0;
		plutoNum = 0;
		marsNum = 0;
		moonNum = 0;
		sunNum = 0;
		givenScore(); // function created row 122
		//pulled from html row 99
		$("#buttonReset").hide();
		//pulled from html row 103 
		$("#gemRow").show();
		imgPic(); // function created row 66
	};
	//TRYING TO CREATE A RESET BUTTON
	// function playAgain() {
	// 	//When the button is clicked, the following will occur. It will set the following values to 0, call the given score function, and hide the div with the gems, for a cleaner look.
	// 	$("#buttonReset").click(function () {
	// 		scoreToMeet = 0;
	// 		scoreNow = 0;
	// 		rocketShipNum = 0;
	// 		spaceManNum = 0;
	// 		moonNum = 0;
	// 		sunNum = 0;
	// 		givenScore(); // function created row 122
	// 		$("#buttonReset").hide(); //pulls index.html row 99
	// 		$("#gemRow").show(); // pulls index.html row 103 
	// 		imgPic(); // function created row 66
	// 	});
	// };

	// // function imgPic creates a randon number 1-12
	function imgPic() {
		var crystalPluto = Math.floor(Math.random() * 12 + 1);
		var crystalMars = Math.floor(Math.random() * 12 + 1);
		var crystalMoon = Math.floor(Math.random() * 12 + 1);
		var crystalSun = Math.floor(Math.random() * 12 + 1);

		// pulls index.html row 107 and adds attritubtes 
		$("#sunGem").attr("data-imgValue", crystalSun);

		// pulls index.html row 110 and adds attritubtes 
		$("#moonGem").attr("data-imgValue", crystalMoon);

		// pulls index.html row 114 and adds attritubtes 
		$("#marsGem").attr("data-imgValue", crystalMars);

		// pulls index.html row 117 and adds attritubtes 
		$("#plutoGem").attr("data-imgValue", crystalPluto);
	};

	imgPic();

	$("body").on("click", ".gems", function () {
		console.log("something happened")
		// this is refering to imgPic row 66
		var imgDataValue = parseInt($(this).attr("data-imgValue"))

		scoreNow += imgDataValue;
		$("#scoreNow").text("Your score: " + scoreNow)
		if (scoreNow > scoreToMeet) {
			losses++;
			$("#losses").html('Losses: ' + losses);
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
			resetGame();
		}

		if (scoreNow === scoreToMeet) {
			wins++;
			$("#wins").html('Wins: ' + wins);
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
			resetGame();
		}

	});
	//  This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
	function scoreKeeper() {
		if (scoreNow > scoreToMeet) {
			losses++;
			$("#losses").html('Losses: ' + losses + " " + "You get NOTHING!!!");
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
		}

		if (scoreNow === scoreToMeet) {
			wins++;
			$("#wins").html('Wins: ' + wins + " " +"Look at you so fancy");
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
		};
	};

	//  Headed to the Global Variables	to generate random numbers

	// var crystalRocketShip = Math.floor(Math.random() * (12 + 1));
	// var crystalSpaceMan = Math.floor(Math.random() * (12 + 1));
	// var crystalMoon = Math.floor(Math.random() * (12 + 1));
	// var crystalSun = Math.floor(Math.random() * (12 + 1));


	//This function will provide the score to match, 
	//through generating a random number. 
	// It will then populate the HTML with this number.
	function givenScore() {
		scoreToMeet = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
		$("#scoreToMeet").html(scoreToMeet);
		// document.getElementById("scoreToMeet").innerHTML = scoreToMeet;
	};

	//This will call the givenScore function.
	givenScore();
});