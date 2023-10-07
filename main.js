// const majuscule = "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
// const miniscule = "abcdefghijklmnopkrstuvwxyz";
// const nombre = "0123456789";

const couleur = Array("#90caf9", "#aed581", "#e57373", "#fff9c4");

let corp = document.querySelector("body");

let formulaire = document.querySelector("form");
let mise = document.getElementById("name");
let buttonMise = document.getElementById("button");

let sectionAffiche = document.getElementById("sectionAffichage");
let afficher = document.getElementById("affiche");
let copie = document.getElementById("copier");

let buttonManipAfficheFormulaire = document.querySelector(".gros");

let sectionCouleur = document.querySelector(".couleur");
let buttonCouleur = document.querySelectorAll(".nth");

function afficheFermeFormulaire(aff, sectAff, sectCoul, textButton){
    formulaire.style.display = aff; 
    sectionAffiche.style.top = sectAff;
    sectionCouleur.style.top = sectCoul;
    buttonManipAfficheFormulaire.innerHTML = textButton;
}

buttonManipAfficheFormulaire.addEventListener("click", () => {
    if(formulaire.style.display !== "none"){ afficheFermeFormulaire("none", "50%", "65%", "Ouvrir le formulaire"); }   
    else{ afficheFermeFormulaire("flex", "65%", "85%", "Fermer le formulaire"); }
});

buttonMise.addEventListener("click", () =>{
    if(!mise.value.length){ afficher.innerHTML = "Valeur par defaut"; }
    else{ afficher.innerHTML = mise.value; }
});

for(let i = 0; i < couleur.length; i++){
    buttonCouleur[i].addEventListener("click", () =>{ corp.style.backgroundColor = couleur[i]; });
    buttonCouleur[i].style.backgroundColor = couleur[i];
}

copie.addEventListener("click", () =>{
    navigator.clipboard.writeText(afficher.innerHTML).then(() => {
        alert("Texte copié !");
    });
});