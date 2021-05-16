//3= t'es mort
//2= tu progresse
//1= tu pert 1 pv

etapes = [
  {
    label: "vous êtes mort",
    type: "mort",
    reponses: [
      {
        label: "Recommencer",
        destination: 2,
      }]
  },
  {
    label: "Game over",
    type: "gameover",
    reponses: [
      ]
  },
  {
    label: "vous êtes dans l'avion",
    reponses: [
      {
        label: "vous vous endormez et pensez à votre poisson rouge",
        video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        destination: 1,
      },
      {
        label: "vous combattez les terroriste à main nue",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 0,
      },
      {
        label:
          "vous combattez les terroriste avec le fusil que vous avez apporté avec vous",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
      {
        label: "vous sautez sans parachute",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 1,
      },
    ],
  },
  {
    label: "vous êtes dans la ferme",
    reponses: [
      {
        label: "vous sautez sans parachute",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 3,
      },
      {
        label: "steve vous mange",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 3,
      },
      {
        label: "REEEEEEEEEEEEEE",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
    ],
  },
  {
    label: "vous êtes dans la ferme",
    reponses: [
      {
        label: "vous sautez sans parachute",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 2,
      },
      {
        label: "steve vous mange",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 4,
      },
      {
        label: "REEEEEEEEEEEEEE",
        video: "https://www.youtube.com/watch?v=ggp853CtBZw",
        destination: 1,
      },
    ],
  },
];
