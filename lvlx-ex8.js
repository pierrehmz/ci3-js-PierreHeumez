let mot = prompt("Entrez un mot :");
let motInverse = mot.split("").reverse().join("");

if (mot === motInverse) {
    console.log("C'est un palindrome.");
} else {
    console.log("Ce n'est pas un palindrome.");
}
