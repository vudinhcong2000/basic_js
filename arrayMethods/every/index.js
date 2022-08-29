var courses = [
  {
    id: 1,
    name: "javascript",
    coin: 0,
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
    coin: 500,
  },
];

var isFree = courses.every((course, index) => {
  console.log(index);
  return course.coin === 0;
});
console.log(isFree);
