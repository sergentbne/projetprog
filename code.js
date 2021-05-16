function start(etape) {
  const e = document.getElementById("questions");
  e.innerHTML = "";
  const etapedata = etapes[etape];
  const titre = document.createElement("h1");
  titre.innerText = etapedata.label;
  e.appendChild(titre);

  // questions
  const reponses = etapedata.reponses;
  for (const reponse of reponses) {
    const bouton = document.createElement("button");
    bouton.innerText = reponse.label;
    e.appendChild(bouton);
  }
}
