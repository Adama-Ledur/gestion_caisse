// Déclaration des variables nécessaires
const budget_client = 20000;
const prix_cahier = 1500;
const prix_stylo = 500;
let quantite_cahiers;
let quantite_stylos;
let montant_cahiers;
let montant_stylos;

// Affectation des quantités de cahiers et de stylos
quantite_cahiers = 10;
quantite_stylos = 3;

// Calcul du montant des cahiers et des stylos.
montant_cahiers = prix_cahier * quantite_cahiers;
montant_stylos = prix_stylo * quantite_stylos;

// Calcul du montant total des achats.
montant_total = montant_cahiers + montant_stylos;

// Affichage du montant total
console.log("\n==== CAISSE ====\n");
console.log(`Cahiers : ${montant_cahiers} FCFA`);
console.log(`Stylos : ${montant_stylos} FCFA`);
console.log(`Total : ${montant_total} FCFA`);
console.log(`Budget : ${budget_client} FCFA`);
// vérification du budget et affichage du budget
if (montant_total <= budget_client){
  console.log("Budget suffisant\n");
} else {
  console.log("Budget insuffisant\n");
}

/* Utilisation d'une condition pour afficher les
   nombre de 1 à 5*/
for (let i=1; i <= 5; i++){
    console.log(`Achat numéro : ${i}`);
}