const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = "";
rl.question("Enter the string\n", function(string) {
  let f =1;
  let n =string.length;
for(let i =0,j=n-1;i<j;i++,j--){
  
        if(string[i]===string[j])
        continue;
        else{
            f=0;
            break;
    } 
}
if(f===1)
console.log("True");
else
console.log("False")
  rl.close();
});