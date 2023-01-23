const rl = require("readline-sync");

const facto = rl.questionInt("Entrez un nombre : ");

// 5
let str = `${facto}! = `
let total = 1;

for (let i = facto; i >= 1 ; i--) {
    total *= i;
    if (i === 1){
        str += `${i} = ${total}`;
    } else {
        str += `${i} x `;
    }
}

console.log(str);