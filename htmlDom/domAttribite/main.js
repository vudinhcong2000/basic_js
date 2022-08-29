const heading = document.querySelector("h1");
//add attribute mặc định của thẻ
// heading.className = "heading";

// add attribute tùy ý
heading.setAttribute("href", "heading");

//lấy ra value của attribute
console.log(heading.getAttribute("href"));
console.log(heading.getAttribute("class"));
