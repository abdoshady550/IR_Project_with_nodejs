const fs = require("fs");
const path = require("path");

// Define the directory containing the documents
const directoryPath = "./DATA";

// Define the index as an empty object
const index = {};

// Read all files from the directory
const files = fs.readdirSync(directoryPath);

// Loop over each file and process its contents
files.forEach((file) => {
  const filePath = path.join(directoryPath, file);
  if (fs.statSync(filePath).isFile()) {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });

    // Split the file contents into an array of terms
    const terms = fileContent.toLowerCase().match(/\b\w+\b/g);

    // Loop over each term and add it to the index
    terms.forEach((term, position) => {
      if (!index[term]) {
        index[term] = [];
      }
      index[term].push({ document: file, position: position });
    });
  }
});


module.exports={index}