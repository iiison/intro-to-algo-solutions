/****************************
 * Give a set, S of n integers and another integer x,
 * determin whether or not there exists two elements 
 * S whose sum is exactly x. 
 *
 * Time complexity of the algo should be O(n.log(n))
 ****************************/

/****************************
 * INPUT: findSum([1, 4, 2, 3, 5], 8)
 * OUTPUT: true
 *
 * INPUT: findSum([1, 4, 2, 3, 5], 74)
 * OUTPUT: false
 *
 * INPUT: findSum(<invalid/empty>, 32)
 * OUTPUT: null
 *
 * INPUT: findSum(<valid>, <invalid/empty>)
 * OUTPUT: null
 ****************************/

/****************************
 * Pseudo Code:
 * findSum(S, x)
 *  IF one of or both S and x are invalid
 *    return null
 *  END IF
 *
 *  // As the problem states the give input `S` is a set, if it's not set,
 *  // we should convert it to set to keep only unique values in `S`.
 *
 *  sortedS = mergeSort(S) // Using merge sort as this is the best sorting algo we know so far.
 *
 *  FOR i = 0, j = S.length - 1; i < j
 *    IF (sorted[i] + sorted[j]) > x
 *      j--
 *    ELSE IF (sorted[i] + sorted[j]) < x
 *      i++
 *    ELSE
 *      return true
 *    END IF
 *  END FOR
 *
 *  return false
 * END
 ****************************/

// Actual Implementation
function findSum(S, x) {
  if (!S || !Array.isArray(S) || x === undefined || x.constructor.name !== 'Number') {
    return null
  }

  sorted = mergeSort(S) // refer ./2.3_mergeSort.js to see the merge sort implementation

  for (let i = 0, j = S.length - 1; i < j;) {
    if (sorted[i] + sorted[j] > x) {
      j -= 1
    } else if (sorted[i] + sorted[j] < x) {
      i += 1
    } else {
      return true
    }
  }

  return false
}

/****************************
 * Time Complexity: O(n.log(n))
 *
 * Justification:
 * As mergeSort's complexity is O(n.log(n))
 * the iteration(57-65) will be done in O(n)
 * total result will be: O(n.log(n) + O(n)) => O(n.log(n))
 ****************************/

