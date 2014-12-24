var should = require('should');
var fs = require('fs');
var path = require('path');
var config = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/config.json', 'utf8')));

describe('Docomo API', function(){
	var Docomo = require('../lib/docomo');

	describe('createDialogue', function(){
		it('should get utt data without optional params', function(done){
			var api = new Docomo(config.apiKey);
			api.createDialogue('Hello', function(error, data){
				data.utt.should.not.equal('');
				done();
			});
		});

		it('should get utt data with optional params', function(done){
			var api = new Docomo(config.apiKey);
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
				data.utt.should.not.equal('');
				done();
			});
		});

		it('should set context after getting response', function(done){
			var api = new Docomo(config.apiKey);
			api.createDialogue('Hello', function(error, data){
				should(api.context).be.ok;
				done();
			});
		});

		it('should set context undefined when failing request', function(done){
			var api = new Docomo(config.apiKey);
			api.apiKey = null;
			api.createDialogue(null,function(error,data){
				should(api.context).be.not.ok;
				done();
			})
		});

		it('should get error when apiKey is not set', function(done){
			var api = new Docomo(config.apiKey);
			api.apiKey = null;
			api.createDialogue(null, function(error, data){
				should(error).be.ok;
				done();
			});
		});
	});
	
	describe('createKnowledgeQA', function(){
		it('should get textForDisplay data', function(done){
			var api = new Docomo(config.apiKey);
			api.createKnowledgeQA('人類初の宇宙飛行士は？', function(error, data){
				data.message.textForDisplay.should.not.equal('');
				done();
			});
		});

		it('should get answers array data', function(done){
			var api = new Docomo(config.apiKey);
			api.createKnowledgeQA('人類初の宇宙飛行士は？', function(error, data){
				data.answers.length.should.be.above(0);
				done();
			});
		});

		it('should get error when apiKey is not set', function(done){
			var api = new Docomo(config.apiKey);
			api.apiKey = null;
			api.createKnowledgeQA('人類初の宇宙飛行士は？', function(error, data){
				should(error).be.ok;
				done();
			});
		});
	});
});