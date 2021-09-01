//random number in range [0,n)
/*
function randomNumber(n) {
  if (n <= 0) return -1;
  const random = Math.random() * n;
  const result = Math.round(random);
  return result;
}
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
console.log(randomNumber(5));
*/
//random number in range [a,b] with (a<b)
/*
function randomNumberInRange(a, b) {
  if (a >= b) return -1;
  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;
  return result;
}
console.log(randomNumberInRange(1, 5));  */
// write a function to calculate the area of a rectangle
function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  const result = a * b;
  return result;
}
console.log(calcAreaOfRectangle(3, 5));
