//Finding something is array ...
const singleArr = ['ashraf'];

const simpleArr = [
  'ashraf',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
  'something',
  'ashraf',
  'anything',
];

const large = new Array(100).fill('ashraf');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'ashraf') {
      console.log('Found ashraf in the array!');
    }
  }
  let t1 = performance.now();
  console.log('Call of the function took' + (t1 - t0) + 'milliseconds');
}

findNemo(large); // O(n) --> Linear Time

function compressItems(items) {
  console.log(items[0]); // O(1) --> Constant time
}

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) --> Constant time

// What is the Big O of the below function?
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n) --> number of inputs
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// BIG O(3 + 4n) --> O(n)

// What is the Big O of the below function?
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n) --> numbers of inputs
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n) --> numbers of inputs
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 7n) --> O(n)

// Big O Rules
// 1) --Worst Case-- (finding the worst case of Big O in for example an array if we had an array and we're searching for an item in it and it was the first item then we won't loop thru all of the array to find it but what if it was the last item ? then we would loop thru all of the array to get to the item we want but still in both cases it counts as a BIG O(n)).

//------------------------------------------------------------------------

// 2) --Remove/Drop The Constants--

function printTheFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// O(1 + n/2 + 100)
// O(n/2 + 101)
// O(n/2 + 1)
// O(n + 1)
// O(n)

function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}
// O(2n)
// O(2)

// no matter how much constants we have got in the BIG O for example
// O (1 + n/2 + 100) it will turn into --> O(n) so any number in compare of N would be nothing so it is better to remove it.

//------------------------------------------------------------------------

// 3) --Different Terms For Inputs--

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b) because we have two different arrays the BIG O of the function we can't treat it like other functions who takes one paramter or one array because to different arrays makes a different and we must consider them both in the BIG O and it will be O(a + b) OR O(n + n).

// if for loops were nested the BIG O would been O(a * b).

// Log all pairs of array

const boxes = [1, 2, 3, 4, 5];
const letterBoxes = ['a', 'b', 'c', 'd', 'e'];

let log;

// my solution :)!
function logAllPairsOfArrayNumbers(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    log = boxes[i];

    boxes.forEach(function (box) {
      console.log(`(${log},${box})`);
    });
  }
}

// another solution...
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArrayNumbers(boxes);
logAllPairsOfArray(letterBoxes);

// what is the BIG O of these ?

// O(n * n) --> O(n^2)
// because we are having a nested loops the number of operations will be doubled every time the length of the array is bigger and because of that the BIG O of this array will be O(n * n) that means O(n^2).

//------------------------------------------------------------------------

// 3) --Drop Non Dominants--

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// O(n + n * n) --> O(n + n^2)  always keep the Dominant term :) like this example n^2 is more important soe the result will be O(n^3) because we have got 3 loops in the function.

// O(n!) --OH NO-- the worst

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Which code is best ??

// 1-Readable

// 2-Memory --> Space Complexity

// 3-Speed --> Time Complexity
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function hiii(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('hiiiiii!');
  }
}

hiii([1, 2, 3, 4, 5]); // Space Complexity of this is O(1)

function arrayOfHello(n) {
  let helloArray = [];

  for (let i = 0; i < n.length; i++) {
    helloArray[i] = 'Hello';
  }

  return helloArray;
}

arrayOfHello(6); // Space Complexity --> O(n)

const stringsArray = ['hi', 'hello', 'Good morning'];

const arrayOfObjects = [
  {
    tweet: 'hi',
    date: 2012,
  },
  {
    tweet: 'Hello',
    date: 2014,
  },
  {
    tweet: 'Good morning',
    date: 2018,
  },
]; // O(n^2) because it gonna take nested loops.

stringsArray[0]; // O(1)
stringsArray[stringsArray.length - 1]; // O(1)

// what is the complexity of this function ??
'jdsakljd;kwq;vkbn;sdkjk;ldsjf;lsdkjfl'.length; // it depends on how the language works but in javascript the time complexity of it is O(1) because .length is not a function it is a object property.
