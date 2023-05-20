const lemmatizer = require('node-lemmatizer');
const fs = require("fs");
const path = require("path");

const directoryPath = path.resolve("DATA");

const files = fs.readdirSync(directoryPath);
const docs = [];

files.forEach((file) => {
  const filePath = path.join(directoryPath, file);
 
  if (fs.statSync(filePath).isFile()) {
    const fileContent = fs.readFileSync(filePath, {
      encoding: "utf8",
      flag: "r",
    });
    docs.push(fileContent);
  }
});

const regex = /\.W(.*?)\.X/gs;

const lemmatizedWords = [];

docs.forEach((fileContent) => {
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    const documentText = match[1].trim();
    const words = documentText.split(/\s+/);
    for (let j = 0; j < words.length; j++) {
      const lemma = lemmatizer.lemmas(words[j]);
      lemmatizedWords.push(lemma);
    }
  }
});

const oneLammatiz=(wordy)=>{
 
    const onelemma = lemmatizer.lemmas(wordy);
    console.log(onelemma);
  
  }
module.exports = {oneLammatiz,lemmatizedWords};
// console.log(lemmatizedWords)

// retrieve a lemma with a part of speech.
// you can assign 'verb' or 'noun' or 'adj' or 'adv' as a part of speech.
// console.log(lemmatizer.lemmas('desks')) 
// console.log(lemmatizer.only_lemmas('Go'))    // => [ ['desk', 'noun'] ]
// lemmatizer.lemmas('talked', 'verb');   // => [ ['talk', 'verb'] ]
// lemmatizer.lemmas('coded', 'verb');    // => [ ['code', 'verb'] ]

// // of course, available for irregular iflected form words.
// lemmatizer.lemmas('went', 'verb');     // => [ ['go', 'verb'] ]
// lemmatizer.lemmas('written', 'verb');  // => [ ['write', 'verb'] ]
// lemmatizer.lemmas('better', 'adj');    // => [ ['better', 'adj'], ['good', 'adj'] ]

// // when multiple base forms are found, return all of them.
// lemmatizer.lemmas('leaves', 'noun');   // => [ ['leave', 'noun'], ['leaf', 'noun'] ]

// // retrieve a lemma without a part of speech.
// lemmatizer.lemmas('sitting');  // => [ ['sit', 'verb'], ['sitting', 'noun'], ['sitting', 'adj'] ]
// lemmatizer.lemmas('oxen');     // => [ ['oxen', 'noun'], ['ox', 'noun'] ]
// lemmatizer.lemmas('leaves');   // => [ ['leave', 'verb'], ['leave', 'noun'], ['leaf', 'noun'] ]

// // retrieve only lemmas not including part of speeches in the returned value.
// lemmatizer.only_lemmas('desks', 'noun');  // => [ 'desk' ]
// lemmatizer.only_lemmas('coded', 'verb');  // => [ 'code' ]
// lemmatizer.only_lemmas('priorities');     // => [ 'priority' ]
// lemmatizer.only_lemmas('leaves');         // => [ 'leave', 'leaf' ]

