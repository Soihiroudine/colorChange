
const couleur = Array("#90caf9", "#aed581", "#e57373", "#eae984");

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

// retourne une nombre aléatoire
function getRandomInt(max) { return Math.floor(Math.random() * max);}

// Permet la manipulation de l'affichage du formulaire dans la page web
function afficheFermeFormulaire(aff, sectAff, sectCoul, textButton){
    formulaire.style.display = aff; 
    sectionAffiche.style.top = sectAff;
    sectionCouleur.style.top = sectCoul;
    buttonManipAfficheFormulaire.innerHTML = textButton;
}

function fenetre(tailleX, tailleY, description){
    // faire une minie fenetre permettant l'affiche d'information
}

// Permet d'affecter au "body" une couleur choisit aléatoirement parmis les couleurs déjà existantent
// cette partie s'exécute à chaque fois que la page se charge 
window.addEventListener("load", ()=>{
    corp.style = "background-color:"+couleur[getRandomInt(couleur.length)]+";";
    console.log("Bien.")
})

// Interaction avec un button qui va permettre d'afficher ou de fermer un formulaire
buttonManipAfficheFormulaire.addEventListener("click", () => {
    if(formulaire.style.display !== "none"){ 
        afficheFermeFormulaire("none", "50%", "65%", "Ouvrir le formulaire"); 
    }   
    else{ afficheFermeFormulaire("flex", "65%", "85%", "Fermer le formulaire"); }
});


buttonMise.addEventListener("click", () =>{
    if(!mise.value.length){ 
        afficher.innerHTML = "Valeur par defaut"; 
    }else{ 
        afficher.innerHTML = mise.value;
    }
});

// Interaction avec les boutton de couleur
for(let i = 0; i < couleur.length; i++){
    buttonCouleur[i].style.backgroundColor = couleur[i];
    buttonCouleur[i].addEventListener("mousedown", (e) =>{
        e.target.style.backgroundColor = "#AAAAAA";
        corp.style.backgroundColor = couleur[i];
    });
    buttonCouleur[i].addEventListener("mouseup", (e) =>{
        e.target.style.backgroundColor = couleur[i];
    });
}

// Faire l'action de copier
copie.addEventListener("click", () =>{
    navigator.clipboard.writeText(afficher.innerHTML).then(() => {
        alert("Texte copié !");
    });
});

