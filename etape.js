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
        destination: 7,
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
        label: "un boulet fait bobo",
        video: "videos/piege-boulet-1.mp4",
        destination: 12,
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
        label: "Une bonne grosse grenade.",
        video: "videos/grenade.mp4",
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
        video: "videos/fusee-1.mp4",
        destination: 16  ,
      },
      {
        label: "mes pied sont bien assez vite",
        video: "videos/rattrape-1",
        destination: 15,
      },
      {
        label: "Autre chose",
        video: "",
        destination: 2,
      },
    ],
  },
  { // 8 +vie
    label: "Cette canne étais nutritive ! vous gagnez une (1) vie. vous avez maintenant XXX vies !",
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
        destination: 13,
        video: "",
      },
      {
        label: String.fromCharCode(2649),
        video: "",
        destination: 0,
      },
      {
        label: String.fromCharCode(1150),
        video: "",
        destination: 0,
      },
      {
        label: String.fromCharCode(3210),
        video: "",
        destination: 0,
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
        label: "en fait, non.",
        video: "",
        destination: 2,
      }
    ]
  },
  { // 11 you win !
    label: "WINNER WHOOOOOOOO",
    type: "",
    reponses: [
      {
        label: "credit",
        destination: 11,
        video: "videos/credits.mp4"
      }
    ]
  },
  { // 12 piege boulet
    label: "Bon... le premier essait étais un échec cuisant. Peux être que ça va mieux marcher cette fois.",
    type: "mort",
    reponses: [
      {
        label: "Je suis partant !",
        destination: 0,
        video: "videos/piege-boulet-2.mp4",
      },
      {
        label: "Je vais rester ou j'en suis rendu et revenir sur mes pas.",
        
        destination: 2,
      }
    ]
  },
  { // 13 suite de conoway
    label: "Le captcha refuse de te laisser et tu dois passer un autre test. résous cette suite de chiffre suite de conway : 1, 11, 21, 1211, 111221, ...",
    type: "",
    reponses: [
      {
        label: "12122112",
        destination: 0,
      },
      {
        label: "312211",
        destination: 14,
      },
      {
        label: "4192231",
        destination: 0,
      },
      {
        label: "1231113",
        destination: 0,
      },
      {
        label: "312211",
        destination: 0,
      }
    ]
  },
  { // 14 suite de conoway
    label: "bon, je te promet que c'est le dernier. résous cette suite de Fibonacci : 1, 1, 2, 3, 5, 8, 13, ...",
    type: "",
    reponses: [
      {
        label: "17",
        destination: 0,
      },
      {
        label: "21",
        destination: 11,
        video: "videos/youwin.mov"
      },
      {
        label: "19",
        destination: 0,
      },
      {
        label: "9",
        destination: 0,
      },
      {
        label: "25",
        destination: 0,
      }
    ]
  },
  {  // 15- Piege pt 2a
    label: "Zut, zut et rezut. on continue?",
    reponses: [
      {
        label: "Absolument !",
        video: "videos/rattrape-2.mp4",
        destination: 0,
      },
      {
        label: "Absolument PAS !",
        video: "",
        destination: 2,
      },
    ],
  },
  {  // 15- Piege pt 2a
    label: "Zut, zut et rezut. on continue?",
    reponses: [
      {
        label: "Absolument !",
        video: "videos/fusee-2.mp4",
        destination: 0,
      },
      {
        label: "Absolument PAS !",
        video: "",
        destination: 2,
      },
    ],
  },
];
