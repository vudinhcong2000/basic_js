// innerText, textContent

// var headingElement = document.querySelector(".box");
// ---------------------------------------------
//Lấy ra text trong thẻ có class heading
// console.log(headingElement.textContent);
// console.log(headingElement.innerText);

// ---------------------------------------------
//sửa nội dung của class heading
// headingElement.innerText = "New heading";
// console.log(headingElement.innerText);

// ------------ innerHTML, OuterHTML
// var boxElement = document.querySelector(".box");

// boxElement.innerHTML = "<h1>New heading</h1>";
// console.log(boxElement.innerHTML);
// console.log(document.querySelector("h1").innerText);

var boxElement = document.querySelector(".box");
// console.log(boxElement);

boxElement.outerHTML = "<h1>New heading</h1>";
console.log(boxElement.outerHTML);
// console.log(boxElement.);
// console.log(document.querySelector("h1").innerText);
