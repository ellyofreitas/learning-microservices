import http from 'node:http';

const PORT = 4501;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'welcome to auth' }));
});

server.listen(PORT).on('listening', () => console.info(`listening at ${PORT}`));
