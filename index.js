// Loads the module
const http = require('http');
const assignment = require("./assignment");

const server=http.createServer((req,res)=>{
    let arr = [3,2,7,4,6,9];
    res.write("\n\n The descending of array A = " + JSON.stringify(arr) + " is " + JSON.stringify(assignment.descendingArr(arr)));

    let str = 'doctor';
    res.write("\n\n The palindrome of string '" + str + "' is : "+ assignment.isPalindrome(str));

    let arr2 = [3,7,1,5,11,19];
    res.write("\n\n The largest Number of array A = " + JSON.stringify(arr2) + " is " + assignment.largestNumber(arr2));

    let arr3 = [3,4,9,1,7,3,2,6];
    let result = assignment.getMissingNumbers(arr3);
    res.write("\n\n The highest entry is " + result.maxValue + ", and missing numbers are " + JSON.stringify(result.missingElements));

    let arr4 = [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5];
    let result2 = assignment.getRepeatedNumbers(arr4);
    res.write("\n\n " + result2.number + " is repeated " + result2.count + " times.");

    let arr5 = [3,8,9,7,6];
    res.write("\n\n The rotation of array A = " + JSON.stringify(arr5) + " is " + JSON.stringify(assignment.shiftArrayRight(arr5)));

    res.end();
})

// Defining port for the server to run
server.listen(3000, () => {                       

    //Message to print on the console after a successful run
    console.log('Server running on port 3000');   
});
