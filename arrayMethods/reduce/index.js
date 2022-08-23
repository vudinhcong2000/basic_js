var courses = [
  {
    id: 1,
    name: "javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "html, css",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },

  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 700,
  },
];

var totalCoin = courses.reduce((sumCoin, course) => {
  return sumCoin + course.coin;
}, 0);

console.log(totalCoin);
