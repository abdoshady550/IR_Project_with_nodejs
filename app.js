const express = require("express");
const app = express();
const process = require("process");
const path = require("path");
const bodyParser = require("body-parser");

const lusearch = require("./lucene_search");
const invertI = require("./invrtindex");
const IncedenceMatrix = require("./Incedence Matrix");
const Pindex = require("./Positional index");
const termd=require('./Term_Document')
const bo=require('./Bo-word')

const Noemali = require("./Normalization");
const tokenizer=require('./tokenization')
const limity=require('./Lemetization')
const steem=require('./Steeming')
const stopWords=require('./stop_Word')

const port = process.env.port || 3000; ////PORT////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.post("/index.html", (req, res) => {
  const search = req.body.sear;
  const selectedAlgorithm = req.body.Algorethm;
  const pre = req.body.check;

  
  if (req.body.check === "Tokenization") {
    //  console.log(tokenizer.token);

    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        // console.log(tokenizer.tokenize(search));
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.resultAll(tokenizer.token));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
      console.log(tokenizer.tokenize(pre));
// console.log(termd.terdoc(termd.documents))
console.log(termd.All(tokenizer.docs));
// console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      console.log(tokenizer.tokenize(pre));
      console.log(IncedenceMatrix.v1)
      //  console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      console.log(tokenizer.tokenize(pre));
       console.log(Pindex.index)
      
      //  console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      console.log(tokenizer.tokenize(pre));
      console.log( bo.boWordIndex);
      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);



  } else if (req.body.check === "Normalization") {
    
    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        // console.log(tokenizer.tokenize(search));
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.resultAll(Noemali.normAll));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
console.log(termd.All(Noemali.normAll));
// console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      console.log(IncedenceMatrix.v1)
      //  console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
       console.log(Pindex.index)
      
      //  console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      console.log( bo.boWordIndex);
      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);


  } else if (req.body.check === "Steeming") {
    
    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        // console.log(tokenizer.tokenize(search));
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.resultAll(steem.stemmedTexts));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
console.log(termd.All(steem.stemmedTexts));
// console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      console.log(tokenizer.tokenize(pre));
      console.log(IncedenceMatrix.v1)
      //  console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      console.log(tokenizer.tokenize(pre));
       console.log(Pindex.index)
      
      //  console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      console.log(tokenizer.tokenize(pre));
      console.log( bo.boWordIndex);
      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);

 } 
    else if (req.body.check === "Lemetization") {
      // console.log(limity.lemmatizedTokens);
     
    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        // console.log(tokenizer.tokenize(search));
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.resultAll(limity.lemmatizedWords));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
console.log(termd.All(limity.lemmatizedWords));
// console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      console.log(IncedenceMatrix.v1)
      //  console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
       console.log(Pindex.index)
      
      //  console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      console.log(tokenizer.tokenize(pre));
      console.log( bo.boWordIndex);
      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);

} else if (req.body.check === "Stop Word") {

  if (selectedAlgorithm === "lu") {
    // console.log(selectedAlgorithm);
      // console.log(tokenizer.tokenize(search));
      // console.log(lusearch.result(tokenizer.token));
    console.log(lusearch.resultAll(stopWords.filteredTokens));

    console.log(`lucene Done `);
  }
  if (selectedAlgorithm === "TD") {
   
// console.log(termd.terdoc(termd.documents))
console.log(termd.All(stopWords.filteredTokens));
// console.log(termd.termSearch(search));
    console.log(`Term Document Done `);
  }
  if (selectedAlgorithm === "IM") {
    console.log(IncedenceMatrix.v1)
    //  console.log(IncedenceMatrix.search(search))
    console.log(`Incedence Matrix Done `);
  }
  if (selectedAlgorithm === "Ii") {
    // console.log(invertI.unique_terms);
    console.log([invertI.inverted_index]); 
      // console.log(invertI.pl_1);
// console.log(invertI.pl_2);

console.log(invertI.and_result)


    console.log(`Inverted index Done `);
  }
  if (selectedAlgorithm === "Pi") {
     console.log(Pindex.index)
    
    //  console.log(Pindex.index[search])
    console.log(`Positional index Done `);
  }
  if (selectedAlgorithm === "Bi") {
    console.log( bo.boWordIndex);
    console.log(`Bo-Word index Done `);
  }

  console.log(` ${pre}`);

} else {
    console.log("Please choose a one Query Pre_Processing first 🤔");
  }
});

//////////////////////search/////////////////////////////////
app.post("/search.html", (req, res) => {

  const search = req.body.sear;
  const selectedAlgorithm = req.body.Algorethm;
  const pre = req.body.check;

  
  if (req.body.check === "Tokenization") {
    //  console.log(tokenizer.token);

    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        console.log(tokenizer.tokenize(search));
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.result(tokenizer.token,search));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
      console.log(tokenizer.tokenize(pre));
// console.log(termd.terdoc(termd.documents))
// console.log(termd.All(tokenizer.docs));
console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      console.log(tokenizer.tokenize(pre));
      // console.log(IncedenceMatrix.v1)
       console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index[search]]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      console.log(tokenizer.tokenize(pre));
      
       console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      console.log(tokenizer.tokenize(pre));
           
      console.log( `${search}:${bo.boWordIndex[search]}`);
      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);



  } else if (req.body.check === "Normalization") {
    // console.log(Noemali.docTermMatrix);
    if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.result(Noemali.normOne,search));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
// console.log(termd.All(tokenizer.docs));
console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      // console.log(IncedenceMatrix.v1)
       console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index[search]]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      
       console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      
          
      console.log( `${search}:${bo.boWordIndex[search]}`);

      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);
  } else if (req.body.check === "Steeming") {
     console.log(steem.docTermMatrix);
     if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        
        // console.log(lusearch.result(tokenizer.token));
        console.log(lusearch.resultAll(tokenizer.token));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
// console.log(termd.All(tokenizer.docs));
console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      // console.log(IncedenceMatrix.v1)
       console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index[search]]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      
       console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
          
      console.log( `${search}:${bo.boWordIndex[search]}`);

      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);  } 
    else if (req.body.check === "Lemetization") {
      // console.log(limity.lemmatizedTokens);
     if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.result(limity.oneLammatiz));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
// console.log(termd.All(tokenizer.docs));
console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      // console.log(IncedenceMatrix.v1)
       console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index[search]]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      
       console.log(Pindex.index[search])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      
           
      console.log( `${search}:${bo.boWordIndex[search]}`);

      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);
  } else if (req.body.check === "Stop Word") {
     // console.log(Noemali.docTermMatrix);
     if (selectedAlgorithm === "lu") {
      // console.log(selectedAlgorithm);
        
        // console.log(lusearch.result(tokenizer.token));
      console.log(lusearch.result(stopWords.filteredTokens,search));

      console.log(`lucene Done `);
    }
    if (selectedAlgorithm === "TD") {
// console.log(termd.terdoc(termd.documents))
// console.log(termd.All(tokenizer.docs));
console.log(termd.termSearch(search));
      console.log(`Term Document Done `);
    }
    if (selectedAlgorithm === "IM") {
      // console.log(IncedenceMatrix.v1)
       console.log(IncedenceMatrix.search(search))
      console.log(`Incedence Matrix Done `);
    }
    if (selectedAlgorithm === "Ii") {
      // console.log(invertI.unique_terms);
      console.log([invertI.inverted_index[search]]); 
        // console.log(invertI.pl_1);
  // console.log(invertI.pl_2);
 
  console.log(invertI.and_result)
  

      console.log(`Inverted index Done `);
    }
    if (selectedAlgorithm === "Pi") {
      
       console.log(Pindex.index[tokenizer.docs])
      console.log(`Positional index Done `);
    }
    if (selectedAlgorithm === "Bi") {
      
      console.log( `${search}:${bo.boWordIndex[search]}`);

      console.log(`Bo-Word index Done `);
    }

    console.log(` ${pre}`);
  } else {
    console.log("Please choose a one Query Pre_Processing first 🤔");
  }
});

app.listen(port, () => {
  console.log(`listening.. to port(${port})`);
});
