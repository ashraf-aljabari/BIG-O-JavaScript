// Given 2 arrays, create a function that let's a user
// know (true/false) wether these two arrays contain any common
// items.
// For example:
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// Should returns false.
// ---------------------------------- //
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
// Should returns true.

// 2 parameters - arrays - no size limit
// return true or false

// my solution
// this approach is not the best. nested loops.
function arraysContainCommonItems(array1, array2) {
  let doesItMatch;
  array1.forEach((element) => {
    doesElementMatch = element;

    array2.forEach((element2) => {
      if (element2 === doesElementMatch) {
        doesItMatch = true;
        return;
      } else {
        doesItMatch = false;
      }
    });
  });

  console.log(doesItMatch);
}

arraysContainCommonItems(array1, array2); // O(n^2) space Complexity is O(1) we have got no new variables.

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true,
//}
//array2[index] === obj.properties
// break two arrays into one

function containsCommonItem(arr1, arr2) {
  // loop through first array and create
  // obj where properties === items in the array.
  // can we assume always 2 params ?
  // we can break the function to multiple functions also
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if
  // item in second array exists on created obj.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) --> O(n) Time Complexity
// O(a) --> O(n) space Complexity
console.log(containsCommonItem(array3, array4));

// another solution using javascript functions
function containsCommonItem1(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem1(array3, array4));
