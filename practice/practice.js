const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill"];
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took" + (t1 - t0));
}

//findNemo(everyone)

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsofArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
}

//logAllPairsofArray(boxes);

// Reverse a string
function reverse(str) {
  //check input/edge values
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not good";
  }
  var ans = [];
  for (let i = str.length - 1; i >= 0; i--) {
    ans.push(str[i]);
  }
  return ans.join("");
}
//console.log(reverse('hey'))

function reverse2(str) {
  return str.split("").reverse().join("");
}

//console.log(reverse2('my name is tina'))

// Merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1item = arr1[0];
  let arr2item = arr2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1item || arr2item) {
    if (!arr2item || arr1item < arr2item) {
      mergedArray.push(arr1item);
      arr1item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2item);
      arr2item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

//console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))

// Given an array, return first recurring character
function firstRecurring(arr) {
  const repeats = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!repeats.has(arr[i])) {
      repeats.add(arr[i]);
    } else {
      return arr[i];
    }
  }
  return null;
}

//console.log(firstRecurring([2,5,6,5,2,1,1]))

// Find the factorial of any number in 2 ways: recursively and iteratively
function findFactorialRecursive(number) {
  debugger;
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIteratively(number) {
  let ans = 1;
  for (let i = number; i > 0; i--) {
    ans *= i;
  }
  return ans;
}

//console.log(findFactorialRecursive(5))
//console.log(findFactorialIteratively(2))

// Given a number N, return the index value of the Fibonacci sequence
function fibonacciIterative(n) {
  // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//console.log(fibonacciIterative(8))
//console.log(fibonacciRecursive(8))

// Implement a function that reverses a string using iteration and recursion
function reverseStringIteration(str) {
  const arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
}

function reverseStringIteration2(str) {
  return str.split("").reverse().join("");
}

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringIteration("yoyo mastery"));
console.log(reverseStringIteration2("yoyo mastery"));
console.log(reverseStringRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'
