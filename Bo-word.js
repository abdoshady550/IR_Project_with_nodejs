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

// Regular expression pattern
const regex = /\.W(.*?)\.X/gs;

// Array to store the extracted documents
const documents = [];

let match;
while ((match = regex.exec(fileContent)) !== null) {
  const documentText = match[1].trim();
  documents.push(documentText);
}

// Bo-word index object to store the index
const boWordIndex = {};

// Iterate over each document
documents.forEach((document, docIndex) => {
  // Split the document into individual words
  const words = document.split(" ");

  // Iterate over each word in the document
  words.forEach((word) => {
    // Remove punctuation and convert to lowercase
    const cleanWord = word.replace(/[^\w\s]|_/g, "").toLowerCase();

    // Check if the word exists in the index
    if (boWordIndex[cleanWord]) {
      // If the word exists, check if the document already exists in the word's postings list
      if (!boWordIndex[cleanWord].includes(docIndex)) {
        // If the document doesn't exist, add it to the postings list
        boWordIndex[cleanWord].push(docIndex);
      }
    } else {
      // If the word doesn't exist in the index, create a new postings list for it
      boWordIndex[cleanWord] = [docIndex];
    }
  });
});

// Print the Bo-word index

module.exports={boWordIndex};
