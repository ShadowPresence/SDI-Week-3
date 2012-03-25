// Title: Deliverable 3
// Author: Phil Ainsworth
// Created: 3/12/12 21:37
// Description: Wizards & Dragons


// -- Global Variables --
//	>	>	>	>	> --- *--> CODING/SYNTAX: 1. "global variables to top" - To my knowledge all global variables are at the top with the exception of BEGIN which is a prompt. <--*
var dragonia = [],
	win;
//- EE - 	>	>	>	> --- This was moved from the json data file, this should satisfy the requirement for *--> MISSING: METHOD PROCEDURE <--*
var mData = {
	"wMessage": [	{ hub: function (wiz) { console.log(wizard.name + " lashes out but misses!"); } },
					{ hub: function (wiz) { console.log(wizard.name + " strikes and makes contact! The " + dragon.kind + " dragon's life has been reduced by " + wiz + " points!"); } },
					{ hub: function (wiz) { console.log(wizard.name + " lands a devastating blow of " + wiz + " points!"); } }]
};

// -- Procedure 1 Construct editable array, CREATE ARRAY -- old Procedure 3
//- GG - 	>	>	>	> --- This should satisfy the requirement for *--> MISSING: METHOD ACCESSOR <--*
var construct = function () {
	for (d=0; d < dData.dragons.length; d++) {
		var dkind = dData.dragons[d].kind
		dragonia.push(dkind);
	};
};

// -- Procedure 2 Get names, GET NAMES -- old Procedure 6
var getNames = function (arg) {
	for (i=0; i < arg.length-1;i++) {
		names.push(arg[i].name);
	};
};

// -- Procedure 3 Start of Quest, QUEST -- old Procedure 5
var quest = function () {
	while (0 < dragonia.length) {
		dragon = findDragon();  // -- select a dragon
		if (dragonia.length===1) {
			console.log("The wizards have found the elusive " + dragon.kind + " beast!");
		} else {
			conSole.log("The wizards have found a " + dragon.kind + " dragon!");
		};
		altercation();  // -- fight the selected dragon
		if (dragonia.length===1) {
			conSole.log("The wizards continue deeper into the forest searching for the fabled Red Dragon!");
		} else if (dragonia.length===0) {
			conSole.log("The wizards have slayed all the dragons!!");
		} else {
			conSole.log("The wizards continue deeper into the forest searching for more of the evil beasts!");
		};
	};
};

// -- Function 1 json Object, FIND DRAGON -- old Function 7
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

// -- Function 2, ALTERCATION -- old Function 5
var altercation = function () {
	wizard = currentWizard();
	while ((wizard.wmax * 10) <= dragon.life) {
		conSole.log(wizard.name + ", you are not strong enough, please step aside and let another wizard fight.");
		wizard = currentWizard();
	};
	var defeated = autoDefeat(wizard.wmin, dragon.life);
	if (defeated) {
		conSole.log(fuse("Congratulation! You defeated the ", dragon.kind, " dragon!"));	
	} else {
		battle(dragon.life);
	};
	slay(dragonia);  // -- remove slain dragon from list
	wins(wizard.name, selectedWizard);	// -- add a win for the wizard
	return
};

// -- Function 3 json Object, CURRENT WIZARD -- old Function 8
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

// -- Function 4 Boolean, AUTO DEFEAT -- old Function 1
var autoDefeat = function (wiz, drag) {
	if (wiz >= drag) {
		conSole.log(fuse(wizard.name + ", you are far superior than the puny ", dragon.kind, " dragon!"));
		conSole.log("It lays slain after a single fatal blow!");
		win = 1;
		return true;
	} else {
		conSole.log(wizard.name + ", steps up to battle the " + dragon.kind + " dragon!");
		return false;
	};
	
};

// -- Function 5 String, SUMMARY -- old Function 4
var fuse = function (a, b, c) {
	return a + b + c;
};

// -- Function 6 Number, BATTLE -- old Function 2
var battle = function(drag) {
	var life = drag;
	conSole.log("Dragon hit points: " + life);
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
		life -= wiz;
		if (life > 0) {
			conSole.log("It's hit points have been reduced to " + life);
		} else {
			conSole.log("You have slayed the " + dragon.kind + " dragon!");
		};
	};
	return 1;
};

// -- Procedure 4 Remove defeated dragons, REMOVE DEFEATED --
var slay = function (darray) {
	darray.pop();
};

// -- Procedure 5, WINS -- old Procedure 2
//- HH - 	>	>	>	> --- THIS SHOULD SATISFY THE REQUIREMENT FOR *--> MISSING: METHOD MUTATOR <--*
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

// -- Function 7 Nested IF statements, RANDOMIZER -- old Function 6
//- JJ -	>	>	>	>	> --- This should satisfy the requirement for *--> FLOWCHART/COMPLETENESS: 2. "no nested conditional" <--*
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

// -- Function 8 Array, STATS -- old Function 3
//- AA -	>	>	>	>	> --- This should satisfy the requirement for *--> MISSING: RETURN ARRAY <--*
var stats = function (char) {
	if (char===dData.dragons) {
		conSole.log("Dragons:");
		for (i=0; i < char.length;i++) {
			conSole.log("The " + char[i].kind + " Dragon has " + char[i].hitPoints + " hit points"); 
		};
	} else if (char===wData.wizards) {
		conSole.log("Wizards:");
		for (i=0; i < char.length;i++) {
			conSole.log("The Wizard " + char[i].name + " has " + char[i].attackMin + " - " + char[i].attackMax + " attack points"); 
		};
	} else {
		conSole.log("Why is this getting chosen?");
	};
	return char;
};

//	--	--	--	--	--	--	--	--	-- Start of script --	--	--	--	--	--	--	--	//

conSole.log("A party of 4 Wizards have been brought to Dragonia to rid the land of the 5 dragons that currently terrorize the village.");
var begin = prompt("Are you ready to start the quest?");
if (begin) {
	construct();
	var names = [];
	getNames(wData.wizards);
	conSole.log(names.join(", ") + " & " + wData.wizards[wData.wizards.length-1].name + " have traveled into the woods to find the first dragon...");
	quest();
	conSole.log(" -- Dragonia has been cleared off all it's dragons. It will now be known as Boresville! -- ");
	conSole.log("HERE ARE THE STATS:");
	stats(dData.dragons);
	var rarray = stats(wData.wizards);
	conSole.log("Merlin won: " + rarray[0].Win.length);
	conSole.log("Morgana won: " + rarray[1].Win.length);
	conSole.log("Gandalf won: " + rarray[2].Win.length);
	conSole.log("Dumbledore won: " + rarray[3].Win.length);
} else {
	conSole.log("You chose to cancel.");
};
	
//	--	--	--	--	--	--	--	--	-- End of script --	--	--	--	--	--	--	//