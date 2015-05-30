var express = require('express');
var fs = require('fs');
var divxtotal = require("./divxtotal_parser.js");
var app = express();

app.get('/', function(req, res){
	
	var tvShows = [{
		urlBase : 'http://www.divxtotal.com',
		urlTvShow : '/series/juego-de-tronos-385/',
		name : 'Juego de tronos',
		lastSeason : 5,
		lastEpisode : 1		
	},{
		urlBase : 'http://www.divxtotal.com',
		urlTvShow : '/series/da-vincis-demons-599/',
		name : 'Da Vinci´s Demons',
		lastSeason : 2,
		lastEpisode : 1		
	},{
		urlBase : 'http://www.divxtotal.com',
		urlTvShow : '/series/the-big-bang-theory-547/',
		name : 'The big bang theory',
		lastSeason : 8,
		lastEpisode : 23		
	},{
		urlBase : 'http://www.divxtotal.com',
		urlTvShow : '/series/the-blacklist-649/',
		name : 'The blacklist',
		lastSeason : 2,
		lastEpisode : 20		
	}];
	
	divxtotal.parse(tvShows, 0, '', res, divxtotal.parse);
	
	
});

app.listen('3000');
exports = module.exports = app;