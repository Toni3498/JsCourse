/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
/*
function tripple(numb) {
  return numb * 3;
}

function multiply(numbers) {
  return numbers.map(function (x) {
    return tripple(x);
  });
}
var arr = [1, 2, 3];
console.log(multiply(arr));


// Use array map make an array of strings of the names
//namesOnly(users)
//["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
var users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
function nameOnly(users) {
    var name= users.map(function(x){
        return x.name;
    });
    return name;
}
console.log(nameOnly(users));


// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
    {
      name: "Angelina Jolie",
      age: 80
      
    },
    {
      name: "Eric Jones",
      age: 2
      
    },
    {
      name: "Paris Hilton",
      age: 5
      
    },
    {
      name: "Kayne West",
      age: 16
      
    },
    {
      name: "Bob Ziroll",
      age: 100
      
    }
  ];

  function changeSomething(arr){
        return arr.map(function(x){
                return "<h1>"+x.name+"</h1>" +"<h2>"+x.age+"</h2>";
        });
  }
  console.log(changeSomething(users));


///----------filter
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
var arr=[1,2,3,5,4,7,8];
function doSth(arr){
        return arr.filter(function(x){
            return x>=5;
        });
}
console.log(doSth(arr));


// Given an array of numbers, return a new array that only includes the even numbers.
var arr=[1,2,3,5,4,7,8];
function filterEvenNumb(arr){
    return arr.filter(function(x){
        return x%2==0;
    });
}
console.log(filterEvenNumb(arr));
*/

/**
 * Give a list of students, filter out non-female 
 
 
 var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];

    function maleOnly(arr){
        return arr.filter(function(x){
            return x.gender=='male' ;
               });
    }
    console.log(maleOnly(members));
    
    //----======find
    // Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
    // Nếu không tìm thấy số chẵn nào thì trả về undefined

    var numbers=[1,35,13,14];
    function findFirsteven(arr){
        var newArr= arr.find(function(x){
            return x%2==0;
        });
        if(newArr==[]){
            return undefined;
        }
            return newArr;
    }
    console.log(findFirsteven(numbers));
    */

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */
/*
     var numbers=[1,35,13,27,14];
     function firstNumber(x,arr){
            return arr.find(function(n){
                return n%x==0;
            });
     }
   console.log("Số đầu tiên trong mảng mà chia hết cho số x là : "+firstNumber(3,numbers));
   */

// Turn an array of voter objects into a count of how many people voted
/*
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  function countVoter(arr){
      var voters= arr.filter(function(x){
        return x.voted==true;
    });
        return voters.length;
  }
  console.log(countVoter(voters));
  */

// Given an array of all your wishlist items,
//figure out how much it would cost to just buy everything at once
/*
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];

  function calcMoney(arr){
        var priceOnly=arr.map(function(x){
            return x.price;
        } );
        return priceOnly.reduce(function(a,b){
            return a+b;
        },0);
  }
  console.log("Tổng bill là : "+calcMoney(wishlist)); */
//Tính tổng bill
/*
  var products=[
      {name:'orange',quanlity:5,price:5001},
      {name:'milk',quanlity:2,price:4001},
      {name:'fish',quanlity:3,price:201}
  ];
  function totalBill(products){
    return products.reduce(function(x,y){
            return x+(y.quanlity*y.price);
    },0);
  }
  console.log("Tổng bill thanh toán là : ", totalBill(products));
*/
// Dùng reduce tạo ra string <Bill><Tom><Kim>
/*
var names=['Tom','Bill','Kim'];
function createString(arr){
    
       var newStr=arr.map(function(x){
           return '<'+x+'>';
       });
       return newStr.reduce(function(a,b){
           return a+b;
       });
}
console.log(createString(names)); */

// -----------------------------------
// HỌC REDUCE() QUA CÁC VÍ DỤ ĐƠN GIẢN
// -----------------------------------

// Trong cái mớ hàm này
// for...i, for...of
// forEach
// filter
// map
// ...
// Cái hàm dễ diên nhất chính là reduce() :P
// Hàm này nó làm gì?
// Lặp qua các phần tử của mảng,
// tính toán và trả về 1 KQ cuối cùng

/*

// Hàm tính tổng viết bằng for...of
const sumFor = (numberList) => {
  let sum = 0;

  for (const number of numberList) {
    const newSum = sum + number;
    // để sử dụng ở bước sau
    sum = newSum;
  }

  return sum;
};
console.log(sumFor([1, 2, 3, 4, 5]));

// 1. Xác định giá trị khởi tạo
// 2. Xác định công thức với KQ của bước trước đó
// --
// 0
// result = prevResult + current


const sumReduce = (numberList) => {
  // return numberList.reduce((resultFromLastStep, curValue) => { }, 0);
  return numberList.reduce((sum, number) => sum + number, 0);

  // [1, 2, 3]
  // sum = 0, number = 1 --> 0 + 1 = 1
  // sum = 1, number = 2 --> 1 + 2 = 3
  // sum = 3, number = 3 --> 3 + 3 = 6
};
console.log(sumReduce([1, 2, 3, 4, 5]));




// Find the first longest word in list
// Input:   ['love', 'easy', 'frontend']
// Output:  frontend
const findTheLongestWord = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) return null;

  return wordList.reduce((theLongestWord, currentWord) => {
    return theLongestWord.length > currentWord.length
      ? theLongestWord
      : currentWord;
  }, wordList[0]);
};
const wordList = ['love', 'easy', 'frontend'];
console.log(findTheLongestWord(wordList));


*/
// Viết hàm để chuyển đối mảng thành object như bên dưới sử dụng reduce()
// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
//
// is converted to
//
// const itemMap = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
/*const arrayToObject = (itemList) => {
  return itemList.reduce((itemMap, item) => {
    itemMap[item.id] = item.value;
    return itemMap;
  }, {});
};
const itemList = [
  { id: "key1", value: "Superman" },
  { id: "key2", value: "Wonder Woman" },
  { id: "key3", value: "Spider man" },
];
console.log(arrayToObject(itemList));
*/

// Tóm lại
// Mình có thể dùng reduce() nếu như gặp bài toán
// lặp qua một mảng -> xử lý gì đó -> trả về một kết quả cuối cùng.
// Vd như tìm min, max, sum, ...

// BÀI TẬP
// 1. Viết hàm findMin(numberList) sử dụng reduce()
/*function findMin(numberList){
  
  return numberList.reduce(function(minItem,item){
          if(minItem>item){
            minItem=item;
          }
          return minItem;
  },0);
}
var numberList=[1,5,8,7,6,3,-2,5];
console.log(findMin(numberList));  */
// 2. Viết hàm findMaxEvenNumber(numberList) sử dụng reduce()
/*
function findMaxEvenNumber(numberList) {
  return numberList.reduce(function (maxEvenNumb, item) {
    if (item % 2 == 0 && item > maxEvenNumb) {
      maxEvenNumb = item;
    }
    return maxEvenNumb;
  }, 0);
}
var numberList = [1, 5, 8, 7, 6, 3, -2, 5];
console.log(
  "Số chẵn lớn nhất có trong mảng là " + findMaxEvenNumber(numberList)
);
*/

// 3. Viết hàm chuyển đổi object thành mảng, ngược lại với bài ở trên.

// HAPPY CODING!!! :)
// PS: Nếu các bạn vẫn còn chưa rõ phần nào thì hãy bình luận bên dưới nhé.
// Nếu đã thông suốt thì làm bài tập thôi ;)
