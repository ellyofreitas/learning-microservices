import http from 'node:http';

const PORT = 4500;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'welcome to product' }));
});

server.listen(PORT).on('listening', () => console.info(`listening at ${PORT}`));
