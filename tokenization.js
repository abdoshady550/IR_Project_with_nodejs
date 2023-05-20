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

const tokenize = function (text) {
  if (typeof text !== "string") {
    throw new Error("Input text must be a string");
  }

  const tokens = [];
  let currentToken = "";

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);

    // If the current character is a whitespace or punctuation, push the current token to the tokens array and start a new token
    if (/\s|[^\w]/.test(char)) {
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = "";
      }
    }
    // Otherwise, add the current character to the current token
    else {
      currentToken += char;
    }
  }

  // Push the last token to the tokens array if it exists
  if (currentToken) {
    tokens.push(currentToken);
  }

  return tokens;
};

const token = tokenize(documents.join(" "));
// console.log(token)

module.exports = { token, docs, tokenize };
