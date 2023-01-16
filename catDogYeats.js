/*
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years

// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


var humanYearsCatYearsDogYears = function (humanYears) {
    let dogYears = 0;
    let catYears = 0;

    if (humanYears == 1) {
        catYears = catYears + 15
        dogYears = dogYears + 15
    } else if (humanYears == 2) {
        catYears = catYears + 15 + 9
        dogYears = dogYears + 15 + 9
    } else if (humanYears >= 2) {
        catYears = catYears + 15 + 9 + (humanYears * 4) - 8
        dogYears = dogYears + 15 + 9 + (humanYears * 5) - 10
    }
    return [humanYears, catYears, dogYears]
}


console.log(humanYearsCatYearsDogYears(8)) // 48

// 1 -> 15
// 2 -> 15 + 9 = 24
// 3 -> 15 + 9 + 4 = 28
// 4 -> 15 + 9 + 4 + 4 = 32
// 5 -> 15 + 9 + 4 + 4  + 4 = 36
*/