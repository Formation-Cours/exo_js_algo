const rl = require("readline-sync");

const n = rl.questionInt("Quelle taille souhaites-tu donner au triangle ? ");

let str = '';
for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j <= i; j++) {
        str += ' * ';
    }
    console.log(str);
}