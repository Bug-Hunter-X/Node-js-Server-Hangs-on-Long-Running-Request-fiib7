const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // Node.js might timeout before the response is sent. 
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    // Simulate a long process
    let count = 0; 
    for (let i = 0; i < 1000000000; i++) {
      count += i;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  });
}).listen(3000);