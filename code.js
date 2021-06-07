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
    if (vies >= 4) {
      vies = vies - 1
      alert ("sale tricheur -_-")
    }
    vies = vies + 1;
    start(2);
    //Des personnes qui regarde le code vairont que il n'y a pas de code empechant d'exploiter les vies, et c'est vrai !
    //abuser pas trop de ça svp, c'est déjà assez dur comme ça et j'ai pas envie de faire un autre truc qui va encore probablement tout casser. JK JE L'AI FAIT ANYWAY
  }

  if (etapedata.type == "gameover") {
    vies = 0
  }
  const vie = document.getElementById("vie");
  var timer;
  const en = document.getElementById("steve")
    if (etapedata.type == "enigme") {
      en.style.display = "block"
      timer = setTimeout(() => {
        start(0);
        alert("Vous n'avez pas répondu à temps.");
      }, 5000);
  }
  else {
    en.style.display = "none"
  }
  vie.innerText = "❤️".repeat(vies);

  const e = document.getElementById("questions");
  e.innerHTML = "";
  const titre = document.createElement("h1");
  titre.innerText = etapedata.label.replace("XXX", vies);
  e.appendChild(titre);

  // questions
  const reponses = etapedata.reponses;
  for (const reponse of reponses) {
    const bouton = document.createElement("button");
    bouton.innerText = reponse.label;
    bouton.onclick = () => {
      clearTimeout (timer);
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
