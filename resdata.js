const fs = require("fs");
const path = require("path");

const directoryPath = "./DATA";

const files = fs.readdirSync(directoryPath);
const docs = [];

files.forEach((file) => {
  const filePath = path.join(directoryPath, file);
  if (fs.statSync(filePath).isFile()) {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
    docs.push(fileContent);
  }
});

console.log(docs);