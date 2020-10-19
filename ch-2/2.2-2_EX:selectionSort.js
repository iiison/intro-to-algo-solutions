// Write Pseudocode for Selection Sort Algo.
// Find the shortest number and swap it with index 0, 
// Find second shortest number, swap it with index 1,
// And so on


// Pseudo-code:
/*
 * selectionSort(arr)
 *  for (i = 0 to arr.length - 2)
 *    smallest = i
 *
 *    for (j = i + 1 to arr.length - 1)
 *      smallest = Math.min(arr[j], arr[smallest]) === arr[j] ? j : smallest
 *
 *    swap(i, smallest, arr)
 *
 *  end
*/

function swap(i, j, arr) {
  let temp = arr[i]

  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i

    for (let j = i + 1; j < arr.length; j++) {
      smallest = Math.min(arr[j], arr[smallest]) === arr[j] ? j : smallest
    }

    swap(i, smallest, arr)
  }

  return arr
}

/* COMPLEXITIES:
 * Best Case: O(n^2)
 * Worst Case: O(n^2)
 *
 * JUSTIFICATION: Time complexity in best case will be O(n^2), as the alog still have to compare
 * and find the smallest number in the array for each pass of `i`. In worst case, it is anyway 
 * looking for the smallest number, and going through the whole list over and agian.
 */

