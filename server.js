const http = require("http");

console.log("It's Working");

const port = 3000;

http
  .createServer((req, res) => {
    const { url, method } = req;
    res.setHeader("Content-Type", "text/html");
    console.log("request made with this method:",req.method);
    const dataChunksArray = [];

    req.on("data",(chunk) => {
       dataChunksArray.push(chunk);
    });
    req.on("end",() => {
        const body = JSON.parse(Buffer.concat(dataChunksArray).toString());
        const resBody = {method, url, body};

        res.write(JSON.stringify(resBody));
        read.end();
    })

    if (url == "/") {
      res.statusCode = 200;
      res.write("<h1>Home: Ripal's Pad</h1>");
    } else if (url == "/about") {
      res.statusCode = 200;
      res.write("<h1>About: I am Ripal.</h1>");
    } else if (url == "/contact") {
      res.statusCode = 200;
      res.write("<h1>Contact ME: patelripalacc@gmail.com</h1>");
    }

    res.end();
  })
  .listen(port, () => {
    console.log("Server listening on port: " + port);
  });
