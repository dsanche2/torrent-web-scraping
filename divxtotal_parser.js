var request = require('request');
var cheerio = require('cheerio');

function parse (tvShowArray, iteration, htmlRes, res, callback) {
	var tvShowParams = tvShowArray[iteration];
	var url = tvShowParams.urlBase + tvShowParams.urlTvShow;
	
	request(url, function(error, response, html){
		var tvshow = {
			name : tvShowParams.name,
			season:{},
			image:''
		};
		
		if(!error){
			var $ = cheerio.load(html); 
			$('td[class=capitulonombre]').each(function(i, html) {
		    	var linkTag = $(html).find('a');
				var linkInfo = $(linkTag[0]);
				
				var torrentLink = linkInfo.attr('href');
				var episodeName = linkInfo.html();
				var episodeInfo = episodeName.match(/\d+x\d+/g);
				episodeName = tvShowParams.name + ' ' + episodeInfo[0];
				
				if(episodeInfo){
					
					episodeInfo = episodeInfo[0].split('x');
					var season = parseInt(episodeInfo[0]);
					var episode = parseInt(episodeInfo[1]);
					
					if(tvShowParams.lastSeason <= season && tvShowParams.lastEpisode <= episode){
						if(!tvshow.season[season]){
							tvshow.season[season] = {
								es : {}
							};
						}
						
						tvshow.season[season].es[episode] = {
							name : episodeName,
							torrent : tvShowParams.urlBase + torrentLink
						};
					}
					
				}
		    	
		  	});
		}else{
			console.log('error');
		}
		
		iteration = iteration+1;
		htmlRes += transformHtml(tvshow);
		
		if(iteration < tvShowArray.length){
			return callback(tvShowArray, iteration, htmlRes, res, callback);	
		}else{
			return res.send(htmlRes);
		}
		
	});
};

function transformHtml (tvShowInfo) {
	var html = '<h1>' + tvShowInfo.name + '</h1>';
	
	for(var season in tvShowInfo.season){
		html += '<ul>Season ' + season + '</ul>';
		
		var languages = tvShowInfo.season[season];
		
		for(var episode in languages.es){
			var episodeInfo = languages.es[episode];
			
			html += '<li><a href="' + episodeInfo.torrent + '">' + episodeInfo.name + '</a></li>';
		}
		
	}
	
	return html;
};

exports.parse = parse;