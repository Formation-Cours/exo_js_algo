const rl = require("readline-sync");

const n = rl.questionInt("Entrez un nombre : ");

let str = "";
for (let i = n; i > 0; i--) {
    str = "";
    for (let j = i; j > 0; j--) {
        str += ` ${j} `
    }
    console.log(str);
}