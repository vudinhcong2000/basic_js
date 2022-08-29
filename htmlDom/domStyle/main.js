var boxElement = document.querySelector(".box");

// console.log(boxElement);

console.log(boxElement.style);

// boxElement.style.width = "200px";
// boxElement.style.height = " 200px";
// boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
  width: "200px",
  height: "200px",
  backgroundColor: "#fff",
  border: "1px solid red",
});

console.log(boxElement.style.width);
