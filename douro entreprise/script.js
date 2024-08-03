document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('calculatorModal').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('calculatorModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('calculatorModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('palettesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupération des valeurs des champs de formulaire
    const surface = parseFloat(document.getElementById('surface').value);
    const nbrDePers = parseInt(document.getElementById('nbrDePers').value);
    
    // Vérification des entrées utilisateur
    if (isNaN(surface) || surface <= 0) {
        alert("Por favor, insira uma área válida.");
        return;
    }
    if (isNaN(nbrDePers) || nbrDePers <= 0) {
        alert("Por favor, insira um número válido de pessoas.");
        return;
    }

    // Fonction pour calculer le nombre de palettes nécessaires et le coût total
    function palettes(surface) {
        const nombreTotalPalettes = Math.ceil(surface / 20);
        const coût = nombreTotalPalettes * 1000;
        
        return { nombreTotalPalettes, coût };
    }

    // Fonction pour calculer le temps nécessaire en fonction du nombre de travailleurs
    function jour(surface, nbrDePers) {
        const pose = 140;
        const moyenneM2Pour2 = 12;
        const moyenneM2Pour3 = 18;
        let tempsFinal, coûtParJour;

        if (nbrDePers === 2) {
            coûtParJour = moyenneM2Pour2 * pose;
            tempsFinal = Math.ceil(surface / moyenneM2Pour2);
        } else if (nbrDePers === 3) {
            coûtParJour = moyenneM2Pour3 * pose;
            tempsFinal = Math.ceil(surface / moyenneM2Pour3);
        } else {
            alert("Este número de pessoas não é suportado.");
            return null;
        }
        
        return { tempsFinal, coûtParJour };
    }

    // Appel des fonctions et affichage des résultats
    const paletteResults = palettes(surface);
    const jourResults = jour(surface, nbrDePers);

    if (jourResults) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <p>Você vai precisar de no máximo ${paletteResults.nombreTotalPalettes} paletes.</p>
            <p>Esta obra vai custar ${paletteResults.coût} euros no total só para todas as paletes.</p>
            <p>Seu preço médio por dia para a instalação para toda a equipe é de ${jourResults.coûtParJour} euros.</p>
            <p>Você vai precisar de aproximadamente ${jourResults.tempsFinal} dias para finalizar a quantidade de m² de pedra.</p>
        `;
    }
});
