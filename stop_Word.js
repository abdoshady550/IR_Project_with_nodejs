const stopword = require('stopword');
const fs = require("fs");
const path = require("path");
const natural = require("natural");


const tokenizer = new natural.WordTokenizer();


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

let tokens = [];
documents.forEach((doc) => {
  // let k=1;
  const docTokens = tokenizer.tokenize(doc);
  tokens = tokens.concat(docTokens);
  // console.log(`Document ${k}:`);
  // console.log(doc);
  // console.log('---');
  // k++
});

const filteredTokens = stopword.removeStopwords(tokens);
const filteredSentence = filteredTokens.join(' ');


const filterSearch = (words) => {
  const filteredWords = stopword.removeStopwords(words);
  console.log('Filtered words:', filteredWords);
}


// console.log('Original Tokens:', tokens);
// console.log('Filtered Tokens:', filteredTokens);
// console.log('Filtered Sentence:', filteredSentence);



module.exports={tokens,filteredTokens,filteredSentence,filterSearch}