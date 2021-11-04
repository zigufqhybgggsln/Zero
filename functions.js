function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));
    }
    return min;
}

console.log(minimumAbsoluteDifference([3, -7, 0]));
console.log(minimumAbsoluteDifference([2, 4, 7, 9, 12, 17]));



function luckBalance(k, contests) {

    let important = contests.filter(ar => ar[1] === 1).length;
    let sumAll = contests.reduce((a, b) => a+b[0],0);
    let sorted = contests.sort((a, b) => a[0] - b[0])
    let win = important-k >=0 ?important-k : 0 
    let min = 0
    for(let i=0;  i<sorted.length; i++){
        if(win === 0) break;
        if(sorted[i][1] === 0)continue;
        min += sorted[i][0];
        win--
    }
    return sumAll - (2*min);
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]));



function getMinimumCost(k, c) {
    c.sort((a,b)=> a-b);
    let cost = 0;
    let idx = 0;
    let t = 0;
    while(idx < c.length){
        t = Math.floor(idx / k);
        cost += (t + 1) * c[c.length-1-idx];
        idx += 1;
    }
    return cost;
}

console.log(getMinimumCost(3, [1, 3, 5, 7]));


/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

const quicksort = array => { 
    if (array.length == 0) return [];
    var left = [], right = [], pivot = array[0];
    for (var i = 1; i < array.length; i++) {
      if(array[i] < pivot)
       left.push(array[i])
      else
       right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
   };
   
   function maxMin(k, arr) {
       // Write your code here
    arr = quicksort(arr);
    let i, length = arr.length, min = Number.MAX_VALUE;
    for(i = 0; i < length - k + 1; i++){
     let diff = arr[i + k - 1] - arr[i];
     if(diff < min)
      min = diff;
    }
    
    return min; 
   }
   
   //questions: 
//01
//find the maximum sum of 6 by 6 matrix which its submatrix forms a hourglass
function hourglassSum(arr) {
    var max = -Infinity;
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = 0; j < arr[i].length - 2; j++) {
            var sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}

//02
/*
Given an array a of n integers and a number,d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
*/
function rotLeft(a, d) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr.push(a[(i + d) % a.length]);
    }
    return newArr;
}

//3
//minimum Bribes
function minimumBribes(q) {
    var count = 0;
    for (var i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }
        for (var j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                count++;
            }
        }
    }
    console.log(count);
}


//4
/*
 You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.
 */
 function minimumSwaps(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            let temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
            count++;
            i--;
        }
    }
    return count;
}


//05
/*
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.
*/
function arrayManipulation(n, queries) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a - 1] += k;
        if (b < n) {
            arr[b] -= k;
        }
    }
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}



//results
//01
console.log(hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]));

//02
console.log(rotLeft([1, 2, 3, 4, 5], 4));

//03
console.log(minimumBribes([2, 1, 5, 3, 4]));

//04
console.log(minimumSwaps([4, 3, 1, 2]));

//05
console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));

//01
//find how many pairs of similar integers in an array

function findOccurrences(arr) {
    let occurances = {};
    for (let i = 0; i < arr.length; i++) {
        if (occurances[arr[i]]) {
            occurances[arr[i]]++;
        } else {
            occurances[arr[i]] = 1;
        }
    }
    return occurances;
}


function sockMerchant(n, ar) {
    //if the length of ar is not equal to n return 0    
    if (ar.length !== n) {
        return 0;
    } else {

        let pairs = 0;
        let occurances = findOccurrences(ar);
        for (let key in occurances) {
            pairs += Math.floor(occurances[key] / 2);
        }
        return pairs;
    }
}

//02
//find the how many valleys in a steps path
function countingValleys(n, s) {
    //if n is not larger or equal to 2 and smaller or equal to 10 to the power of 6  and s is either U or D return 0
    if (n < 2 || n > Math.pow(10, 6) || s.length < 2 || s.length > Math.pow(10, 6)) {
        return 0
    } else {
        var valley = 0;
        var seaLevel = 0;
        var count = 0;
        for (var i = 0; i < n; i++) {
            if (s[i] == 'U') {
                seaLevel++;
                if (seaLevel == 0) {
                    valley++;
                }
            } else {
                seaLevel--;
            }
        }
        return valley;
    }
}

