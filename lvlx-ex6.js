let nombre = prompt("Entrez un nombre :");
nombre = parseInt(nombre);

if (isNaN(nombre)) {
    console.log("Entrée invalide.");
} else if (nombre % 2 === 0) {
    console.log("Le nombre est pair.");
} else {
    console.log("Le nombre est impair.");
}
