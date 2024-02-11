/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {
//     if (numbers.length === 0) {
//         return undefined;
//     }

//     let largestElement = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largestElement) {
//             largestElement = numbers[i];
//         }
//     }
//  //   console.log(largestElement)
//     return largestElement;
// }

//findLargestElement([9, 13, -7, -2, -9, 11]);

// function findLargestElement(numbers) {
//     let biggestElement = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > biggestElement) {
//             biggestElement = numbers[i];
//         }
//     }
//     return biggestElement;
// }
function findLargestElement(numbers) {
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max)
        max = numbers[i];
    }
 // console.log(max)
    return max;
  }
  //console.log(findLargestElement([-4,-5,-6,-8]));
module.exports = findLargestElement;

//console.log("hello world")