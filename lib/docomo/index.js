var request = require('request');
var _ = require('underscore');

var DIALOGUE_URL = 'https://api.apigw.smt.docomo.ne.jp/dialogue/v1/dialogue?APIKEY=';

var Docomo = function(apiKey){
  this.apiKey = apiKey;
};

module.exports = Docomo;

Docomo.prototype.createDialogue = function(utt, params, callback) {
  var client = this;
  var postURL = DIALOGUE_URL + client.apiKey;

  if ('function' === typeof params) {
    callback = params;
    params = undefined;
  }

  var defaultJson =  { 
    "utt": utt, 
    "context": client.context, 
    "mode": "dialog"
  };

  var requestJson = _.extend(defaultJson, params);
  
  request({
    uri: postURL,
    method: 'POST',
    json: requestJson
  }, function(error, response, body){
    if(response.statusCode == 200){
      client.context = body.context;
    } else{
      error = new Error(body);
    }
    callback(error, body || {});
  });
};
