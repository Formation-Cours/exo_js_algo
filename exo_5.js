const rl = require("readline-sync");

const n = rl.questionInt("Entrez un nombre : ");

let str = "";
for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
        str += ` ${j} `
    }
    console.log(str);
}