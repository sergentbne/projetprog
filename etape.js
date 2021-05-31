//3= t'es mort
//2= tu progresses
//1= tu perds 1 pv

etapes = [
  { // 0
    label: "vous êtes mort",
    type: "mort",
    reponses: [
      {
        label: "Recommencer",
        destination: 2,
      }]
  },
  { // 1
    label: "Game over, rechargez la page pour recommencer.",
    type: "gameover",
    reponses: [
      ]
  },
  { // 2- Debut
    label: "Vous avez faim. Vous voulez un RoadRunner pour le souper",
    reponses: [
      {
        label: "Allons tendre un piege !",
        video: "videos/reflexion.mp4",
        destination: 3,
      },
      {
        label: "Rien de tel que des explosifs",
        video: "videos/reflexion2.mov",
        destination: 5,
      },
      {
        label:
          "Il faut etre capable de le rattraper",
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        destination: 3,
      },
      {
        label: "Impossible, laissons faire",
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        destination: 1,
      },
    ],
  },
  {  // 3- Piege
    label: "Tendons un piege",
    reponses: [
      {
        label: "Un enorme boulet pour lui tomber sur la tete",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "Des graines pour oiseau magnetiques ?",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "Un trou, un gros trou",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
    ],
  },
  {  // 4- Piege pt 2a
    label: "",
    reponses: [
      {
        label: "Un enorme boulet pour lui tomber sur la tete",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "Des graines pour oiseau magnetiques ?",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "Un trou, un gros trou",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
    ],
  },
  { // 5- Explosifs
    label: "Kaboum !",
    reponses: [
      {
        label: "Une bombe a partir d'un cerf-volant",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0  ,
      },
      {
        label: "Une offre de graines gratuites qui explosent",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "une porte que, dès ouverte, KABOOOOM",
        video: "videos/porte_explosive-1.mp4",
        destination: 6,
      },
    ],
  },
  { // 6- Explosifs
    label: "Oh non ! Voulez vous vous cacher?",
    reponses: [
      {
        label: "Oui.",
        video: "videos/porte_explosive-2.mp4",
        destination: 0  ,
      },
      {
        label: "Non.",
        destination: 2,
      },
    ],
  },
  { // 7- Rattraper
    label: "Commandons des accessoires a ACME",
    reponses: [
      {
        label: "Une fusee",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0  ,
      },
      {
        label: "Des patins a roulettes",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label: "Autre chose",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
    ],
  },
];
