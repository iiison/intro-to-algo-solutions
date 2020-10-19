// INPUT: a list of numbers
// Output: Sorted input list

// Sample Output:
// insersionSort([6, 3, 2, 1, 5, 4]) => [1, 2, 3, 4, 5, 6]
// Invalid / Empty inputs:
// insersionSort([]) => []
// insersionSort() => null
// insersionSort([null]) => null
// insersionSort([6, 'A', 2, ' ', 5, null, undefined]) => null


// Time Complexity: n^2
// Space Complexity: n
function swap(i, j, input) {
  const temp = input[i]

  input[i] = input[j]
  input[j] = temp
}

function insersionSort(input) {
  if (!input || !Array.isArray(input)) {
    return null
  }

  for (let i = 1; i < input.length; i++) {
    const key = input[i]

    for (let j = i - 1;  j >= 0 && key < input[j]; j--) {
      swap(j, j + 1, input)
    }
  }

  return input
}


// Ex 2.1-2 : Reverse Insersion Sort
function reverseInsersionSort(input) {
  if (!input || !Array.isArray(input)) {
    return null
  }

  for (let i = 1; i < input.length; i++){
    let key = input[i]
    
    for (let j = i - 1; j >= 0 && key > input[j]; j--) {
        swap(j, j+1, input)
    } 
  }

  return input
}

