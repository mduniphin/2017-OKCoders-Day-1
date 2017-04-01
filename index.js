// load modules
var http = require('http');

// set port number
const PORT = process.env.PORT || 5000;

function handleRequest(req, resp){
		resp.end('<h1>Welcome to my webpage ~:O </h1>');
}

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
	//this is a callback, get used to it now
	console.log("Server is running on port: %s", PORT);
});