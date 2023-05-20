function matrixAlgorithm() {
    const str1 = "hello and welcome";
    const str2 = "welcome to egypt";
  
    // tokenize the strings into words
    const words1 = str1.split(/\s+/);
    const words2 = str2.split(/\s+/);
  
    // find the unique terms in both strings
    const set = new Set([...words1, ...words2]);
    const terms = [...set];
  
    // create the incidence matrix
    const matrix = new Array(terms.length)
      .fill(0)
      .map(() => new Array(2).fill(0));
    for (let i = 0; i < terms.length; i++) {
      matrix[i][0] = containsWord(words1, terms[i]) ? 1 : 0;
      matrix[i][1] = containsWord(words2, terms[i]) ? 1 : 0;
    }
  
    // print the incidence matrix
    
    process.stdout.write("  ");
    for (let i = 0; i < matrix[0].length; i++) {
      process.stdout.write(`doc${i + 1} `);
    }
    process.stdout.write("\n");
    for (let i = 0; i < matrix.length; i++) {
      process.stdout.write(`${terms[i]} `);
      for (let j = 0; j < matrix[i].length; j++) {
        process.stdout.write(`${matrix[i][j]}   `);
      }
      process.stdout.write("\n");
    }
  }
  
  function containsWord(words, term) {
    return words.includes(term);
  }
  console.log(matrixAlgorithm)
  console.log(containsWord)