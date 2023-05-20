
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

const uniqueTerms = new Set();
for (const doc of docs) {
  for (const term of doc.split(" ")) {
    uniqueTerms.add(term);
  }
}

const docTermMatrix = {};

for (const term of uniqueTerms) { 
  docTermMatrix[term] = [];
  for (const doc of docs) {
    if (doc.includes(term)) {
      docTermMatrix[term].push(1);
    } else {
      docTermMatrix[term].push(0);
    }
  }
}
const search=(word)=>{
    const v5 = docTermMatrix[word] ?? [];
    console.log(`Incedence Matrix for {${word}}:[${v5}]`)
}
const docsArray = docs;

const v1 = docTermMatrix;


// const result1 = v1.map((val, i) => (val ? docsArray[i] : null)).filter(Boolean);
// console.log(result1);
module.exports={v1,search,docTermMatrix}

// const fs = require("fs");


// const review_1 = fs.readFileSync(`./DATA/test_1.txt`, {
//   encoding: "utf8",
//   flag: "r",
// });
// const review_2 = fs.readFileSync(`./DATA/test_2.txt`, {
//   encoding: "utf8",
//   flag: "r",
// });
// const review_3 = fs.readFileSync(`./DATA/test_3.txt`, {
//   encoding: "utf8",
//   flag: "r",
// });

// // Ensure that each review is a string
// const review1String = review_1.toString();
// const review2String = review_2.toString();
// const review3String = review_3.toString();

// const docs = [review1String, review2String, review3String];

// const uniqueTerms = new Set();
// for (const doc of docs) {
//   for (const term of doc.split(" ")) {
//     uniqueTerms.add(term);
//   }
// }

// const docTermMatrix = {};
// for (const term of uniqueTerms) {
//   docTermMatrix[term] = [];
//   for (const doc of docs) {
//     if (doc.includes(term)) {
//       docTermMatrix[term].push(1);
//     } else {
//       docTermMatrix[term].push(0);
//     }
//   }
// }

// const docsArray = docs;

// const v1 = docTermMatrix;

// console.log(v1);
// console.log("-------");

// const result1 = v1.map((val, i) => (val ? docsArray[i] : null)).filter(Boolean);
// console.log(result1);
// module.exports={result1,v1,docTermMatrix}
// const v4 = docTermMatrix["Word"] ?? [];
// const v5 = docTermMatrix["And"] ?? [];
// console.log(v4);
// console.log(v5);
// console.log("-------");
// const v6 = v4.map((val, i) => val & v5[i]);
// console.log(v6);
// const result2 = v6.map((val, i) => (val ? docsArray[i] : null)).filter(Boolean);
// console.log(result2);

// const v7 = docTermMatrix["About"] ?? [];
// const v8 = docTermMatrix["Ways"] ?? [];
// console.log(v7);
// console.log(v8);
// console.log("-------");
// const v9 = v7.map((val, i) => val | v8[i]);
// console.log(v9);


