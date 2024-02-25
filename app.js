// Dictionnaire de traduction ewondo
const traductionsEwondo = {
    "hello": "mbolo",
    "world": "èdè",
    "bonjour": "bembekiri",
    "blanc": "afum",
    "combien": "tan ya",
    "monsieur": "manti",
    "docteur": "doabra",
    "domestique": "etuga",
    "ecrire": "atil",
    "enfant": "monga",
    "enseignant": "nyegele zikulu",
    "bonjour": "bembekiri",
    // Ajoutez d'autres traductions ici
};

function traduire() {
    const motATraduire = document.getElementById("mot_a_traduire").value.toLowerCase();
    const resultatElement = document.getElementById("resultat");

    if (traductionsEwondo[motATraduire]) {
        const traduction = traductionsEwondo[motATraduire];
        resultatElement.innerHTML = `Le mot "${motATraduire}" se traduit en ewondo par "${traduction}".`;
    } else {
        resultatElement.innerHTML = `Traduction non disponible.`;
    }
}
