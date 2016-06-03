
$(document).ready(function(){
	var url;
	var accountName;
	var accounts = ['ESL_SC2', 'OgamingSC2', 'storbeck', 'FreeCodeCamp', 'brunofin', 'comster404', 'clayster', 'YaraskyGaming', 'Sevadus', 'Forsenlol' ];
	accounts.sort();

	











	$("#twitching").on("click", function(){
			
		
		$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
		  console.log(data);
		  accounts.sort();
		  console.log(accounts);
		});

	});

});