const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  // Use a stream to handle large data efficiently
  const dataStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      // Process chunks asynchronously
      setTimeout(() => {
        callback(null, chunk); // Pass chunks along
      }, 10); // Simulate some processing time
    }
  });

  req.pipe(dataStream).pipe(res);

  // Set a timeout to prevent indefinite hanging if data processing is too long
  const timeoutId = setTimeout(() => {
    console.error('Request timed out!');
    res.end();
  }, 5000); // 5 seconds timeout

  req.on('end', () => {
    clearTimeout(timeoutId);
    console.log('Request processed successfully.');
  });

}).listen(3001); 
console.log('Server running on port 3001');