//03
//find jumping on the clouds
/*
0 - safe
1 - thunder
The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
The player must avoid the thunderheads.
Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud.
constrains
2<=n<=100
c[i] is either 0 or 1
c[0] = c[n1-1] = 0
*/
function jumpingOnClouds(c) {
    let jumps = 0;
    for (let i = 0; i < c.length; i++) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i++;
            jumps++;
        } else if (c[i + 1] === 0) {
            jumps++;
        }
    }
    return jumps;
}


//04
/*
There is a string ,s, of lowercase English letters that is repeated infinitely many times. Given an integer,n, find and print the number of letter a's in the first n letters of the infinite string.
*/


function repeatedString(s, n) {
    if (s.includes('a')) {
        const sTotal = Math.floor(n / s.length); // repeated string total 
        const aCount = s.match(/a/g).length; // 'a' character count in s
        let aTotalCount = sTotal * aCount; // total 'a' count of repeated string pattern within number limit
        const remainingChar = n % s.length;  // remaining characters after repeating string within number limit

        // if there are remaining characters, add them to the total 'a' count. 
        if (remainingChar !== 0 && s.substr(0, remainingChar).includes('a')) {
            aTotalCount += s.substr(0, remainingChar).match(/a/g).length;
        }

        aTotalCount = Math.floor(aTotalCount);
        return aTotalCount;

    } else {
        return 0;
    }
}
//results
//test 01
var arr = [1, 2, 1, 2, 1, 3, 2]
var arrTwo = [10, 20, 20, 10, 10, 30, 50, 10, 20, 10, 10]
console.log(sockMerchant(11, arrTwo));

//test 02
var n = 8;
var s = "UDDDUDUUUUUUDDDDUUUUUUDDDDUUUUUUDDDDU";
console.log(countingValleys(n, s));

//test 03
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));


//test 04
console.log(repeatedString('aba', 10));


var arr = [1, 2, 1, 2, 1, 3, 2]
var arrTwo = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//find the unique values in an array
function findUniqueValues(arr) {

    let unique = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

//find the occurance of each element in an array
function findOccurrences(arr) {
    let occurances = {};
    for (let i = 0; i < arr.length; i++) {
        if (occurances[arr[i]]) {
            occurances[arr[i]]++;
        } else {
            occurances[arr[i]] = 1;
        }
    }
    return occurances;
}



//find the number of pairs in an array
function findPairs(arr) {
    let pairs = 0;
    let occurances = findOccurrences(arr);
    for (let key in occurances) {
        if (occurances[key] >= 2) {
            pairs += occurances[key] / 2;
        }
    }
    return pairs;
}

//results
console.log(findOccurrences(arr))
console.log(findPairs(arrTwo))


//Questions
//01
/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Example
 magazine= "attack at dawn"  note= "Attack at dawn"

The magazine has all the right words, but there is a case mismatch. The answer is No.

Function Description

Complete the checkMagazine function in the editor below. It must print  Yes if the note can be formed using the magazine, or No.

checkMagazine has the following parameters:

string magazine[m]: the words in the magazine
string note[n]: the words in the ransom note
*/
function checkMagazine(magazine, note) {
    var magazineHash = {};
    var noteHash = {};
    var result = "Yes";
    for (var i = 0; i < magazine.length; i++) {
        if (magazineHash[magazine[i]] === undefined) {
            magazineHash[magazine[i]] = 1;
        } else {
            magazineHash[magazine[i]]++;
        }
    }
    for (var i = 0; i < note.length; i++) {
        if (noteHash[note[i]] === undefined) {
            noteHash[note[i]] = 1;
        } else {
            noteHash[note[i]]++;
        }
    }
    for (var key in noteHash) {
        if (magazineHash[key] === undefined || magazineHash[key] < noteHash[key]) {
            result = "No";
            break;
        }
    }
    console.log(result);
}

//02
/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.
*/
function twoStrings(s1, s2) {
    let s1_set = new Set();
    for (let i = 0; i < s1.length; i++) {
        s1_set.add(s1[i]);
    }

    for (let i = 0; i < s2.length; i++) {
        if (s1_set.has(s2[i])) {
            return "YES";
        }
    }

    return "NO";
}

//03

/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
*/

function getAllSubstrings(str) {
    let i, j, result = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j))
        }
    }
    return result
}

function isAnagram(str1, str2) {
    const hist = {}

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i]
        if (hist[char]) {
            hist[char]++
        } else {
            hist[char] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        const char = str2[j]
        if (hist[char]) {
            hist[char]--
        } else {
            return false
        }
    }

    return true
}

