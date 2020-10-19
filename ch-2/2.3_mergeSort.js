// A "Divide and Conquer" approach based Algorithm.
// Steps: 
// Divide list into sorted left and right part
// Combine both, left and right to make a sorted list.


// Division / splitting happens in Depth First Manner. Here is an Example:
//       8 (Number of elements in the array)
//      / \
//     4
//    /
//   2
//  /
// 1 (This is the base case of the recursion, now, this will be returned to the caller,
//    and then the right part will be calculated).
// 
// Basically, as DFS, we first figureout the left part, and then we move on to the right part
// Once we have both, the left and the right part, we merge them into a sorted list.

/*********************
 * INPUT: a list of numbers.
 * OUTPUT: sorted input list.
 ********************/

// Sample Output:
// mergeSort([6, 3, 2, 1, 5, 4]) => [1, 2, 3, 4, 5, 6]
// Invalid / Empty inputs:
// mergeSort([]) => []
// mergeSort() => null
// mergeSort([null]) => null
// mergeSort([6, 'A', 2, ' ', 5, null, undefined]) => null

/*********************
 * Pseudo-code:
 * mergeSort(arr)
 *  if arr.length <= 1
 *    return arr
 *
 *  midPoint = parseInt(arr.length / 2)
 *  left = mergeSort(arr.slice(0, midPoint))
 *  right = mergeSort(arr.slice(midPoint, arr.length))
 *
 *  return merge(left, right)
 * end
*********************/

// Another merge implementation.
function _merge(left, right) {
  let result = []

  for (; left.length > 0;) {
    const leftVal = left[0]
    const rightVal = right[0]
    let val

    if (rightVal === undefined) {
      return [...result, ...left]
    }

    if (leftVal > rightVal) {
      val = right.shift()
    } else {
      val = left.shift()
    }

    result.push(val)
  }

  return [...result, ...left, ...right]
}

// Merge Helper
function merge(left, right) {
  let result = []
  let l = 0
  let r = 0

  for (; l < left.length && r < right.length;) {
    const leftVal = left[l]
    const rightVal = right[r]

    if (leftVal > rightVal) {
      result.push(rightVal)
      r++
    } else {
      result.push(leftVal)
      l++
    }
  }

  return [...result, ...left.slice(l), ...right.slice(r)]
}

// Actual Implementation
function mergeSort(arr) {
  // Sanity Check
  if (!arr || !Array.isArray(arr)) {
    return null
  }


  // Base case
  if (arr.length <= 1) {
    return arr
  }

  const midPoint = parseInt(arr.length / 2)
  const left = mergeSort(arr.slice(0, midPoint))
  const right = mergeSort(arr.slice(midPoint))

  return merge(left, right)
}

// Time Complexity: O(nlog(n))
// n is the complexity of merge function
// log(n) is the complexity of mergeSort function
// As we are calling `merge` function in each `mergeSort` call,
// the complexity is: n(log(n))

