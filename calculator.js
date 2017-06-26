"use strict";
var сalculator = {
result: 0,
	setAdition: function(a, b) {
	this.result = a + b;
	},
	getAdition: function() {
	console.log(this.result);
	},
	setSubtraction: function(a, b) {
	this.result = a - b;
	},
	getSubtraction: function() {
	console.log(this.result);
	},
	setMultiplication: function(a, b) {
	this.result = a * b;
	},
	getMultiplication: function() {
	console.log(this.result);
	},
	setDivision: function(a, b) {
	this.result = a / b;
	},
	getDivision: function() {
	console.log(this.result);
	}
}