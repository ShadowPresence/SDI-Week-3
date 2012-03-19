// Title: Deliverable 3
// Author: Phil Ainsworth
// Created: 3/12/12 21:37
// Description: Wizards & Dragons


// -- Variable Farm --
var dragonia = [],
	win;

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

// -- Procedure 2, WINS --
var wins = function (array, index) {
	if (array==="Merlin") {
		wData.wizards[index].Win.push(win);
	} else if (array==="Morgana") {
		wData.wizards[index].Win.push(win);
	} else if (array==="Gandalf") {
		wData.wizards[index].Win.push(win);
	} else if (array==="Dumbledore") {
		wData.wizards[index].Win.push(win);
	} else return;
};

// -- Procedure 3 Construct editable array, CREATE ARRAY --
var construct = function () {
	for (d=0; d < dData.dragons.length; d++) {
		var dkind = dData.dragons[d].kind
		dragonia.push(dkind);
	};
};

// -- Procedure 4 Remove defeated dragons, REMOVE DEFEATED --
var slay = function (darray) {
	darray.pop();
};

// -- Procedure 5 Start of Quest, QUEST --
var quest = function () {
	while (0 < dragonia.length) {
		dragon = findDragon();  // -- select a dragon
		if (dragonia.length===1) {
			logIt("The wizards have found the elusive " + dragon.kind + " beast!");
		} else {
			logIt("The wizards have found a " + dragon.kind + " dragon!");
		};
		altercation();  // -- fight the selected dragon
		if (dragonia.length===1) {
			logIt("The wizards continue deeper into the forest searching for the fabled Red Dragon!");
		} else if (dragonia.length===0) {
			logIt("The wizards have slayed all the dragons!!");
		} else {
			logIt("The wizards continue deeper into the forest searching for more of the evil beasts!");
		};
	};
};

// -- Procedure 6 Get names, GET NAMES --
var getNames = function (arg) {
	for (i=0; i < arg.length-1;i++) {
		names.push(arg[i].name);
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
		logIt(wizard.name + ", steps up to battle the " + dragon.kind + " dragon!");
		return false;
	};
	
};

// -- Function 2 Number, BATTLE --
var battle = function(drag) {
	var life = drag;
	logIt("Dragon hit points: " + life);
	while (life > 0) { 
		var wiz = randomizer(wizard.wmin, wizard.wmax);
		if (wiz === 0) {
			var M = 0;
		} else if ( wiz === wizard.wmax) {
			var M = 2;
		} else {
			var M = 1;
		};
		var talkSmack = mData.wMessage[M].hub;
		logIt(talkSmack(wiz));
		life -= wiz;
		if (life > 0) {
			logIt("It's hit points have been reduced to " + life);
		} else {
			logIt("You have slayed the " + dragon.kind + " dragon!");
		};
	};
	return 1;
};

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
			logIt("The Wizard " + char[i].name + " has " + char[i].attackMin + " - " + char[i].attackMax + " attack points"); 
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
	while ((wizard.wmax * 10) <= dragon.life) {
		logIt(wizard.name + ", you are not strong enough, please step aside and let another wizard fight.");
		wizard = currentWizard();
	};
	var defeated = autoDefeat(wizard.wmin, dragon.life);
	if (defeated) {
		logIt(fuse("Congratulation! You defeated the ", dragon.kind, " dragon!"));	
	} else {
		battle(dragon.life);
	};
	slay(dragonia);  // -- remove slain dragon from list
	wins(wizard.name, selectedWizard);	// -- add a win for the wizard
	return
};

// -- Function 6 Nested IF statements, RANDOMIZER --
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

// -- Function 7 json Object, FIND DRAGON --
var findDragon = function () {
	for (selectedDragon=0; selectedDragon < dragonia.length; selectedDragon++) {
		var kind = dData.dragons[selectedDragon].kind;
		var life = dData.dragons[selectedDragon].hitPoints;
		var dmin = dData.dragons[selectedDragon].attackMin;
		var dmax = dData.dragons[selectedDragon].attackMax;
	}
	return {
		"life": life,
		"kind": kind,
		"dmin": dmin,
		"dmax": dmax
	};
};

// -- Function 8 json Object, CURRENT WIZARD --
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


// -- Start of script --
logIt("A party of 4 Wizards have been brought to Dragonia to rid the land of the 5 dragons that currently terrorize the village.");
var begin = prompt("Are you ready to start the quest?");
if (begin) {
	construct();
	var names = [];
	getNames(wData.wizards);
	logIt(names.join(", ") + " & " + wData.wizards[wData.wizards.length-1].name + " have traveled into the woods to find the first dragon...");
	quest();
	logIt(" -- Dragonia has been cleared off all it's dragons. It will now be known as Boresville! -- ");
	logIt("HERE ARE THE STATS:");
	stats(dData.dragons);
	var rarray = stats(wData.wizards);
	logIt("Merlin won: " + rarray[0].Win.length);
	logIt("Morgana won: " + rarray[1].Win.length);
	logIt("Gandalf won: " + rarray[2].Win.length);
	logIt("Dumbledore won: " + rarray[3].Win.length);
} else {
	logIt("You chose to cancel.");
};
	
// -- End of Script --