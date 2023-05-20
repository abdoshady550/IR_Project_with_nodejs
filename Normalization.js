const fs = require("fs");
const path = require("path");

normalize = require("normalization");

const directoryPath = path.resolve("DATA");

const files = fs.readdirSync(directoryPath);
const docs = [];
let fileContent;
files.forEach((file) => {
  const filePath = path.join(directoryPath, file);

  if (fs.statSync(filePath).isFile()) {
    fileContent = fs.readFileSync(filePath, {
      encoding: "utf8",
      flag: "r",
    });
    docs.push(fileContent);
  }
});
// console.log(docs)
// Regular expression pattern
const regex = /\.W(.*?)\.X/gs;

// Array to store the extracted documents
const documents = [];

let match;
while ((match = regex.exec(fileContent)) !== null) {
  const documentText = match[1].trim();
  documents.push(documentText);
  //   console.log(documentText)
}

// Print the extracted documents
const normAll = () => {
  for (let i = 0; i < documents.length; i++) {
    console.log(`Document ${i + 1}:`);

    const tok = normalize(documents[i]);
    console.log(tok);
    console.log("---");
  }


};
const normOne = (word) => {
  const tok = normalize(word);
  console.log(tok)

}
console.log(normOne('the'));

// module.exports={normAll,normOne }
