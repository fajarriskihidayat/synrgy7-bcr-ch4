const http = require("http");
const getHtml = require("./helpers/getHtml");
const readStaticFiles = require("./helpers/readStaticFiles");
const PORT = 8000;

const onReq = (req, res) => {
  const url = req.url;

  if (url === "/") {
    getHtml("index.html", res);
  } else if (url === "/cars") {
    getHtml("carList.html", res);
  } else if (url.match(".js$")) {
    readStaticFiles(url, res, "text/js", "UTF-8");
  } else if (url.match(".css$")) {
    readStaticFiles(url, res, "text/css", "UTF-8");
  } else if (url.match(".png$")) {
    readStaticFiles(url, res, "image/png");
  } else if (url.match(".jpg$")) {
    readStaticFiles(url, res, "image/jpg");
  } else {
    getHtml("404.html", res);
  }
};

const server = http.createServer(onReq);

server.listen(PORT, () => {
  console.info(`server is running on port ${PORT}`);
});
