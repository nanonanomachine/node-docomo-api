Docomo API node.js wrapper

## Installation

This module is published in NPM:

```
npm install docomo-api
```
## Usage

```js
var DocomoAPI = require('docomo-api');
var api = new DocomoAPI('api_key');

// Without user parameters
api.createDialogue('Hello', function(error, data){
  console.log(data.utt);
});

// With user parameters
var params = {
  "nickname": "光",
  "nickname_y": "ヒカリ",
  "sex": "女",
  "bloodtype": "B",
  "birthdateY": "1997",
  "birthdateM": "5",
  "birthdateD": "30",
  "age": "16",
  "constellations": "双子座",
  "place": "東京"
};

api.createDialogue('Hello', params, function(error, data){
  console.log(data.utt);
});
```

##Methods

###Dialogue

```js
createDialogue(utt, params, callback)
```

###KnowledgeQA

```js
createKnowledgeQA(q, callback)
```

Implemented Docomo APIs
--------------------------

* [Dialogue](https://dev.smt.docomo.ne.jp/?p=docs.api.page&api_docs_id=5)
* [KnowledgeQA](https://dev.smt.docomo.ne.jp/?p=docs.api.page&api_docs_id=6)
