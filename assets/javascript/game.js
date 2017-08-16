

// Counters and other needed vars
var rocketShipNum = 0;
var spaceManNum = 0;
var moonNum = 0;
var sunNum = 0;

// when random numbers are added up from clicking images
var scoreNow = 0;

// the random number created /
var scoreToMeet = 0;


// playing some music still not working

$(document).ready(function() {

// trying to add music ******
	  // // Gets Link for Theme Song, i think 
   //    var audioElement = document.createElement("audio");
   //    audioElement.setAttribute("src", "/apolloMoon.mp3");
   //    // Theme Button
   //    $(".theme-button").on("click", function() {
   //      audioElement.play();
   //    });
   //    $(".pause-button").on("click", function() {
   //      audioElement.pause();
   //    });


//This function will run when it is time to reset the game, which will set all of the following values back to 0.
	function resetGame(){
	    scoreToMeet = 0;
	    scoreNow = 0;
		rocketShipNum = 0;
		spaceManNum = 0;
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
	function playAgain(){
 	//When the button is clicked, the following will occur. It will set the following values to 0, call the given score function, and hide the div with the gems, for a cleaner look.
 	$("#buttonReset").click(function(){
 		scoreToMeet = 0;
 		scoreNow = 0;
		rocketShipNum = 0;
		spaceManNum = 0;
		moonNum = 0;
		sunNum = 0; 
 		givenScore(); // function created row 122
 		$("#buttonReset").hide(); //pulls index.html row 99
 		$("#gemRow").show(); // pulls index.html row 103 
 		imgPic(); // function created row 66
 	  });
    };

// // function imgPic creates a randon number 1-12
    function imgPic () {
 		var crystalRocketShip = Math.floor(Math.random() * 12 + 1);
		var crystalSpaceMan = Math.floor(Math.random() * 12 + 1);
		var crystalMoon = Math.floor(Math.random() * 12 + 1);
		var crystalSun = Math.floor(Math.random() * 12 + 1);

		// pulls index.html row 107 and adds attritubtes 
		$("#sunGem").attr("data-imgValue", crystalSun);

		// pulls index.html row 110 and adds attritubtes 
		$("#moonGem").attr("data-imgValue", crystalMoon);

		// pulls index.html row 114 and adds attritubtes 
		$("#spaceManGem").attr("data-imgValue", crystalSpaceMan);
		
		// pulls index.html row 117 and adds attritubtes 
		$("#rocketShipGem").attr("data-imgValue", crystalRocketShip);
    };

    imgPic(); 

   $(document).on("click", ".gems", function() {
   	  // this is refering to imgPic row 66
   	 var imgDataValue = $(this).data("imgValue")

   	 scoreNow += imgDataValue;

   	 if (scoreNow > scoreToMeet){
  			losses++;
  			$("#losses").html('Losses: ' + losses);
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
 		    playAgain();
  		}
  
  		if (scoreNow === scoreToMeet){
  			wins++;
  			$("#wins").html('Wins: ' + wins);
 			resetGame();
 			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
        }

});
//  This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
   	function scoreKeeper(){
  		if (scoreNow > scoreToMeet){
  			losses++;
  			$("#losses").html('Losses: ' + losses);
			resetGame();
			$("#buttonReset").show();
			$("#gemRow").hide();
 		    playAgain();
  		}
  
  		if (scoreNow == scoreToMeet){
  			wins++;
  			$("#wins").html('Wins: ' + wins);
 			resetGame();
 			$("#buttonReset").show();
			$("#gemRow").hide();
			playAgain();
  		};
  	};

//  Headed to the Global Variables	to generate random numbers

var crystalRocketShip = Math.floor(Math.random() * (12 + 1));
var crystalSpaceMan = Math.floor(Math.random() * (12 + 1));
var crystalMoon = Math.floor(Math.random() * (12 + 1));
var crystalSun = Math.floor(Math.random() * (12 + 1));


	//This function will provide the score to match, 
	//through generating a random number. 
	// It will then populate the HTML with this number.
	function givenScore(){
		scoreToMeet = Math.floor((Math.random() * (120-19 + 1)) + 19);
		$("#scoreToMeet").html = scoreToMeet ;
// document.getElementById("scoreToMeet").innerHTML = scoreToMeet;
	};

    //This will call the givenScore function.
	givenScore();
});