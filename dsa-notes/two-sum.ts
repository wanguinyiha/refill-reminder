function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) { // Loop through each number in the array
        for (let j = i + 1; j < nums.length; j++) { // Loop through the numbers after the current number
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

function twoSumFast(nums: number[], target: number): number[] {
    const numMap: { [key: number]: number } = {}; // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement of the current number
        if (numMap.hasOwnProperty(complement)) { // Check if the complement exists in the map
            return [numMap[complement], i]; // Return the indices of the two numbers
        }
        numMap[nums[i]] = i; // Store the current number and its index in the map
    }
    return [];
}

console.log(twoSumFast([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumFast([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSumFast([3, 3], 6)); // Output: [0, 1]