function countAnagrams(currentIndex, arr) {
    const currentElement = arr[currentIndex]
    const arrRest = arr.slice(currentIndex + 1)
    let counter = 0

    for (let i = 0; i < arrRest.length; i++) {
        if (currentElement.length === arrRest[i].length && isAnagram(currentElement, arrRest[i])) {
            counter++
        }
    }

    return counter
}

function sherlockAndAnagrams(s) {
    const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length

    if (!duplicatesCount) return 0
    let anagramsCount = 0

    const arr = getAllSubstrings(s)

    for (let i = 0; i < arr.length; i++) {
        anagramsCount += countAnagrams(i, arr)
    }

    return anagramsCount
}



//04
/*
You are given an array and you need to find number of tripets of indices (i,j,k)  such that the elements at those indices are in geometric progression for a given common ratio r and i<j<k.
*/
function countTriplets(arr, r) {
    const hGram = {}
    const hGram2 = {}
    let count = 0
    if (arr.length < 3) return 0
    for (let i = arr.length - 1; i >= 0; i--) {
        let t1 = arr[i]
        let t2 = t1 * r
        let t3 = t2 * r
        count += hGram2[t3] || 0
        hGram2[t2] ?
            hGram2[t2] += hGram[t2] || 0 :
            hGram2[t2] = hGram[t2] || 0
        hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
    }
    return count
}

//05
/**
You are given  queries. Each query is of the form two integers described below:
- 1x : Insert x in your data structure.
- 2y : Delete one occurence of y from your data structure, if present.
-  3z: Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] contains the data element.
 */

function freqQuery(queries) {
    const frequencies = [];
    const frequencyTracker = [];
    const result = [];
    for (const query of queries) {
        const action = query[0];
        const value = query[1];
        let index;
        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? --frequencyTracker[index] : null;
        }
        if (action === 1) {
            typeof frequencies[value] === 'undefined' ? frequencies[value] = 1 : ++frequencies[value];
        }
        if (action === 2 && frequencies[value]) {
            --frequencies[value];
        }
        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? ++frequencyTracker[index] : frequencyTracker[index] = 1;
        }
        if (action === 3) {
            result.push(frequencyTracker[value] > 0 ? 1 : 0);
        }
    }
    return result;
}







//Results
//01
console.log(checkMagazine(["give", "me", "one", "grand", "today", "night"], ["give", "one", "grand", "today"]));

//02
console.log(twoStrings("hello", "world"));

//03
console.log(sherlockAndAnagrams('abba'))


//04
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3))

//05
console.log(freqQuery([[1, 1], [2, 2], [3, 2], [1, 1], [1, 1], [2, 1], [3, 2]]));


function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
//find the median of an array
function findMedian(arr) {
    //sort the array in ascending order
    arr.sort(function (a, b) {
        return a - b;
    });
    //find the median of the sorted array
    var median = 0;
    if (arr.length % 2 == 0) {
        median = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        median = arr[(arr.length - 1) / 2];
    }
    return median;
}

//plus minus array
function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);
}

//find the minimum sum and the maximum sum of an array
function minMaxSum(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log(sum - max, sum - min);
}


//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    var arr = s.split(':');
    console.log(arr);
    var hour = parseInt(arr[0]);
    var minute = parseInt(arr[1]);
    var second = arr[2];
    //test if second ends with AM or PM
    if (second.substring(second.length - 2) == 'AM') {
        //if AM, convert to 24-hour format
        if (hour == 12) {
            hour = 0;
        }
    } else {
        //if PM, convert to 24-hour format
        if (hour != 12) {
            hour += 12;
        }
    }
    //convert to string
    hour = hour.toString();
    minute = minute.toString();
    //add 0 if hour or minute is less than 10  
    if (hour.length == 1) {
        hour = '0' + hour;
    }
    if (minute.length == 1) {
        minute = '0' + minute;
    }
    //return the time in 24-hour format
    return hour + ':' + minute + ':' + second.substring(0, second.length - 2);
}

//rotate a matrix to find the maximum sum possible of the top-left quadrant //not solved !!!
function maxSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (i == j) {
                sum += arr[i][j];
            }
        }
    }
    return sum;
}

//find the unique number in an array
function findUnique(a) {
    var unique = 0;
    for (var i = 0; i < a.length; i++) {
        unique ^= a[i]; //XOR operation
    }
    return unique;
}

//find the absolute difference between sums of diagonals of a matrix
function diagonalDifference(arr) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length - 1 - i];
    }
    return Math.abs(sum1 - sum2);
}

/*
create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.
 */
