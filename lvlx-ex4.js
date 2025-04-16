let base = prompt("Entrez la base du triangle (en unités) :");
let hauteur = prompt("Entrez la hauteur du triangle (en unités) :");

base = parseFloat(base);
hauteur = parseFloat(hauteur);

if (isNaN(base) || isNaN(hauteur) || base <= 0 || hauteur <= 0) {
    console.log("❌ Veuillez entrer des valeurs valides et positives pour la base et la hauteur.");
} else {
    let aire = (base * hauteur) / 2;
    console.log("✅ L'aire du triangle est : " + aire + " unités carrées.");
}