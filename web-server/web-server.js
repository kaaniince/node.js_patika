const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to the INDEX page</h2>");
  } else if (url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to the ABOUT ME page</h2>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome to the CONTACT page</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>404 PAGE NOT FOUND</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
