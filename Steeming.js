const natural = require("natural");
const fs = require("fs");
const path = require("path");

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

const regex = /\.W(.*?)\.X/gs;
const documents = [];
let match;
while ((match = regex.exec(fileContent)) !== null) {
  const documentText = match[1].trim();
  documents.push(documentText);
}

const stemmer = natural.PorterStemmer;
const tokenizer = new natural.WordTokenizer();

const stemmedTexts = []; // Array to store the stemmed texts

for (let i = 0; i < documents.length; i++) {
  const words = documents[i].split(/\s+/);
  for (let j = 0; j < words.length; j++) {
    const document = words[j];
    const tokens = tokenizer.tokenize(document);
    const stemmedWords = tokens.map(word => stemmer.stem(word));
    const stemmedText = stemmedWords.join(' ');

    stemmedTexts.push(stemmedText);
  }
}
function stemmOne(word) {
    const stemmer = natural.PorterStemmer;
    const result= stemmer.stem(word);
    console.log(`Original word: ${word}`);
    console.log(`stemm word: ${result}`);
  }
//   console.log(stemmOne("running"));

module.exports = {stemmedTexts,stemmOne};





//const stemmer = natural.PorterStemmer;
// const tokenizer = new natural.WordTokenizer();

// for (let i = 0; i < documents.length; i++) {
//   console.log(`Document ${i + 1}:`);
//   const words = documents[i].split(/\s+/);
//   for (let j = 0; j < words.length; j++) {
//     const document = words[j];
//     const tokens = tokenizer.tokenize(document);
//     const stemmedWords = tokens.map(word => stemmer.stem(word));
//     const stemmedText = stemmedWords.join(' ');

//     console.log(`${document} `);
//     console.log("---");
//     console.log("=>");
//     console.log(`${stemmedText}`);
//     console.log("--------------------");
//   }
// }