// 1)
 function calculateDifference(a, b){
    return a-b 
 }
 let result1 = calculateDifference(10,5)
 console.log(result1)
 // 2)
 function isOdd(number){
     if(number % 2 !== 0){
         return true
     }else{
        return false
     }  
 }
  console.log(isOdd(3))

 //  3)
 function findMin(numbers){
     return Math.min(...numbers)
 }
 let arr3 = [5, 2, 7, 4, 8, 9, 13];
 let res3 =(findMin(arr3))
 console.log(res3)


//  4)
function filterEvenNumbers(numbers){
    return numbers.filter( number => number % 2 == 0)
}
let arr4 = [1,2,3,4,5,6,7,8,9,10]
let res4 = filterEvenNumbers(arr4)
console.log(res4)

// 5)
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}
let arr5 = [5, 1, 8, 3, 7];
let sortedArr = sortArrayDescending(arr5);
console.log(sortedArr); 


// 6)
function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1)
}
let res6 = lowercaseFirstLetter("Exam")
console.log(res6)

// 7)
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

let result = countVowels("Hello World");
console.log(result); 


// 8)
function findAverage(numbers) {
    if (numbers.length === 0) return 0; 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
let arr = [4, 8, 6, 10];
let average = findAverage(arr);
console.log(average);  
