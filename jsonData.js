// Title: Deliverable 3
// Author: Phil Ainsworth
// Created: 3/12/12 21:37
// Description: Wizards & Dragons

	
	
var dData = {
	"dragons": [
		{
			"kind": "Red",
			"hitPoints": 2000,
			"attackMin": 125,
			"attackMax": 325
		},
		{
			"kind": "Blue",
			"hitPoints": 1000,
			"attackMin": 150,
			"attackMax": 250
		},
		{
			"kind": "Green",
			"hitPoints": 500,
			"attackMin": 50,
			"attackMax": 150
		},
		{
			"kind": "RazorBack",
			"hitPoints": 250,
			"attackMin": 200,
			"attackMax": 200
		},
		{
			"kind": "Gorgonthaller",
			"hitPoints": 125,
			"attackMin": 0,
			"attackMax": 100
		}
	]
};

var wData = {
	"wizards": [
		{
			"name": "Merlin",
			"hitPoints": 1500,
			"attackMin": 350,
			"attackMax": 500,
			"Win": []
		},
		{
			"name": "Morgana",
			"hitPoints": 1000,
			"attackMin": 100,
			"attackMax": 400,
			"Win": []
		},
		{
			"name": "Gandalf",
			"hitPoints": 1200,
			"attackMin": 200,
			"attackMax": 200,
			"Win": []
		},
		{
			"name": "Dumbledore",
			"hitPoints": 800,
			"attackMin": 0,
			"attackMax": 100,
			"Win": []
		}
	]
};

var mData = {
	"dMessage": [ 	{ hub: function () { return "The " + dragon.kind + " dragon strikes but was unable to make contact!"; } },
					{ hub: function () { return "The " + dragon.kind + " dragon strikes and makes contact!"; } },
					{ hub: function () { return "The " + dragon.kind + " dragon lands a devastating blow!"; } }],
	"wMessage": [	{ hub: function (wiz) { return wizard.name + " lashes out but misses!"; } },
					{ hub: function (wiz) { return wizard.name + " strikes and makes contact! The " + dragon.kind + " dragon's life has been reduced by " + wiz + " points!"; } },
					{ hub: function (wiz) { return wizard.name + " lands a devastating blow of " + wiz + " points!"; } }]
};