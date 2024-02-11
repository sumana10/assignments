/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Step 1: Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false; // Return false if lengths are different
  }

  // Step 2: Define a function to count the frequency of each character in a string
  const charCount = str => str.split('').reduce((acc, char) => {
    // Step 3: Get the ASCII code of the character, converting to lowercase
    const index = char.toLowerCase().charCodeAt(0);
    // Step 4: Increment the count for the character in the accumulator
    acc[index] = (acc[index] || 0) + 1;
    // Step 5: Return the updated accumulator for the next iteration
    return acc;
  }, {});

  // Step 7: Count the character frequency for each input string
  const charCount1 = charCount(str1);
  const charCount2 = charCount(str2);

  // Step 8: Check if the character frequencies are identical using every()
  return Object.keys(charCount1).every(key => charCount1[key] === charCount2[key]);
}

module.exports = isAnagram;
// function check(strx, stry) {
//   let a = 0;
//   for (let i = 0; i < strx.length; i++) {
//     for (let j = 0; j < stry.length; j++) {
//       if (strx[i] == stry[j]) {
//         a += 1;
//         break;
//       }
//     }
//   }
//   return a == strx.length;
// }
// function check(strx,stry){
//   let a=0;
//   for (let i=0;i<strx.length;i++){
//     for(let j=0;j<strx.length;j++){
//       if(strx[i] == stry[j]){
//         a+=1;
//         break;
//       }
//     }
//   }
//   if(a == strx.length){
//     // console.log("true");
//     return true;
//   }
//   else{
//     // console.log("false");
//     return false;
//   }
// }
// function isAnagram(str1, str2) {
//   x = str1.toLowerCase();
//   y = str2.toLowerCase();

//   if (str1.length > str2.length) {
//     return check(x, y);
//   } else {
//     return check(y, x);
//   }
// }


//module.exports = isAnagram;