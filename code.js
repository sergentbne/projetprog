var vies = 3;

function start(etape) {
  const etapedata = etapes[etape];

  if (etapedata.type == "mort") {
    vies = vies - 1;
    if (vies == 0) {
      start(1);
      return;
    }
  }
  if (etapedata.type == "vie") {
    vies = vies + 1;
  }

  const vie = document.getElementById("vie");
  vie.innerText = "❤️".repeat(vies);

  const e = document.getElementById("questions");
  e.innerHTML = "";
  const titre = document.createElement("h1");
  titre.innerText = etapedata.label;
  e.appendChild(titre);

  // questions
  const reponses = etapedata.reponses;
  for (const reponse of reponses) {
    const bouton = document.createElement("button");
    bouton.innerText = reponse.label;
    bouton.onclick = () => {
      start(reponse.destination);
      if (reponse.video){
        const v = document.getElementById("video");
        v.innerHTML = ""
        var source = document.createElement("source");

        source.setAttribute("src", reponse.video);
        v.appendChild(source);
        v.load();
        v.play();

        v.style.display = "block";
        v.requestFullscreen();
      }
      
    };
    e.appendChild(bouton);
  }
  const vid = document.getElementById("video");
  vid.onended = function () {
    vid.style.display = "none";
  };
}
