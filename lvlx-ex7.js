let mots = ["padel", "football", "phoneo", "alternance", "ecole"];
let motPlusLong = "";

for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > motPlusLong.length) {
        motPlusLong = mots[i];
    }
}

console.log("Le mot le plus long est : " + motPlusLong);
