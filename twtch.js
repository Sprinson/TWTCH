$(document).ready(function(){

	var apiUrl = 'https://api.twitch.tv/kraken/streams/';
	var cb = '?callback=?';
	var accounts = ["ESL_SC2", 'OgamingSC2', 'storbeck', 'FreeCodeCamp', 'brunofin', 'comster404', 'clayster', 'inversedarkfox', 'Sevadus', 'Forsenlol' ];
	var finalURL;
	var game = [];
	var viewers = [];
	var status;


	function getAccount(){
		game=[];
		for(var x = 0; x < accounts.length; x++){
			finalURL = apiUrl + accounts[x] + cb;
			$.getJSON(finalURL, function(data){
			console.log(data);
				
			if (data.error){
				//status = ('Account Closed; 0 Viewers');
				game.push('Account Closed');
				viewers.push('0 viewers');
			}
			else if(data.stream !== null){
				//status = data.stream.game + ";" + " " + data.stream.viewers + " " + "Viewers";
				game.push(data.stream.game);
				viewers.push(data.stream.viewers)
			} else if(data.stream == null){
				//status = 'Offline; 0 Viewers';
				game.push(null);
				viewers.push('0 Viewers');
			} 
			
					//console.log(viewers);
					
				$('#status:eq(' + x + ')').html(game[x]);
			});
			
			console.log(game);
				
			
		}
		//console.log(game);
	}

	getAccount();






////////////////////////////////////////////////////TESTING//////////////////////////////////////////////
	$("#twitching").on("click", function(){
			
		
		$.getJSON('https://api.twitch.tv/kraken/streams/esl_sc2?callback=?', function(data) {
		  console.log(data);
		  
		  console.log(accounts);
		});

	});

});