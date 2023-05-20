const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
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
const documents =docs;


const All=(documents)=>{
// Build vocabulary
const vocabulary = {};
for (let i = 0; i < documents.length; i++) {
  const tokens = tokenizer.tokenize(documents[i].toLowerCase());
  for (let j = 0; j < tokens.length; j++) {
    const token = tokens[j];
    if (!(token in vocabulary)) {
      vocabulary[token] = Object.keys(vocabulary).length;
    }
  }
}

// Build term document matrix
const termDocumentMatrix = [];
for (let i = 0; i < documents.length; i++) {
  const tokens = tokenizer.tokenize(documents[i].toLowerCase());
  const docVector = new Array(Object.keys(vocabulary).length).fill(0);
  for (let j = 0; j < tokens.length; j++) {
    const token = tokens[j];
    if (token in vocabulary) {
      docVector[vocabulary[token]]++;
    }
  }
  termDocumentMatrix.push(docVector);
}
console.log(vocabulary);
console.log(termDocumentMatrix);
}
const termSearch=(word)=>{
  // Build vocabulary
  const vocabulary = {};
  for (let i = 0; i < documents.length; i++) {
    const tokens = tokenizer.tokenize(documents[i].toLowerCase());
    for (let j = 0; j < tokens.length; j++) {
      const token = tokens[j];
      if (!(token in vocabulary)) {
        vocabulary[token] = Object.keys(vocabulary).length;
      }
    }
  }
  
  // Build term document matrix
  const termDocumentMatrix = [];
  for (let i = 0; i < documents.length; i++) {
    const tokens = tokenizer.tokenize(documents[i].toLowerCase());
    const docVector = new Array(Object.keys(vocabulary).length).fill(0);
    for (let j = 0; j < tokens.length; j++) {
      const token = tokens[j];
      if (token in vocabulary) {
        docVector[vocabulary[token]]++;
      }
    }
    termDocumentMatrix.push(docVector);
  }
  console.log(`vocabulary${word}is:${vocabulary[word]}`);
  console.log(`${termDocumentMatrix[word]}`);
  }


module.exports={termSearch,All,documents}