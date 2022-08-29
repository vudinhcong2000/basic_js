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
    name: "Ruby",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];

var isFree = courses.filter((course, index) => {
  console.log(index);
  return course.name === "Ruby";
});
console.log(isFree);
