//----------------------Example-1----------------------------------------
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found, return its index
  }

  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // Search the right half
  } else {
    return binarySearch(arr, target, left, mid - 1); // Search the left half
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(sortedArray, target);
console.log(result); 
// Output: 3 (index of target 7 in the array)

//----------------------------Method-2------------------------------

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return its index
    }

    if (arr[mid] < target) {
      left = mid + 1; // Adjust left bound
    } else {
      right = mid - 1; // Adjust right bound
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(sortedArray, target);
console.log(result);
// Output: 3 (index of target 7 in the array)


//----------------------Example-2----------------------------------------
//* There is an integer array nums sorted in ascending order (with distinct values).
* Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
* Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
* You must write an algorithm with O(log n) runtime complexity.
 
* Example 1:
* Input: nums = [4,5,6,7,0,1,2], target = 0Output: 4
* Example 2:
* Input: nums = [4,5,6,7,0,1,2], target = 3Output: -1
* Example 3:
* Input: nums = [1], target = 0Output: -1
*/

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const result = search(nums, target);
console.log(result); // Output: 4
