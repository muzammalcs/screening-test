module.exports = {
    /*Q#1: Write a function that will take an array as input, sort, and return the array in descending
order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].*/
    descendingArr:  (arr) => {
        let val;
        for (let index1 = 0; index1 < arr.length; index1++) {
            for (let index2 = index1+1; index2 < arr.length; index2++) {
                if (arr[index1] < arr[index2]) {
                    val = arr[index1];
                    arr[index1] = arr[index2];
                    arr[index2] = val;
                }
            }
        }
        return arr;
    },
    /*Q#2: Write a function that will take a string as input, check and return if it is palindrome or
not. For example, if the string is “madam” the function should return true and if the string
is “doctor” it should return false.*/
    isPalindrome:  (str) => {
        // get the length of a string
        const len = str.length;
        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {
            // check if first and last string are same
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    },
    /*Q#3: Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers.*/
    largestNumber:  (arr) => {
        let val;
        for (let index1 = 0; index1 < arr.length; index1++) {
            for (let index2 = index1+1; index2 < arr.length; index2++) {
                if (arr[index1] < arr[index2]) {
                    val = arr[index1];
                    arr[index1] = arr[index2];
                    arr[index2] = val;
                }
            }
        }
        return (arr[0] + arr[1]);
    },
    /*Q#4: Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8]*/
    getMissingNumbers:  (arr) => {
        // Find the maximum value in the array
        let maxValue = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
        
        // Create an object to track the presence of elements in the array
        let presence = {};
        for (let i = 0; i < arr.length; i++) {
            presence[arr[i]] = true;
        }
        
        // Collect the missing elements
        let missingElements = [];
        for (let i = 0; i <= maxValue; i++) {
            if (!presence[i]) {
                missingElements.push(i);
            }
        }

        return {maxValue: maxValue, missingElements: missingElements};
    },
    /*Q#5: Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.*/
    getRepeatedNumbers:  (arr) => {
        // Create an object to track the frequency of each element
        let frequency = {};
        
        // Iterate through the array and populate the frequency object
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            if (frequency[num] === undefined) {
                frequency[num] = 1;
            } else {
                frequency[num]++;
            }
        }
        
        // Initialize variables to track the most repeated element and its count
        let mostRepeated = arr[0];
        let maxCount = frequency[mostRepeated];
        
        // Iterate through the frequency object to find the most repeated element
        for (let num in frequency) {
            if (frequency[num] > maxCount) {
                mostRepeated = num;
                maxCount = frequency[num];
            }
        }
        
        return { number: mostRepeated, count: maxCount };
    },
    /*Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
and return the rotated array. Rotation of the array means that each element is shifted right
by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]*/
    shiftArrayRight:  (arr) => {
        // Handle edge cases
        if (arr.length === 0) {
            return arr;
        }

        // Save the last element
        let lastElement = arr[arr.length - 1];
        
        // Shift all elements to the right by one position
        for (let i = arr.length - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        
        // Place the last element at the first position
        arr[0] = lastElement;
        
        return arr;
    }
};