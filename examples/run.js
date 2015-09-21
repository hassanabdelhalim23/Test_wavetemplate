var x=require('wavetemplate');
var read = require('fs').readFileSync,
    join = require('path').join,
  path = join(__dirname, '/example1.wave');
  path1 = join(__dirname, '/example2.wave');

var data= read(path, 'utf8');
var data1= read(path1, 'utf8');

Template.main.Menu={id:12};
Template.main.sd = [1, 2, 3, 4];
Template.main.id = "welcome";
Template.main.First={"welcome":1234};
console.log(x.makeview(data,Template,path));

console.log(x.makeview(data1,Template,path1));

