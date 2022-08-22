/*----------------- array -----------------*/
var languages = ["Java", "C++", "C#", "Python", "JavaScript"];
console.log("----------------- array -----------------");
for (var value of languages) {
  console.log(value);
}

/*----------------- String -----------------*/

var myString = "cong";

console.log("----------------- String -----------------");
for (var value of myString) {
  console.log(value);
}

/*----------------- object -----------------*/

var myInfo = {
  name: "Dinh Cong",
  age: 22,
  address: "Ha Noi",
  phone: "0989898989",
};

console.log("----------------- object -----------------");

// console.log(Object.keys(myInfo)); trả về một mảng các key
// console.log(Object.values(myInfo)); trả về một mảng các value

for (var value of Object.values(myInfo)) {
  console.log(value);
}
