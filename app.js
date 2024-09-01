

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
    if (arr1.legnth !== arr2.legnth) return false;

    let frequencycounter1 = {};
    let frequencycounter2 = {};

    for (let val of arr1) {
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

    return true;
}


same([1,5,3,2],[9,25,1,4]);


// write a function that takes two sorted/unsorted strings and compare them if they're the same or not


// soluation one using indexOf aka nested loop (not recommended)
function same(str1,str2) {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.legnth;i++) {
        let correctStr = str2.indexOf(str1[1]);
        if (correctStr === -1) return false;
        str2.splice(correctStr,1);
    }

    return true;

}

same("azaz","zaza");


// soluation two

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

same("yheb","heye");