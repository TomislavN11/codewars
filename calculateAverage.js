// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {
    // let result = 0;
    // for (let i = 0; i < array.length; i++) {
    //     result = result + array[i]
    // }
    // return result / array.length
    return array.reduce((a, s) => a + s, 0) / array.length
}


console.log(findAverage([1, 1, 1])) // 1

console.log(findAverage([1, 2, 3])) // 2

console.log(findAverage([1, 2, 3, 4])) // 2.5