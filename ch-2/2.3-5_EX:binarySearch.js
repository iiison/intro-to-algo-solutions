/****************************
 * Binary Search: Given a sorted list of numbers, we can check the midpoint of the 
 * sequence against the target number `t`, and eliminate half of the sequence 
 * from further consideration. 
 * The binary search algorithm repeats this procedure, halving the size of the 
 * remaining portion of the sequence each time.
 ****************************/

/****************************
 * Ideal inputs:
 * INPUT: binarySearch([1, 2, 3, 4, 5, 6], 5)
 * OUTPUT: 4
 *
 * INPUT: binarySearch([1, 2, 3, 4, 5, 6], 22)
 * OUTPUT: -1
 *
 *
 * Invalid/Empty inputs:
 * INPUT: binarySearch([], 5)
 * OUTPUT: -1
 * 
 * INPUT: binarySearch([1, 2, 3, 4, 5, 6], undefined)
 * OUTPUT: null
 *
 * INPUT: binarySearch(null, 3)
 * OUTPUT: null
 *
 * INPUT: binarySearch()
 * OUTPUT: null
 ****************************/

/****************************
 * Pseudo Code:
 * binarySearch(arr, t, l = 0, r)
 *  IF arr or t is empty or invalid
 *    return null
 *  END IF
 *
 *  IF r is undefined
 *    r = arr.length - 1
 *  END IF
 *
 *  IF l - r <= 1
 *    IF arr[l] === t
 *      return l
 *    ELSE IF arr[r] === t
 *      return r
 *    ELSE
 *      return -1
 *    END IF
 *  END IF
 *
 *  pivot = parseInt((l + r) / 2)
 *
 *  IF arr[pivot] === t
 *    return pivot
 *  ELSE IF arr[pivot] > t
 *    return binarySearch(arr, t, l, pivot)
 *  ELSE
 *    return binarySearch(arr, t, pivot, r)
 *  END IF
 * END
 ****************************/

// Actual Implementation
function binarySearch(arr, t, l = 0, r) {
  if (!arr || !Array.isArray(arr) || t === undefined || t.constructor.name !== 'number') {
    return null
  }

  if (r === undefined) {
    r = arr.length - 1
  }

  const pivot = parseInt((l + r) / 2)

  if (r - l <= 1) {
    if (arr[l] === t) {
      return l
    } else if (arr[r] === t) {
      return r
    } else {
      return -1
    }
  }

  if (arr[pivot] === t) {
    return pivot
  } else if (arr[pivot] > t) {
    return binarySearch(arr, t, l, pivot)
  } else {
    return binarySearch(arr, t, pivot, r)
  }
}

/****************************
 * Time Complexity: O(log(n))
 *
 * Justification:
 * We are getting rid of half the array size in each procedure call
 * which means our input size will look like this in each call:
 * n, n/2, n/4, n/8...
 * Which makes the time complxity: O(log(n))
 ****************************/

