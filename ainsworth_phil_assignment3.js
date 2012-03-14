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
	wizAmount;
	
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
		logIt(fuse("You are far superior than the puny ", dragons[selectedDragon], " dragon!"));
		logIt("It lays slain after a single fatal blow!");
		win = 1;
		return true;
	} else {
		logIt(wizards[selectedWizard] + ", prepare to battle the " + dragons[selectedDragon] + " dragon!");
		return false;
	};
	
};

// -- Function 2 Number, BATTLE --
var battle = function(wiz, drag) {
	var strike = drag;
	logIt("Dragon hit points: " + strike);
	logIt("Your attack ability is rated at: " + wiz);
	while (wiz < strike) { 
		strike -= wiz;
		logIt("You hit the dragon! It's hit points have been reduced to " + strike);
	};
	logIt("Consider the dragon slain!")
	return 1;
}

// -- Function 3 Array, STATS --
var stats = function (char, power) {
	if (char===dragons) {
		logIt("Dragons:");
		for (i=0; i<char.length;i++) {
			logIt("The " + char[i] + " Dragon has " + power[i] + " hit points"); 
		};
	} else if (char===wizards) {
		logIt("Wizards:");
		for (i=0; i<char.length;i++) {
			logIt("The Wizard " + char[i] + " has " + power[i] + " attack points"); 
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

// -- Extra Function, SESSIONS --
/* var sessionLength = function (loops) {
	for (i=0; i < loops; i++) {
		// -- More user input variables
		// -- old method -- selectedWizard = wizards.indexOf(prompt ("Please select a wizard for battle #" + (i+1) + ": " + wizards.join(", ")));
		// -- old method -- selectedDragon = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));
		seletedWizard = wData.wizards[randomizer(0, 3)].name;
		selectedDragon = dData.dragons[randomizer(0, 4)].kind;
		var defeated = autoDefeat(wizardap[selectedWizard], dragonhp[selectedDragon]);
		if (defeated) {
			logIt(fuse("Congratulation! You defeated the ", dragons[selectedDragon], " dragon!"));	
		} else {
		battle(wizardap[selectedWizard], dragonhp[selectedDragon]);
		};
		wins(wizards[selectedWizard]);
	};
	return i;
}; */

// -- Function 6 Nested IF statements, Randomizer
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



// -- Start of script --


	
// -- User input variables
//alert("A party of 4 Wizards has been brought to Dragonia to rid the land of the 5 dragons that currently terrorize the village.");
//alert("They have traveled into the woods to find the first dragon.");
// var numberOfBattles = prompt("How many battles would you like to fight today?");

//			var seletedWizard = wData.wizards[randomizer(0, 3)].name;

		var x = function () {
			var selectedDragon = randomizer(0, 5);
			var life = dData.dragons[selectedDragon].hitPoints;
			var kind = dData.dragons[selectedDragon].kind;
			var dmin = dData.dragons[selectedDragon].attackMin;
			var dmax = dData.dragons[selectedDragon].attackMax;
			var attack = randomizer(dmin, dmax);
			// dData.dragons[selectedDragon].ranAttack;
			// var add = function (y) { attack.push(y) };
			// var z = randomizer(dmin, dmax);
			// add(z);
			return {
				"life": life,
				"kind": kind,
				"dmin": dmin,
				"dmax": dmax,
				"attack": attack
			};
		};
		
		var dragon = x();
		logIt(dragon.kind);
		logIt(dragon.life);
		logIt(dragon.dmin);
		logIt(dragon.dmax);
		logIt(dragon.attack);
		//logIt(wData.wizards[randomizer(0, dData.dragons.length)].name);
		//logIt(dData.dragons[randomizer(0, wData.wizards.length)].kind);
		//logIt(dData.dragons[0].ranAttack);

		// randomizer(attackMin, attackMax)

/*		var sessions = sessionLength();
		logIt(" -- The battles have completed! -- ");
		logIt("HERE ARE THE STATS:");
		var dragAmount = stats(dragons, dragonhp);
		var wizAmount = stats(wizards, wizardap);
		logIt("The last battle was fought by " + wizAmount[selectedWizard] + " who defeated the " + dragAmount[selectedDragon] + " dragon.");
		logIt("Merlin won: " + merlinWin.length);
		logIt("Morgana won: " + morganaWin.length);
		logIt("Gandalf won: " + gandalfWin.length);
		logIt("Dumbledore won: " + dumbledoreWin.length);
		logIt("You played " + sessions + " sessions");
		
*/



// -- Start calling functions
/* if (!numberOfBattles) {
		logIt("You chose to cancel.");
	} else {

}; */


