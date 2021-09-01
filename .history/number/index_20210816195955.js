//random number in range [0,n)

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

//random number in range [a,b] with (a<b)

function randomNumberInRange(a, b) {
  if (a >= b) return -1;
  const random = Math.random() * (b - a);
  const result = Math.round(random) + a;
  return result;
}
console.log(randomNumberInRange(1, 5));
// write a function to calculate the area of a rectangle

function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  const result = a * b;
  return result;
}
console.log(calcAreaOfRectangle(3, 5));

//2. Write a function to calculate perimeter of a rectangle

function calcPerimeterOfRectangle(a, b) {
  if (a <= 0 || b <= 0) return -1;
  const result = (a + b) * 2;
  return result;
}
console.log(calcPerimeterOfRectangle(3, 3));

// write a function to calculate the area of a circle

function calcAreaOfCircle(r) {
  if (r <= 0) return -1;
  return Math.PI * r * r;
}
console.log(calcAreaOfCircle(5));
//1 .Get the ones of number having 3 digits

function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;
  return n % 10;
}
console.log(extractTheOnes(525));
//get the tens of number having 3 digits

function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;
  return Math.trunc((n % 100) / 10);
}
console.log(extractTheTens(265));

//get the hundred of number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;
  return Math.trunc(n / 100);
}
console.log(extractTheHundreds(265));

//4. Sum all digits of a number having 3 digits
function sumDigits() {
  if (n.toString().length !== 3) return -1;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  const ones = n % 10;
}
