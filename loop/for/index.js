// let i = 0 : khởi tạo biến cho vòng lặp, chạy duy nhất 1 lần, trong những lần khác vòng lặp lặp đi lặp lại thì đoạn mã không được chạy lại.
// i <= 1000 : điều kiện để vòng lặp thực hiện
// i++ : tăng giá trị biến chạy lên 1 mỗi khi thực hiện xong hành động

// for (var i = 1; i <= 1000; i++) {
//   console.log(i);
// }

var myArray = ["Javascript", "PHP", "Python", "Java", "c++", "c#", "C"];

// console.log(myArray);
var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
  console.log(myArray[i]);
}
