//Problem 1: Staircase

/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
    if (n <= 0) return '';
    const rows = [];
    for (let i = 1; i <= n; i++) {
        rows.push(' '.repeat(n - i) + '#'.repeat(i));
    }
    return rows.join('\n');
};

// test
//console.log(staircase(4));

// Problem 2: Grading Students

/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
    return grades.map(function (grade) {
        if (grade < 38) {
            return grade;
        }
        const nextMultiple = Math.ceil(grade / 5) * 5;
        if (nextMultiple - grade < 3) {
            return nextMultiple;
        }
        return grade;
    });
};

// test
//console.log(gradingStudents([73, 67, 38, 33]));
//console.log(gradingStudents([84, 29, 57]));

// Problem 3: Time Conversion

/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
    const modifier = s.slice(-2);
    let hour = parseInt(s.slice(0, 2), 10);
    const rest = s.slice(2, 8); // :mm:ss

    if (modifier === 'AM') {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }

    return String(hour).padStart(2, '0') + rest;
};

// test
//console.log(timeConversion("07:05:45PM"));
//console.log(timeConversion("12:00:00AM"));
//console.log(timeConversion("12:30:45PM"));

// Problem 4: String Repeat

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
    if (n <= 0) return '';
    return s.repeat(n);
};

// test
//console.log(repeatStr(3, "ha"));
//console.log(repeatStr(0, "hello"));
//console.log(repeatStr(4, "a"));

// Problem 5: Reversed Strings

/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
    return str.split('').reverse().join('');
};

// test
//console.log(solution("world"));
//console.log(solution("hello"));
//console.log(solution(""));

// Problem 6: Sum of Positive

/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
    return arr.reduce(function (sum, num) {
        return num > 0 ? sum + num : sum;
    }, 0);
};

// test
//console.log(positiveSum([1, -4, 7, 12]));
//console.log(positiveSum([-1, -2, 0, -5]));
//console.log(positiveSum([]));

// Problem 7: Grasshopper — Summation

/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
    return (num * (num + 1)) / 2;
};

// test
//console.log(summation(8));
//console.log(summation(1));
//console.log(summation(4));

// Problem 8: Convert a Boolean to a String

/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
    return String(b);
};

// test
//console.log(booleanToString(true));
//console.log(booleanToString(false));

// Problem 9: Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    return result;
};

// test
//console.log(fizzBuzz(5));
//console.log(fizzBuzz(15));

// Problem 10: Running Sum of 1D Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let currentSum = 0;
    return nums.map(function (num) {
        currentSum += num;
        return currentSum;
    });
};

// test
//console.log(runningSum([1, 2, 3, 4])); 
//console.log(runningSum([1, 1, 1, 1, 1]));   

// Problem 11: Richest Customer Wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        if (wealth > max) {
            max = wealth;
        }
    }
    return max;
};

// test
//console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
//console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));

// Problem 12: Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// test
// let nums1 = [1, 1, 2];
// let k1 = removeDuplicates(nums1);
// console.log(k1, nums1.slice(0, k1)); 

// let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let k2 = removeDuplicates(nums2);
// console.log(k2, nums2.slice(0, k2));

// Problem 13: Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
};

// test
//console.log(containsDuplicate([1, 2, 3, 1])); 
//console.log(containsDuplicate([1, 2, 3, 4]));
//console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// Problem 14: Move Zeroes

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};

// test
// let mz1 = [0, 1, 0, 3, 12];
// moveZeroes(mz1);
// console.log(mz1); 

// let mz2 = [0, 0, 1];
// moveZeroes(mz2);
// console.log(mz2); 

// let mz3 = [1, 2, 3];
// moveZeroes(mz3);
// console.log(mz3); 

// Problem 15: Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
};

// test
// let mg1 = [1, 2, 3, 0, 0, 0];
// merge(mg1, 3, [2, 5, 6], 3);
// console.log(mg1); 

// let mg2 = [1];
// merge(mg2, 1, [], 0);
// console.log(mg2);

// let mg3 = [0];
// merge(mg3, 0, [1], 1);
// console.log(mg3);

// Problem 16: 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

// test
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0]));

// Problem 17: Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

// test
// console.log(plusOne([1, 2, 9]));   
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([9, 9, 9]));   

// Problem 18: Reverse String

/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

// test
// let s1 = ["h", "e", "l", "l", "o"];
// reverseString(s1);
// console.log(s1); 

// let s2 = ["H", "a", "n", "n", "a", "h"];
// reverseString(s2);
// console.log(s2); 

// Problem 19: Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const trimmed = s.trim();
    const lastSpaceIndex = trimmed.lastIndexOf(' ');
    return trimmed.length - lastSpaceIndex - 1;
};

// test
// console.log(lengthOfLastWord("Hello World"));               
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));       

// Problem 20: Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

// test
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));                 
// console.log(longestCommonPrefix(["dog", "racecar", "car"));                       
// console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));



