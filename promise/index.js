function displayResult(some) {
  console.log(some);
}
let myPromise = new Promise(function (resolve, reject) {
  let x;
  if (x) {
    resolve('Yup');
  } else {
    reject('Error !!!');
  }
});
myPromise.then(
  function resolve(value) {
    displayResult(value);
  },
  function reject(err) {
    displayResult(err);
  }
);
