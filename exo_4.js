const rl = require("readline-sync");

const names = rl.question("Citez des noms séparés par un espace : ");

// Jean Valentin Solène Melvin Abdenacer Sandrine Steeve JP Yoan Anthony Christophe Benoit
const tab = names.split(" ");
for (let i = 0; i < tab.length; i++) {
    console.log(`Nom ${i + 1} : ${tab[i]}`);
}