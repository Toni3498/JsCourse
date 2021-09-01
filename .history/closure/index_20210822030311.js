function createCounter() {
  let counter = 0;
  function increase() {
    return ++counter;
  }
  return increase;
}
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
// Closure là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó
//Ứng dụng :
// Viết code ngắn gọn
// biểu diễn, ứng dụng "Tính đóng gói (encapsulation) trong OOP".
// Biến được tham chiếu(reference)trong closure sẽ ko bị xóa khỏi bộ nhớ khi hàm cha thực thi xong

function createLogger(namespace) {
  function logger(message) {
    console.log(`$[{namespace}]` + `${message}`);
  }
  return logger;
}
