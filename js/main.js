let nbmot = 1; // On initilialise le compteur de mots

const valid = () => {



    var str = document.getElementById('str').value;
    
let i = 0;
console.log(str + " est de " + x.length + "longueur"); // Afficher la longueur du texte

for(i=0; i < x.length ; i++)
{
    if(x[i] != '')
    {
        nbmot += 1; // Quand il y a un espace, on incrémente le compteur
    }
}
console.log("Il y a " + nbmot + "mots dans " + x); // Afficher le nombre de mot dans le texte

}