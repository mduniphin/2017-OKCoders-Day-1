// load modules
const http = require('http');

// set port number
const PORT = process.env.PORT || 8080;

function handleRequest(res,res){
  res.end('<h1>Welcome to my webpage</h1>');
}

const server = http.createServer(handleRequest);

// start the server
server.listen(PORT, ()=>{
  console.log(`Magic happens on port ${PORT}`);
});