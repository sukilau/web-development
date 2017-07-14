var target;
var guess;
var guess_count = 0;
var finished = false;
var colors = ["aqua", "blue", "fuchsia", "green", "lime", "maroon", 
			"navy", "olive", "purple", "red", "teal", "yellow"];

function do_game(){

    var rand = Math.random() * colors.length;
    var rand_no = Math.floor(rand);
    target = colors[rand_no];
    console.log("target = "+target);

	while (!finished) {
		guess = prompt("I am thinking of one of these colors : \n\n" + 
						"aqua, blue, fuchsia, green, lime, maroon, navy, olive, purple, red, teal, yellow\n\n" +
						"What color am I thinking of?");
		guess = guess.toLowerCase()
		guess_count += 1;
		console.log("number of guesses = "+guess_count+"\nguess = "+guess);
        finished = check_guess();
    };          
}

function check_guess(){

	console.log("enter again = "+(guess.length==0 || colors.indexOf(guess)==-1));

    if (guess.length==0 || colors.indexOf(guess)==-1) {
        alert("Sorry, I don't recognize your color.\n\nPlease try again");
        return false;
    }
    else if (guess < target) {
        alert("Sorry, your guess is not correct!\n\n"+
        		"Hint: your color is alphabetically lower than mine.\n\nPlease try again.");
        console.log(guess+" < "+target);
        return false;
    }
    else if (guess > target) {
        alert("Sorry, your guess is not correct!\n\n"+
        		"Hint: your color is alphabetically higher than mine.\n\nPlease try again.");
        console.log(guess+" > "+target);
        return false;
    }
    else {
    	alert("Congratulations! You have guessed the color!\n\nIt took you " + 
    			guess_count + " guesses to finish the game!\n\nYou can see the color in the background.");
    	document.getElementsByTagName("body")[0].style.background = target;
		var h = document.createElement("h1") 
		var t = document.createTextNode("Congrates!! You Win :)");
		h.appendChild(t);
		document.body.appendChild(h);     
    	return true;
    }   
}