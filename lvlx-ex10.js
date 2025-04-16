let n = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci à afficher :"));
let a = 0, b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}
