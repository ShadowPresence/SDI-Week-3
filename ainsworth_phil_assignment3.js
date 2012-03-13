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
	if (!input) {
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
var sessionLength = function (loops) {
	for (i=0; i < loops; i++) {
		// -- More user input variables
		selectedWizard = wizards.indexOf(prompt ("Please select a wizard for battle #" + (i+1) + ": " + wizards.join(", ")));
		selectedDragon = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));
		var defeated = autoDefeat(wizardap[selectedWizard], dragonhp[selectedDragon]);
		if (defeated) {
			logIt(fuse("Congratulation! You defeated the ", dragons[selectedDragon], " dragon!"));	
		} else {
		battle(wizardap[selectedWizard], dragonhp[selectedDragon]);
		};
		wins(wizards[selectedWizard]);
	};
	return i;
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
var numberOfBattles = prompt("How many battles would you like to fight today?");

// -- Start calling functions
if (!numberOfBattles) {
		logIt("You chose to cancel.");
	} else {
		var sessions = sessionLength(numberOfBattles);
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
};





