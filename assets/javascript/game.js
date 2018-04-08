// 4 crystals
// each crystal and score has a random different value every time the game is reset (win or loss)
// The random score number shown must be from 19-120  
// The random crystal value should be from 1 - 12

//when clicking any crystal, it should add to the previous result

// increment a win when you tie with the random number
// incremet a loss by going over the random number generated
// At the end, wether win or lose, the game must reset and so should the value of every crystal and score


var random_result;
var loss=0;
var wins=0;
var previous = 0;

// Start Game Function

var startGame = function () {

    $(".crystals").empty();

    var images = ['../images/sapphire.jpg', 
    //"../images/emerald.jpg", 
    'http://via.placeholder.com/150x150',
    '../images/ruby.png', 
    '../images/purple.jpg'];
   
    // Generate a number between 19 and 120
    random_result = Math.floor(Math.random() * 102) + 19;
    console.log(random_result);

    // Paste the result into the <p> element I made in html
    $("#result").html('Try to Match: ' + random_result);

    // A generic for loop that does 4 times whatever I put inside this function
    for(var i=0; i < 4; i++) {

        var random = Math.floor(Math.random () * 12) + 1;
        

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
    // Trying to code different images in the arrays below
            crystal.css({
                "background-image": "url('" + images[i] + "');", 
                "background-size": "cover"

            });
        

         // $(crystal).html(random); (Shows the Answer  )

        $(".crystals").append(crystal);

        
    }
    $("#previous").html("Current Score: "+ previous);
}



startGame();



// Click functions below
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Current Score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        //console.log("you suck!");

        loss++;

        $("#lost").html("Losses: " + loss);

        previous = 0;

        startGame();
    }

    else if (previous === random_result) {

      //  console.log("You won!");

        wins++;

        $("#win").html("Wins: "+ wins);

        previous = 0;

        startGame();
    }

    
});

    



