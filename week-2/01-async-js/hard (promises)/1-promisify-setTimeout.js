/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, n * 1000);
    });
    return p;
  }
  

// function wait(n) {
//   const p = new Promise((resolve) =>{
//     setTimeout(() => { 
//       resolve()
//     }, n*1000);
//   })
//   return p;
// }

// function promisifySetTimeout(n) {
//   const p = new Promise((resolve) =>{
//     setTimeout(() => { 
//       resolve()
//     }, n);
//   })
//   return p;
// }

// function wait(n) {
//   return promisifySetTimeout(n * 1000);
// }

// // Example usage:
// wait(2).then((result) => {
//   console.log(result); // It will log 'Promise is resolved' after 2 seconds
// });




module.exports = wait;
  