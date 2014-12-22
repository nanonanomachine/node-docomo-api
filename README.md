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

Implemented Docomo APIs
--------------------------

* Dialogue
