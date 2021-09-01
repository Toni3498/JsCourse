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
//
