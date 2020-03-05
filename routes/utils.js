var fs = require('fs');


module.exports ={
	readSampleJson: function (path) {
    var obj;
    var done1 = false;
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      done1=true;
    });
    require('deasync').loopWhile(function(){return !done1;});

    return obj;
  }

}