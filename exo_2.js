const rl = require("readline-sync");

const annee = rl.questionInt("Quelle année souhaites-tu vérifier ? ");

if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
    console.log(`${annee} est bissextile!`)
}else {
    console.log(`${annee} n'est pas bissextile!`)
}