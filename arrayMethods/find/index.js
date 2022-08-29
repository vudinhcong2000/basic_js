// var courses = [
//   {
//     id: 1,
//     name: "javascript",
//     coin: 250,
//   },
//   {
//     id: 2,
//     name: "html, css",
//     coin: 0,
//   },
//   {
//     id: 3,
//     name: "Ruby",
//     coin: 0,
//   },
//   {
//     id: 4,
//     name: "Ruby",
//     coin: 400,
//   },
//   {
//     id: 5,
//     name: "ReactJS",
//     coin: 500,
//   },
// ];

var courses = [1, 3, 3, 4, 5];
var isFree = courses.find((course, index) => {
  console.log(index);
  return course === 3;
});
console.log(isFree);
