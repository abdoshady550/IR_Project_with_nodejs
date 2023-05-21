const lucene = require("lucene-filter")(require("lucene"));

const result = (data, word) => {
  for (let i = 34; i < 36; i++) {
    for (let i = 32; i < 35; i++) {
      // const all=[data.filter(lucene(data[i]))]
      if (data[i] == data[word]) {
        // console.log(data.filter(lucene(data[35][0][0][0])));
        console.log(`the word {${word}} in index[${i}]`);
      }
    }
  }
};
const resultAll = (data) => {
  for (let i = 0; i < data.length; i++) {
    data.filter(lucene(data[i]));
    console.log(`the word {${data[i]}} in index[${i}]`);
  }
};

module.exports = { result, resultAll };
// const lunr = require('lunr');
// const fs = require('fs');
// const path = require('path');

// const directoryPath = path.resolve('DATA');
// const files = fs.readdirSync(directoryPath);
// const documents = [];

// const regex = /\.W(.*?)\.X/gs;

// files.forEach((file) => {
//   const filePath = path.join(directoryPath, file);

//   if (fs.statSync(filePath).isFile()) {
//     const fileContent = fs.readFileSync(filePath, 'utf8');

//     let match;
//     while ((match = regex.exec(fileContent)) !== null) {
//       const documentText = match[1].trim();
//       documents.push({
//         id: file,
//         content: documentText
//       });
//     }
//   }
// });

// // Display individual documents
// documents.forEach((doc, index) => {
//   console.log(`Document ${index + 1}:`);
//   console.log(doc.content);
//   console.log('---');
// });

// // Create a new Lunr index
// const index = lunr(function () {
//   this.field('content');

//   // Add documents to the index
//   documents.forEach((doc) => {
//     this.add(doc);
//   });
// });

// // Perform a search
// const searchResults = index.search('query');

// // Display search results
// searchResults.forEach((result) => {
//   const document = documents.find((doc) => doc.id === result.ref);
//   console.log(`Document: ${document.id}`);
//   console.log(`Score: ${result.score}`);
//   console.log(`Content: ${document.content}`);
//   console.log('---');
// });
