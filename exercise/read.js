var fs=require('fs');
var input=fs.createReadStream('csv/IndiaST2011.csv', 'utf8');
  input.on('data',function(data) {
 
  console.log(data);
});