function countingSort(arr) {

    var helper = [];
    for (var i = 0; i < arr.length; i++) {
        if (!helper[arr[i]]) {
            helper[arr[i]] = 1;
        } else {
            helper[arr[i]] += 1;
        }
    }

    var newArr = [];
    for (i in helper) {
        while (helper[i] > 0) {
            newArr.push(parseInt(i));
            helper[i]--;
        }
    }
    return newArr;
}



function caesarCipher(s, k) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt();
        // check that charCode is a lowercase letter; automatically ignores non-letters
        if (charCode > 96 && charCode < 123) {

            charCode += k % 26 // makes it work with numbers greater than 26 to maintain correct shift
            // if shift passes 'z', resets to 'a' to maintain looping shift
            if (charCode > 122) {
                charCode = (charCode - 122) + 96;
                // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
        }

        if (charCode > 64 && charCode < 91) {
            charCode += k % 26
            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }
        result += String.fromCharCode(charCode);
    }
    return result
}

//Questions:
//01
/*
using the follwoing functino perform ascending bubble sort
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }

}

*/
function countSwaps(a) {
    var swapCount = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                // swap(a[j], a[j + 1]);
                swapCount++;
            }
        }
    }
    console.log("Array is sorted in " + swapCount + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}


//02
/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

Note Each toy can be purchased only once.
*/
function maximumToys(prices, k) {
    // Write your code here
    //sort the prices
    let total = 0;
    let count = 0;
    prices.sort((a, b) => a - b);
    for (let i = 0; i < prices.length; i++) {
        if (total + prices[i] <= k) {
            total += prices[i];
            count++;
        }
    }
    return count;
}
/*
 prices = [1, 12, 5, 111, 200, 1000, 10]
 k = 50
 */

//03
/*
HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. 
If the amount spent by a client on a particular day is greater than or equal to 2X the client's median spending for a trailing number of days,
they send the client a notification about potential fraud. 
The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.
Given the number of trailing days d and a client's total daily expenditures for a period of n days, 
determine the number of times the client will receive a notification over all n days.
 */
function activityNotifications(expenditure, d) {
    // Number of notifications
    let n = 0
    // Set midpoints for median calculation
    let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)]
    let m1, m2, m
    // Initialize count sorted subarray
    let cs = new Array(201).fill(0)
    for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++
    // Iterate through expenditures
    for (let i = d, l = expenditure.length; i < l; i++) {
        // Find median
        for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j
        for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j
        let m = (m1 + m2) / 2
        // Check if notification is given
        if (expenditure[i] >= m * 2) n++
        // Replace subarray elements
        cs[expenditure[i - d]]--
        cs[expenditure[i]]++
    }
    return n
}

//04
/*
In an array, arr, the elements at indices i and j (where i<j) form an inversion if arr[i]>arr[j].
In other words, inverted elements arr[i] and arr[j] are considered to be "out of order". To correct an inversion, we can swap adjacent elements.
*/
function countInversions(arr) {
    if (arr.length < 2) return 0;
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return countInversions(left) + countInversions(right) + merge(left, right, arr);
}

function merge(left, right, arr) {
    var i = 0;
    var j = 0;
    var k = 0;
    var count = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
            count += left.length - i;
        }
        k++;
    }
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
    return count;
}


//05
/*
Python
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def __repr__(self):
        self.name = ""
        self.score = 0
    def comparator(a, b):
        if a.score == b.score:
            if a.name > b.name:
                return 1
            else:
                return -1
        if a.score > b.score:
            return -1
        else:
            return 1
*/

//-----------------------------------------------

//Results
//01
console.log(countSwaps([3, 2, 1]));

//02
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));

//03
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))

//04
console.log(countInversions([1, 2, 5, 4, 3, 2, 6]))

//05
//print(Player('bob', 10).comparator(Player('alice', 10)))


//Questions
//01

/*
Given two strings, a and b, 
that may or may not be of the same length, 
determine the minimum number of character deletions required to make a and b anagrams. 
Any characters can be deleted from either of the strings.
*/
function makeAnagram(a, b) {
    let count = 0;
    let a_arr = a.split('');
    let b_arr = b.split('');
    let a_obj = {};
    let b_obj = {};
    for (let i = 0; i < a_arr.length; i++) {
        if (a_obj[a_arr[i]]) {
            a_obj[a_arr[i]]++;
        }
        else {
            a_obj[a_arr[i]] = 1;
        }
    }

    for (let i = 0; i < b_arr.length; i++) {
        if (b_obj[b_arr[i]]) {
            b_obj[b_arr[i]]++;
        }
        else {
            b_obj[b_arr[i]] = 1;
        }
    }

    for (let key in a_obj) {
        if (b_obj[key]) {
            count += Math.abs(a_obj[key] - b_obj[key]);
        }
        else {
            count += a_obj[key];
        }
    }

    for (let key in b_obj) {
        if (!a_obj[key]) {
            count += b_obj[key];
        }
    }

    return count;
}

