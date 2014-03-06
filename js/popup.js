// @author - Luca Sartoni <info@lucasartoni.com>

var QUERY = 'luca sartoni';

var waveFreeChecker = {

  requestConnection: function() {
    var req = new XMLHttpRequest();
    req.open("GET", "http://www.wordpress.com/", true);
    
  }
};

$(document).ready(function (){
	alert("it works!");
	
});