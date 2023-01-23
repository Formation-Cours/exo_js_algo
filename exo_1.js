const rl = require("readline-sync");

const age = rl.questionInt("Quel est votre age ? ");

if (age < 18 || age > 65) {
    console.log("Vous avez le droit à un tarif réduit");
} else {
    console.log("Vous avez le droit à rien!! Dommage !! 🥰");
}