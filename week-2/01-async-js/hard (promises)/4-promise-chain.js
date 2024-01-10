/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

// Placeholder wait function
function wait2(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

// Placeholder wait function
function wait3(time) {
    return new Promise(resolve => setTimeout(resolve, time*1000));
}

// function calculateTime(t1, t2, t3) {
//     let start = Date.now();

//     return wait1(t1)
//         .then(() => {
//             console.log("After wait1:", Date.now() - start);
//             return wait2(t2);
//         })
//         .then(() => {
//             console.log("After wait2:", Date.now() - start);
//             return wait3(t3);
//         })
//         .then(() => {
//             let end = Date.now();
//             console.log("After wait3:", end - start);
//             return end - start;
//         })
//         .catch((error) => {
//             console.error("Error in calculateTime:", error);
//             throw error;
//         });
// }

// module.exports = calculateTime;


function calculateTime(t1, t2, t3) {
    let start = new Date();

    return call(t1, t2, t3)
        .then(function () {
            let end = new Date();
            return end.getTime() - start.getTime();
        });
}

function call(t1, t2, t3) {
    return wait1(t1)
        .then(function () {
            return wait2(t2);
        })
        .then(function () {
            return wait3(t3);
        });
}

module.exports = calculateTime;



// function call(t1, t2, t3) {
//     return wait1(t1)
//         .then(function () {
//             return wait2(t2);
//         })
//         .then(function () {
//             return wait3(t3);
//         });
// }
// module.exports = calculateTime;
