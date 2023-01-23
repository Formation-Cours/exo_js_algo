const rl = require("readline-sync");

const max = rl.questionInt("Entrez un nombre : ");

let latest = 0;
let after = 1;

let str = `${latest} ${after} `;
for(;;) {
    let t = after
    after = latest + after;
    latest = t;
    if (after > max){
        break;
    }
    str += `${after} `;
}

console.log(str);