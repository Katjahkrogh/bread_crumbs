// Vent på at hele websiden er indlæst, før vi kører clickBtn-funktionen.
window.addEventListener("load", clickBtn);

// Definér en liste (bc) af kategorier med navne og links.
const bc = [
  { navn: "Hvidevarer", link: "/hvidevarer" },
  { navn: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { navn: "Bosch", link: "/hvidevarer/vaskemaskiner/Bosch/" },
];

// Hent referencen til det første <nav>-element på siden.
const nav = document.querySelector("nav");

// Definér funktionen clickBtn, som kaldes, når siden er fuldt indlæst.
function clickBtn() {
  // Tilføj en klikbegivenhedslytter til knappen, der udfører makeBc-funktionen.
  document.querySelector("button").addEventListener("click", makeBc);
  // Tilføj klassen "skjul" til <nav>-elementet for at skjule det.
  nav.classList.add("skjul");
}

// Definér funktionen makeBc, som opdaterer navigationsmenuen.
function makeBc() {
  // Fjern klassen "skjul" fra <nav>-elementet for at vise det igen.
  nav.classList.remove("skjul");
  // Opret en liste af listeelementer baseret på kategorilisten (bc).
  const listItems = bc
    .map((el, index) => {
      if (index === bc.length - 1) {
        // Hvis det er det sidste element, skal der ikke være en link.
        return `<li>${el.navn}`;
      } else {
        // Ellers skal der være et link til den pågældende kategori.
        return `<li><a href="${el.link}">${el.navn}</a></li>`;
      }
    })
    .join(""); // Saml listeelementerne til en streng.

  // Opret en HTML-liste ved at sætte listeelementerne ind i en <ul>-container.
  const liste = `<ul>${listItems}</ul>`;

  // Erstat indholdet af <nav>-elementet med den nye liste.
  nav.innerHTML = liste;
}

// Kald makeBc-funktionen med kategorilisten (bc) som argument.
makeBc(bc);
