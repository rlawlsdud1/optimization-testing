const fs = require("fs");
const path = require("path");

const convertImageToBase64 = (filePath) => {
  const imageBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${imageBuffer.toString("base64")}`;
};

module.exports = convertImageToBase64;
