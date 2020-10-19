// Add two n-bit binary integers, stored in two n-elements arrays: A, B.
// Your program should return sum of A and B in binary form of n+1-Element array.

// INPUT: two n-digit binary arrays.
// OUTPUT: n+1-digit array.
function addBinary(a, b) {
  // Sanity Checks:
  // Check if a and b are valid arrays
  // Check if a, b are of same length
  if (!Array.isArray(a) || !Array.isArray(b) || a.length != b.length) {
    return null
  }
  
  // initialize `result` to an empty array
  const result = []

  // initialize `carryForward` to 0
  let carryForward = 0
  
  // start an iteration from array length to 0
  for (let i = a.length - 1; i >= 0; i--) {
    const val1 = a[i]
    const val2 = b[i]

    // if either a[i] or b[i] is greater than 1 or invalid value, return null
    if (Math.abs(val1) > 1 || Math.abs(val2) > 1) {
      return null
    }

    // add a[i] and b[i] and carryForward
    const sum = (( val1 + val2 + carryForward ) >>> 0).toString(2)

    // if sum is greater than 1, set value in carryforward.
    if (sum.length > 1) {
      carryForward = parseInt(sum.slice(0, sum.length - 1), 2)
      result.unshift(sum[sum.length - 1])
    } else {
      result.unshift(sum)
      carryForward = 0
    }
  }

  if (carryForward === 1) {
    result.unshift('1')
  }

  return result
}

