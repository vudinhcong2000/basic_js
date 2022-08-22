/*----------------- object -----------------*/

var myInfo = {
  name: "Dinh Cong",
  age: 22,
  address: "Ha Noi",
  phone: "0989898989",
};
console.log("----------------- object -----------------");
for (var key in myInfo) {
  //   console.log(typeof key);
  console.log(myInfo[key]);
}

/*----------------- array -----------------*/

var languages = ["Java", "C++", "C#", "Python", "JavaScript"];
console.log("----------------- array -----------------");

for (var key in languages) {
  console.log(languages[key]);
}

/*----------------- string -----------------*/
var myString = "javascript";
console.log("----------------- string -----------------");
for (var key in myString) {
  console.log(myString[key]);
}
