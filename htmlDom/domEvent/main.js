// var inputElement = document.querySelector("select");

// inputElement.onchange = function (e) {
//   console.log(e.target.value);
// };
var aElement = document.links;
// console.log(aElement);

for (var i = 0; i < aElement.length; ++i) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}
