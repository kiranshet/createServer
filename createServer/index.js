const http = require('http');

//create the port
const PORT = 8080;

// create the server
const server = http.createServer((req,res,next)=> {
// handle api endpoint
if(req.method === 'GET' && req.url == '/api/getData')
{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Hello World'}));
} else 
{
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });