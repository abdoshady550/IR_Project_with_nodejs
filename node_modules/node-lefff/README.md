
# node-lefff

Pure JavaScript implementation of **LEFFF** lemmatizer.

Part of this readme come from the Python implementation https://github.com/ClaudeCoulombe/FrenchLefffLemmatizer

### Introduction

A French Lemmatizer in JavaScript based on the LEFFF (Lexique des Formes Fléchies du Français / Lexicon of French inflected forms) is a large-scale morphological and syntactic lexicon for French. A lemmatizer returns the lemma or more simply the dictionary entry of a word, In French, the lemmatization of a verb returns this verb to the infinitive and for the other words, the lemmatization returns this word to the masculine singular.

### Main reference

Sagot (2010). The Lefff, a freely available and large-coverage morphological and syntactic lexicon for French. 
In Proceedings of the 7th international conference on Language Resources and Evaluation (LREC 2010), Istanbul, Turkey.
Retrieved from [Benoît Sagot Webpage about LEFFF](http://alpage.inria.fr/~sagot/lefff-en.html)

In this project, we use the morphological lexicon only: 
.mlex file which has a simple format in CSV (4 fields separated by `\t`)

[LEFFF download hyperlink](https://gforge.inria.fr/frs/download.php/file/34601/lefff-3.4.mlex.tgz)

[Tagset](http://alpage.inria.fr/frmgwiki/content/tagset-frmg) format FRMG - from the ALPAGE project since 2004

## Installation

    npm i node-lefff

## How to use

    const nodeLefff = require('node-lefff');
    const nl = await nodeLefff.load();
    
    nl.lem('action') // action
    nl.lem('acteur') // acteur
    nl.lem('actrices') // acteur
    nl.lem('Dleyton') // Dleyton

## How to use with [natural](https://www.npmjs.com/package/natural)

    const nodeLefff = require('node-lefff');
    const nl = await nodeLefff.load();
    const Stemmer = require('natural/lib/natural/stemmers/stemmer_fr');
    
    const LefffLemmer = new Stemmer();
    LefffLemmer.stem = nl.lem;
    
    LefffLemmer.tokenizeAndStem('Mes mémés m\'aimaient mais pas papa'); // ['mémé', 'aimer', 'papa']

## API Reference

### nl.lem(word)
- word `<String>`: Word
- @return `<String>`: Lemmatized word, or word itself, if no lemma is known

### nl.infos(word)
- word `<String>`: Word
- @return `Array<Object>`:
 ```
    [{
       type: String
       lemma: String // Lemmatized word
       mode: String 
    }, ...]
```

> Learn more about mode and type here:
> - mode: https://github.com/Poyoman39/node-lefff/blob/main/src/lefff-3.4.mlex/lefff-tagset-0.1.2.pdf
> - type: https://github.com/Poyoman39/node-lefff/blob/main/src/lefff-3.4.mlex/lefff-3.4.mlex

### nl.expandMode(mode)
- mode `String`: mode string returned by `nl.infos`
- @return `Object`:
 ```
    {
      indicatif: Bool,
      conditionnel: Bool,
      impératif: Bool,
      subjonctif: Bool,
      participe: Bool,
      infinitif: Bool,
      présent: Bool,
      futur: Bool,
      imparfait: Bool,
      passéSimple: Bool,
      passé: Bool,
      premièrePersonne: Bool,
      deuxièmePersonne: Bool,
      troisièmePersonne: Bool,
      masculin: Bool,
      féminin: Bool,
      singulier: Bool,
      pluriel: Bool,
    }
```