let nombreSecret = Math.floor(Math.random() * 100) + 1;
let proposition = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

while (proposition !== nombreSecret) {
    if (proposition < nombreSecret) {
        console.log("Trop petit !");
    } else {
        console.log("Trop grand !");
    }
    proposition = parseInt(prompt("Essayez encore :"));
}

console.log("Bravo !");
