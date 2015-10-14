// blocks tests

var WikiTextParser = require('parse-wikitext');
var wikiTextParser = new WikiTextParser('minecraft.gamepedia.com');

var block_extractor = require("./../lib/block_extractor.js")([],[]);

describe("block_extractor",function(cb){
  it("extract nether brick fence infobox",function(done){
    block_extractor.blockInfobox("Nether Brick Fence",function(err,data){
      console.log(data);
      done();
    });
  });

  it("extract melon infobox",function(done){
    block_extractor.blockInfobox("Melon",function(err,data){
      console.log(data);
      done();
    });
  });

  it("extract stone infobox",function(done){
    block_extractor.blockInfobox("Stone",function(err,data){
      console.log(data);
      done();
    });
  });

  it("extract air infobox",function(done){
    block_extractor.blockInfobox("Air",function(err,data){
      console.log(data);
      done();
    });
  });

  it("extract wheat infobox",function(done){
    block_extractor.blockInfobox("Wheat",function(err,data){
      console.log(data);
      done();
    });
  });

  it("extract wood infobox",function(done){
    wikiTextParser.getArticle("Wood", function (err, data) {
      var sectionObject = wikiTextParser.pageToSectionObject(data);

      var infoBox = wikiTextParser.parseInfoBox(sectionObject["content"]);
      var values = infoBox["values"];
      console.log(values);
      done();
    });
  });

// starting with {{about
  it("extract pumkin infobox",function(done){
    wikiTextParser.getArticle("Pumpkin", function (err, data) {
      var sectionObject = wikiTextParser.pageToSectionObject(data);

      console.log(sectionObject["content"]);
      var infoBox = wikiTextParser.parseInfoBox(sectionObject["content"]);
      var values = infoBox["values"];
      console.log(values);
      done();
    });
  });

// starting with {{about
  it("extract carrot",function(done){
    wikiTextParser.getArticle("Carrot", function (err, data) {
      var sectionObject = wikiTextParser.pageToSectionObject(data);

      console.log(sectionObject["content"]);
      var infoBox = wikiTextParser.parseInfoBox(sectionObject["content"]);
      var values = infoBox["values"];
      console.log(values);
      done();
    });
  });
});