//02
/*
You are given a string containing characters A and B only. 
Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
Your task is to find the minimum number of required deletions.
*/
function alternatingCharacters(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        }
    }
    return count;
}

//03
/*
string to be valid if all characters of the string appear the same number of times. 
It is also valid if he can remove just 1 character at 1 index in the string, 
and the remaining characters will occur the same number of times. 
Given a string , determine if it is valid. If so, return YES, otherwise return NO.
*/

function isValid(s) {
    let hash = {};
    let max, min;
    let minCount = 0;
    let maxCount = 0;
    ///Get the frequencies of each characters
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (hash[key]) {
            hash[key]++;
        } else {
            hash[key] = 1;
        }
    }
    //Push all strings in to an array
    let frequencies = [];
    for (let key in hash) {
        frequencies.push(hash[key]);
    }
    //Sort the array and get the max and min frequency
    frequencies.sort();
    min = frequencies[0];
    max = frequencies[frequencies.length - 1];
    //Get the no of max count and min count for the frequency
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] === max) {
            maxCount++;
        }
        if (frequencies[i] === min) {
            minCount++;
        }
    }
    ///Make our validation check
    if (min === max) {
        return 'YES';
    }
    if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
        return 'YES';
    }
    if (max - min !== 1) {
        return 'NO';
    }
    if (maxCount === minCount) {
        return 'NO';
    }
    if (maxCount === 1 || minCount === 1) {
        return 'YES';
    }
    return 'NO';
}

function isValid(s) {
    const cMap = {}
    for (let c of s) {
        cMap[c] ? cMap[c]++ : cMap[c] = 1
    }
    const freqs = new Set(Object.values(cMap))
    if (freqs.size === 1) return 'YES'
    if (freqs.size === 2) {
        const max = Math.max(...freqs)
        const min = Math.min(...freqs)
        let maxCt = 0
        let minCt = 0
        for (let c in cMap) {
            if (cMap[c] === max) maxCt++
            if (cMap[c] === min) minCt++
        }
        if (
            (minCt === 1 && min === 1) ||
            (maxCt === 1 && max === min + 1)
        ) return 'YES'
    }
    return 'NO'
}

//04
/*
A string is said to be a special string if either of two conditions is met:
All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
A special substring is any substring of a string which meets one of those criteria. 
Given a string, determine how many special substrings can be formed from it.
*/
function substrCount(n, s) {
    let result = 0;
    let i = 0;

    // 1st case, all letters are the same
    while (i < n) {
        let charCount = 1;
        while (i + 1 < s.length && s[i] == s[i + 1]) {
            i++;
            charCount++;
        }
        result += parseInt((charCount * (charCount + 1)) / 2);
        i++;
    }

    // 2nd case, palindrome
    for (i = 1; i < n; i++) {
        let charCount = 1
        while (
            i + charCount < s.length &&
            i - charCount >= 0 &&
            s[i - 1] != s[i] &&
            s[i - 1] == s[i - charCount] &&
            s[i - 1] == s[i + charCount]
        ) {
            charCount++;
        }
        result += charCount - 1
    }
    return result
}

//05
/*
A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string. Letters cannot be rearranged. Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?
 */
function commonChild(s1, s2) {
    const table = [new Array(s2.length+1).fill(0)]
    for(let i=0; i<s1.length;i++) table.push([0])
 
    for(let i=1;i<s1.length+1;i++){
        for(let j=1;j<s2.length+1;j++){
            if(s1[i-1] === s2[j-1]) table[i][j] = table[i-1][j-1] + 1
            else table[i][j] = Math.max(table[i-1][j],table[i][j-1])
        }
    }
 
    return table[s1.length][s2.length]
}




//Results
//01
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));

//02
console.log(alternatingCharacters("AAABBB"));

//03
console.log(isValid('aabbccddeefghi'));

//04
console.log(substrCount(5, "abcbaba"));

//05
console.log(commonChild("HARRY", "SALLY"))
