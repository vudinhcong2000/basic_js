// var boxElement = document.querySelector(".box");

// boxElement.classList.add("red", "blue");
// boxElement.classList.remove("box");

// setTimeout(() => {
//   boxElement.classList.add("red", "blue");
// }, 3000);
// console.log(boxElement.classList.value);

var getElement = document.querySelectorAll("div");

console.log(getElement);

getElement.forEach((item) => {
  item.classList.add("box");
  console.log(item);
});
