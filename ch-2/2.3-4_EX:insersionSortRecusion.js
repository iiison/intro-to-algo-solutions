/****************************
 * Insersion sort using recursion:
 *  - Sort A[1...n-1] recursively
 *  - Insert A[n] into the sorted array
 ****************************/

/****************************
 * Pseudo code:
 * insersionSortRec(arr, i = 1)
 *  key = arr[i]
 *
 *  FOR (j = i - 1 to 0 && arr[j] > key)
 *    swap(j, j + 1, arr)
 *  ENDFOR
 *
 *  insersionSortRec(arr, i + 1)
 * END
 ****************************/

function swap(i, j, input) {
  const temp = input[i]

  input[i] = input[j]
  input[j] = temp
}

// Actual Implementaion
function insersionSortRec(arr, i = 1) {
  // base case
  if (i === arr.length) {
    return arr
  }

  const key = arr[i]

  for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
    swap(j, j + 1, arr)
  }

  return insersionSortRec(arr, i + 1)
}

/****************************
 * Time Complexity: O(n^2)
 *
 * Justification:
 * The recursive fuction, `insersionSortRec` will be called n times(n is array length)
 * in each procedure call, for loop will run for (n - 1) times.
 * i.e. total number of calls: n(n - 1)
 * which makes the time complexity: O(n^2)
 ****************************/

