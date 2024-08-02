const { createServer } = require("node:http");

const hostname = "127.0.0.1"; //localhost
const port = 3000;

//tao 1 server
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World siuuuuuuuuuuuu");
});

//ham giup server chay
//tac dung cua ham callback la sau khi server chay xong thi callback se hoat dong de ta biet server da chay xong
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
