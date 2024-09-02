

// Write a function called same, which accept two arrays
// the function should return true if every value in the array has it's correspodning value squared in the second
// array. The frequency of values must be the same.

// example

// same([1,2,3],[9,1,4]); true
// same ([1,2,4], [1,5,4]); false

// Soluation one (Big N(O))
function same(arr1,arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i of arr1) {
      let correctIndex = arr2.indexOf(i ** 2);
      if (correctIndex === -1) {
        return false;

      }
      arr2.splice(correctIndex,1);
    }

    return true;
}


same([1,2,3],[9,4,1]);

// soluation two

function same(arr1,arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencycounter1 = {};
    let frequencycounter2 = {};

    for (let val of arr1) {
        console.log(val);
        console.log(frequencycounter1);
        frequencycounter1[val] = (frequencycounter1[val] || 0) + 1;

    }

    for (let val of arr2) {
        frequencycounter2[val] = (frequencycounter2[val] || 0) + 1;
    }

    for(let key in frequencycounter1) {
        if (!(key ** 2 in frequencycounter2)) {
            return false;
        }
        if (frequencycounter2[key ** 2] !== frequencycounter1[key]) {
            return false;
        }
    }
    console.log(frequencycounter1);

    return true;
}


same([3,1,2,2],[9,4,1,4]);

// write a function that takes two sorted/unsorted strings and compare them if they're the same or not


// soluation one by me

function same(str1,str2) {
    if (str1.length !== str2.length) return false;

    let frequencycounter1 = {};
    let frequencycounter2 = {};

    for (let val of str1) {
        frequencycounter1[val] = (frequencycounter1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencycounter2[val] = (frequencycounter2[val] || 0) + 1;
    }
    for (let key in frequencycounter1) {
        if (!(key in frequencycounter2)) {
            return false;
        }
    }

    for (let key in frequencycounter2) {
        if (frequencycounter2[key] !== frequencycounter1[key]) return false;
    }

    return true;
}

same("hyeaww","heywaw");


// soluation two by colt steele

function same(first,second) {
    if (first.length !== second.length) {
        return false;
    }

    let lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
        
    }

    return true;

}

same("anagram", "nagaram");

//////
// CountUniqueValues
// Implement a function called countUniqueValues
// Which accepts a sorted array, and counts the unique values
// in the array. There can ben negative numbers in the array,
// but it will be always be sorted.
// exmaple
// CountUniqueValues([1,1,1,1,1,2,2]) // 2

// my own soluation

function CountUniqueValues(arr) {
    let obj = {};

    let nonuce = 0;
    for(let numbers of arr) {
        obj[numbers] = obj[numbers] ? obj[numbers] +=1 :obj[numbers] = 1;

    }

    for (let key in obj) {
        nonuce = nonuce + 1;
    }
    return nonuce;
}

CountUniqueValues([1,1,1,1,1,2,2,3,3,3,3,5,6,6,6,7,7,7]);

// colt steele soluation

function CountUniqueValues(arr) {
    if (arr === 0) return false;    
    let i = 0;

    for (let j = 1; j < arr.length;j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

CountUniqueValues([1,1,1,1,2,2,3,4,5,6]);

/// Sliding window
// Write a function called maxSubarraySum which accepts
// an array of integers and number called n. The function should calcualte the maximum sum of n
// consecutive elements in the array.


// my head is going to explode because of this problem this is my second day of taking this course
// I fucking hate this
// my prounce is re/tard

function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1;i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3);