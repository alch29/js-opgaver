//Opgaver: https://ucl.kjc.dk/webdev/intro/2025-js-exercises.html

//Opg. 1:
console.log('Opgave 1:');
const sum = (sumArray) => {
    let totalValue = 0;
    for(let i in sumArray) {
        totalValue += sumArray[i];
    }
    return totalValue;
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum ([10, 20, 30, 40]));


//Opg. 2:
console.log('Opgave 2:');
const max = (maxArray) => {
    let sortedArray = maxArray.sort();
    let biggestNumber = sortedArray.slice(-1);
    return biggestNumber;
}

console.log(max([1, 2, 3, 5, 4]));
console.log(max([1, 2, 3, 4]));


//Opg. 3:
console.log('Opgave 3:');
const countVowels = (string) => {
    const vowels = "aeiouyæøåAEIOUYÆÅØ";
    let count = 0;
    for (const char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels('Åge bøjede syv fine rør ud.'));


//Opg. 4:
console.log('Opgave 4:');

const filterOdd = (filterArray) => {
    let odds = [];
    for(let num of filterArray) {
        if (num % 2 === 1) {
            odds.push(num);
        }
    }
    return odds;
};

console.log(filterOdd([1, 2, 3, 4, 5]));


//Opg. 5:
console.log('Opgave 5:');

const reverseString = (string) => {
    let reversedString = string.split('').reverse().join('')
    return reversedString;
};

console.log(reverseString('JavaScript'));


//Opg. 6:
console.log('Opgave 6:');

const flatten = (arrays) => {
    let flattenedArray = arrays.flat();
    return flattenedArray;
} 

console.log(flatten([[1, 2], [3, 4], [5]]));


//Opg. 7:
console.log('Opgave 7:');

//Kig i opgaver.html :))

