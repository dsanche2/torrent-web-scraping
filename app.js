var express = require('express');
var fs = require('fs');
var torrents = require("./torrents_parser.js");
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
	},{
		urlBase : 'http://www.subtorrents.com',
		urlTvShow : '/series/baby-daddy-374/',
		name : 'Papa canguro',
		lastSeason : 4,
		lastEpisode : 1		
	}];
	
	torrents.parse(tvShows, 0, '', res, torrents.parse);
	
	
});

function getHtml(){
	var html ="<style type='text/css'>* {margin: 0;padding: 0;}body {background: url(images/noise_light-grey.jpg);font-family: 'Helvetica Neue', arial, sans-serif;";
	html +="font-weight: 200;}h1 {font-family: 'Oswald', sans-serif;font-size: 4em;font-weight: 400;margin: 0 0 20px;text-align: center;text-shadow: 1px 1px 0 #fff, 2px 2px 0 #bbb;";
	html +="}hr {border-top: 1px solid #ccc;border-bottom: 1px solid #fff;margin: 25px 0;clear: both;}.centered {	text-align: center;}";
	html +=".wrapper {	width: 100%;padding: 30px 0;}.container {width: 1200px;margin: 0 auto;}ul.grid-nav {list-style: none;font-size: .85em;font-weight: 200;";
	html +="text-align: center;}ul.grid-nav li {	display: inline-block;}ul.grid-nav li a {display: inline-block;	background: #999;color: #fff;padding: 10px 20px;";
	html +="text-decoration: none;border-radius: 4px;-moz-border-radius: 4px;-webkit-border-radius: 4px;}ul.grid-nav li a:hover {background: #7b0;}";
	html +="ul.grid-nav li a.active {background: #333;}.grid-container {display: none;}ul.rig {list-style: none;font-size: 0px;margin-left: -2.5%;}";
	html +="ul.rig li {display: inline-block;padding: 10px;margin: 0 0 2.5% 2.5%;background: #fff;border: 1px solid #ddd;font-size: 16px;font-size: 1rem;vertical-align: top;";
	html +="box-shadow: 0 0 5px #ddd;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;}ul.rig li img {max-width: 100%;height: auto;margin: 0 0 10px;";
	html +="}ul.rig li h3 {margin: 0 0 5px;}ul.rig li p {font-size: .9em;line-height: 1.5em;color: #999;}ul.rig.columns-4 li {width: 22.5%;}";
	html +="@media (max-width: 1199px) {.container {width: auto;padding: 0 10px;}}@media (max-width: 480px) {ul.grid-nav li {display: block;margin: 0 0 5px;";
	html +="}ul.grid-nav li a {	display: block;}ul.rig {margin-left: 0;}ul.rig li {width: 100% !important; margin: 0 0 20px;}}</style>";
	html +="<div id='four-columns' class='grid-container'>";	
}

app.listen('3000');
exports = module.exports = app;