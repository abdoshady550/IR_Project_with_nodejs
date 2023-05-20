const fs = require("fs");
const path = require("path");

const directoryPath = path.resolve("DATA");

const files = fs.readdirSync(directoryPath);
const docs = [];
let fileContent
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

// for (let i = 0; i < documents.length; i++) {
//   console.log(`Document ${i + 1}:`);
//   console.log(documents[i]);
//   console.log('---');
// }
for (let i = 0; i < documents.length; i++) {
  console.log(`Document ${i + 1}:`);
  const words = documents[i].split(/\s+/);
  for (let j = 0; j < words.length; j++) {
    console.log(words[j]);
  }
}

