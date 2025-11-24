let origineleTekst = "Klik op mij!";
let origineleKleur = "black";

let aangepast = false;

function kleur_aanpassen() {
    let titel = document.getElementById("titel");

    if (!aangepast) {
        titel.style.color = "red";
        titel.textContent = "Inhoud aangepast!";
        aangepast = true;
    } else {
        titel.style.color = origineleKleur;
        titel.textContent = origineleTekst;
        aangepast = false;
    }
}
