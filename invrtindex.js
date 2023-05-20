
const fs = require("fs");
const tokenizer = require("./tokenization");
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

// const unique_terms = new Set(docs.flatMap((doc) => doc.split(" ")));
const unique_terms=tokenizer.token;
let inverted_index = {};

for (let i = 0; i < docs.length; i++) {
  const doc = docs[i];
  const terms = doc.split(" ");


  
  for (let j = 0; j < terms.length; j++) {
    const term = terms[j];
    if (term in inverted_index) {
      inverted_index[term].add(i);
    } else {
      inverted_index[term] = new Set([i]);
    }
  }
}

const or_postings = (posting1, posting2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < posting1.length && p2 < posting2.length) {
    if (posting1[p1] === posting2[p2]) {
      result.push(posting1[p1]);
      p1++;
      p2++;
    } else if (posting1[p1] > posting2[p2]) {
      result.push(posting2[p2]);
      p2++;
    } else {
      result.push(posting1[p1]);
      p1++;
    }
  }
  while (p1 < posting1.length) {
    result.push(posting1[p1]);
    p1++;
  }
  while (p2 < posting2.length) {
    result.push(posting2[p2]);
    p2++;
  }
  return result;
};

const and_postings = (posting1, posting2) => {
  const result = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < posting1.length && p2 < posting2.length) {
    if (posting1[p1] === posting2[p2]) {
      result.push(posting1[p1]);
      p1++;
      p2++;
    } else if (posting1[p1] > posting2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return result;
};

let pl_1 = [inverted_index["Ways"]];
let pl_2 = [inverted_index["Book"]];
const or_result = or_postings(pl_1, pl_2);
const and_result = and_postings(
  [inverted_index["Ways"]],
  [inverted_index["Book"]]
);

module.exports={
unique_terms,
 inverted_index,
pl_1
, pl_2,and_result
, or_result}

