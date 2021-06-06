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
    reponses: [{
        label: "da end",
        destination: 1,
        video: "videos/fin.mov",
             }
      ]
  },
  { // 2- Debut
    label: "Vous avez faim. Vous voulez un RoadRunner pour le souper",
    reponses: [
      {
        label: "Allons tendre un piege !",
        video: "videos/reflexion1.mp4",
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
        video: "videos/reflexion3.mov",
        destination: 3,
      },
      {
        label: "Impossible, laissons faire",
        video: "videos/fakebouffe.mp4",
        destination: 8,
      },
    ],
  },
  {  // 3- Piege
    label: "Tendons un piege",
    reponses: [
      {
        label: "Une enclume sur la tête ne dois pas faire de bien.",
        video: "videos/enclume.mp4",
        destination: 0,
      },
      {
        label: "Faisont exploser le pont !",
        video: "videos/explosif-pont-1.mp4",
        destination: 4,
      },
      {
        label: "Un trou, un gros trou",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
    ],
  },
  {  // 4- Piege pt 2a
    label: "Zut, zut et rezut. on continue?",
    reponses: [
      {
        label: "Absolument !",
        video: "videos/explosif-pont-2.mp4",
        destination: 0,
      },
      {
        label: "Absolument PAS !",
        video: "",
        destination: 2,
      },
    ],
  },
  { // 5- Explosifs
    label: "Kaboum !",
    reponses: [
      {
        label: "Une bombe a partir d'un cerf-volant",
        video: "videos/cerf_volant.mp4",
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
  { // 6- porte Explosifs
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
        label: "Une fusée serait parfait pour le travail.",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0  ,
      },
      {
        label: "Des patins à roulettes ne s'use pas vite,",
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
  { // 8 +vie
    label: "cette canne étais nutritive ! vous gagnez une (1) vie. vous avez maintenant XXX vies !",
    type: "vie",
    reponses: [
      {
        label: "NICE !",
        destination: 2,
      },
      {
        label: "Nan, mais je voulais vraiment quitter...",
        video: "videos/abandonne-1.mp4",
        destination: 10,
      }
    ]
  },
  { // 9 end of da game
    label: "Il faut faire le captcha d'abord ! Quel est la réponse à cette énigme ? (vous avez 5 secondes)",
    type: "enigme",
    reponses: [
      {
        label: "6𝛛",
        destination: 11,
      },
      {
        label: String.fromCharCode(2649),
        video: "videos/abandonne-1.mp4",
        destination: 10,
      },
      {
        label: String.fromCharCode(1150),
        video: "videos/abandonne-1.mp4",
        destination: 10,
      },
      {
        label: String.fromCharCode(3210),
        video: "videos/abandonne-1.mp4",
        destination: 10,
      }
    ]
  },
  { // 10 end of da game
    label: "Vraiment ?",
    type: "",
    reponses: [
      {
        label: "Oui, je préfère manger du \"chez pateux\"",
        destination: 9,
      },
      {
        label: "Nan, mais je voulais vraiment quitter...",
        video: "videos/abandonne-1.mp4",
        destination: 1,
      }
    ]
  },
  { // 11 you win !
    label: "Vraiment ?",
    type: "",
    reponses: [
      {
        label: "Oui, je préfère manger du \"chez pateux\"",
        destination: 9,
      },
      {
        label: "Nan, mais je voulais vraiment quitter...",
        video: "videos/abandonne-1.mp4",
        destination: 1,
      }
    ]
  }
];
