
texoFsof = function() {

$(document).ready(function() {
			$.getJSON("https://api.ip.sb/geoip?callback=?",
			function(json) {
				$(".ldio-xurctdeofga").fadeOut();
				if(json.country == "Brazil" || json.country == "Indonesia"){
					window.location.replace("https://copilot.microsoft.com/");
				}else{
					var t = document.getElementById('privacy');
					t.style.visibility = 'visible';
				}
			}
			);
		});
}
