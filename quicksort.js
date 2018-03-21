const quicksort = (input, lo, hi) => {
  if (lo < hi) {
    let p = partition(input, lo, hi)
    quicksort(input, lo, p - 1)
    quicksort(input, p, hi)
  }
  
}

const partition = (input, lo, hi) => {
  let pivot = input[hi]
  let i = lo
  let j = hi
  while (1) {
    while (input[i] < pivot) {
      i++
    }
    while (input[j] > pivot) {
      j--
    }
    if (i >= j) return j
    
    let b = input[i]
    input[i] = input[j]
    input[j] = b
  }
  
}

let input = [34, 124, 16, 22, 43, 25, 7]
console.log(input)
quicksort(input, 0, input.length - 1)
console.log(input)