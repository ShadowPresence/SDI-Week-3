// Title: Deliverable 3
// Author: Phil Ainsworth
// Created: 3/12/12 21:37
// Description: Wizards & Dragons

// -- Variable Farm --
var merlinWin = [],
	morganaWin = [],
	gandalfWin = [],
	dumbledoreWin = [];
var win,
	dragAmount,
	wizAmount,
	wizard,
	dragon,
	selectedDragon,
	selectedWizard;
	
// -- Functions --
// -- Procedure 1, LOGIT --
var logIt = function (input) {
	if (input >= 0) {
		console.log(input);
	} else if (!input) {
		console.log("We have nothing to log.");
	} else {
		console.log(input);
	};
};

// -- Function 1 Boolean, AUTO DEFEAT --
var autoDefeat = function (wiz, drag) {
	if (wiz >= drag) {
		logIt(fuse(wizard.name + ", you are far superior than the puny ", dragon.kind, " dragon!"));
		logIt("It lays slain after a single fatal blow!");
		win = 1;
		return true;
	} else {
		logIt(wizard.name + ", prepare to battle the " + dragon.kind + " dragon!");
		return false;
	};
	
};

// -- Function 2 Number, BATTLE --
var battle = function(drag) {
	var strike = drag;
	logIt("Dragon hit points: " + strike);
	// logIt("Your attack ability is rated at: " + wiz);
	while (strike > 0) { 
		var wiz = randomizer(wizard.wmin, wizard.wmax);
		logIt(wizard.name + "strikes with a blow of " + wiz);
		strike -= wiz;
		logIt("You hit the dragon! It's hit points have been reduced to " + strike);
	};
	logIt("Consider the dragon slain!")
	return 1;
}

// -- Function 3 Array, STATS --
var stats = function (char) {
	if (char===dData.dragons) {
		logIt("Dragons:");
		for (i=0; i < char.length;i++) {
			logIt("The " + char[i].kind + " Dragon has " + char[i].hitPoints + " hit points"); 
		};
	} else if (char===wData.wizards) {
		logIt("Wizards:");
		for (i=0; i < char.length;i++) {
			logIt("The Wizard " + char[i].name + " has " + char[i].attackMax + " attack points"); 
		};
	} else {
		logIt("Why is this getting chosen?");
	};
	return char;
};

// -- Function 4 String, SUMMARY --
var fuse = function (a, b, c) {
	return a + b + c;
};

// -- Function 5, ALTERCATION --
var altercation = function () {
	wizard = currentWizard();
	var defeated = autoDefeat(wizard.wmin, dragon.life);
	if (defeated) {
		logIt(fuse("Congratulation! You defeated the ", dragon.kind, " dragon!"));	
	} else {
	battle(dragon.life);
	};
	remove(dData.dragons[selectedDragon]);  // -- remove slain dragon from list
	wins(wizard.name);
};

var quest = function (loops) {
	var i = 0
	while (i < loops) {
		
	};
};

// -- Function 6 Nested IF statements, RANDOMIZER
var randomizer = function (min, max) {
	var rand = Math.floor(Math.random() * max);
	if (rand < min) {
		var x = rand += min;
			if (x > max) {
				var dif = x - max;
				rand = x - dif;
			};
	};
	return rand;
};

// -- Extra Procedure, WINS --
var wins = function (array) {
	if (array==="Merlin") {
		merlinWin.push(win);
	} else if (array==="Morgana") {
		morganaWin.push(win);
	} else if (array==="Gandalf") {
		gandalfWin.push(win);
	} else if (array==="Dumbledore") {
		dumbledoreWin.push(win);
	} else return;
};

// -- Function 7 json Object, FIND DRAGON
var findDragon = function () {
	selectedDragon = randomizer(0, dData.dragons.length);
	var kind = dData.dragons[selectedDragon].kind;
	var life = dData.dragons[selectedDragon].hitPoints;
	var dmin = dData.dragons[selectedDragon].attackMin;
	var dmax = dData.dragons[selectedDragon].attackMax;
	var dattack = randomizer(dmin, dmax);
	return {
		"life": life,
		"kind": kind,
		"attack": dattack
	};
};

// -- Function 8 json Object, CURRENT WIZARD
var currentWizard = function () {
	selectedWizard = randomizer(0, wData.wizards.length);
	var name = wData.wizards[selectedWizard].name;
	var life = wData.wizards[selectedWizard].hitPoints;
	var wmin = wData.wizards[selectedWizard].attackMin;
	var wmax = wData.wizards[selectedWizard].attackMax;
	return {
		"life": life,
		"name": name,
		"wmin": wmin,
		"wmax": wmax
	};
};

// -- Function 9 Remove json data, REMOVE DEFEATED

// -- Start of script --
logIt("A party of 4 Wizards has been brought to Dragonia to rid the land of the 5 dragons that currently terrorize the village.");
// var begin = prompt("Are you ready to start the quest?");
// if (begin) {
	logIt("They have traveled into the woods to find the first dragon...");
	var dragon = findDragon();  // -- select a dragon
	logIt("The wizards have found a " + dragon.kind + " dragon!");
	// var q = quest(dData.dragons.length);
	var f = altercation();  // -- fight the selected dragon

// -- User input variables

		logIt(" -- The battles have completed! -- ");
		logIt("HERE ARE THE STATS:");
		dragAmount = stats(dData.dragons);
		wizAmount = stats(wData.wizards);
		logIt("Merlin won: " + merlinWin.length);
		logIt("Morgana won: " + morganaWin.length);
		logIt("Gandalf won: " + gandalfWin.length);
		logIt("Dumbledore won: " + dumbledoreWin.length);		
		

logIt("END OF SCRIPT");
// };
// -- End of Script --


/*		var sessions = sessionLength();

		logIt("The last battle was fought by " + wizAmount[selectedWizard] + " who defeated the " + dragAmount[selectedDragon] + " dragon.");

		logIt("You played " + sessions + " sessions");
		
*/

		// -- More user input variables
		// -- old method -- selectedWizard = wizards.indexOf(prompt ("Please select a wizard for battle #" + (i+1) + ": " + wizards.join(", ")));
		// -- old method -- selectedDragon = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));
		// seletedWizard = wData.wizards[randomizer(0, 3)].name;
		// selectedDragon = dData.dragons[randomizer(0, 4)].kind;

// -- Start calling functions
/* if (!numberOfBattles) {
		logIt("You chose to cancel.");
	} else {

}; */


// var numberOfBattles = prompt("How many battles would you like to fight today?");

//			var seletedWizard = wData.wizards[randomizer(0, 3)].name;


		
		