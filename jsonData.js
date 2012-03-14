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
			"attackMax": 325,
			"ranAttack": []
		},
		{
			"kind": "Blue",
			"hitPoints": 1000,
			"attackMin": 150,
			"attackMax": 250,
			"ranAttack": []
		},
		{
			"kind": "Green",
			"hitPoints": 500,
			"attackMin": 50,
			"attackMax": 150,
			"ranAttack": []
		},
		{
			"kind": "RazorBack",
			"hitPoints": 250,
			"attackMin": 200,
			"attackMax": 200,
			"ranAttack": []
		},
		{
			"kind": "Gorgonthaller",
			"hitPoints": 125,
			"attackMin": 0,
			"attackMax": 100,
			"ranAttack": []
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
			"ranAttack": []
		},
		{
			"name": "Morgana",
			"hitPoints": 1000,
			"attackMin": 100,
			"attackMax": 400,
			"ranAttack": []
		},
		{
			"name": "Gandalf",
			"hitPoints": 1200,
			"attackMin": 200,
			"attackMax": 200,
			"ranAttack": []
		},
		{
			"name": "Dumbledore",
			"hitPoints": 800,
			"attackMin": 0,
			"attackMax": 100,
			"ranAttack": []
		}
	]
};

var mdata = {
	"dmessage": [
		{
			"dmid": 0,
			"message": "The " + 'variable for dragon name' + " strikes but was unable to make contact!"
		},
		{
			"dmid": 1,
			"message": "The " + 'variable for dragon name' + " strikes and makes contact!"
		},
		{
			"dmid": 2,
			"message": "The " + 'variable for dragon name' + " lands a devastating blow!"
		}
	]
};