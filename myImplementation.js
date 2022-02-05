
/**
Hi Kalin,

I was not happy with not being able to finish the problem on Friday, so I learned more about
the two pointer technique (I did not encounter or study this particular problem), then spent 
a few minutes putting this together. I know it's probably "too little, too late", but I learned 
some new things. 

I have also added some explanation comments along the way. 

Thank you for all of your help and your time!
*/

/**

Given a collection of intervals where intervals[i] = [start, end], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:

Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
Explanation: Since intervals [1, 3] and [2, 6] overlaps, merge them into [1, 6].

Input: [[1, 15], [2, 6], [8, 10], [16, 18] ]
Output: [[1, 15], [16, 18]]

*/

// Test arrays
const array = [[1, 3], [2, 5], [5, 8], [10, 13], [15,17]]
const array2 = [[1, 3], [2, 6], [8, 10], [15, 18]]

const condenseIntervals = (arr) => {
    let workingInterval = arr[0];

    // Pointer is staying one step beyond the workingInterval.
    let pointer = 1;
    const condensedIntervals = [];

    // These are just for clarity and slightly better readability.
    const start = 0;
    const end = 1;

    while (pointer < arr.length) {
        let intervalToCheck = arr[pointer];

        if (workingInterval[end] >= intervalToCheck[start]) {
            workingInterval = [ workingInterval[start], intervalToCheck[end] ];
        } else if (workingInterval[end] < intervalToCheck[start]) {
            condensedIntervals.push(workingInterval);
            workingInterval = intervalToCheck;
        }

        pointer++;
    }
    condensedIntervals.push(workingInterval)

    return condensedIntervals;
}

// Returns [[1, 8], [10, 13], [15, 17]]
console.log('Condensed Intervals: ', condenseIntervals(array))

// Returns [[1, 6], [8, 10], [15, 18]]
console.log('Condensed Intervals: ', condenseIntervals(array2))