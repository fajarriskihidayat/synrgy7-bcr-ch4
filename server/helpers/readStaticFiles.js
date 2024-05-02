const path = require("path");
const fs = require("fs");

const readStaticFiles = (reqUrl, res, contentType, enc) => {
  const filePath = path.join(__dirname, "./../../public", reqUrl);
  const fileStream = fs.createReadStream(filePath, enc);
  res.writeHead(200, { "Content-Type": contentType });
  fileStream.pipe(res);
};

module.exports = readStaticFiles;
