
const mergesort = (input) => {
  if (input.length <= 1) {
    return input
  }
  let pivot = Math.floor(input.length / 2)
  let left = []
  let right = []
  for (let i=0; i<input.length; i++) {
    if (i < pivot) left.push(input[i])
    else right.push(input[i])
  }

  let a = mergesort(left)
  let b = mergesort(right)
  return merge(a, b)

}
const merge = (a, b) => {
  let c = []
  while (a.length && b.length) {
    if (a[0] < b[0]) c.push(a.shift())
    if (b[0] <= a[0]) c.push(b.shift())
  }
  while (a.length) c.push(a.shift())
  while (b.length) c.push(b.shift())
  return c
}



let input = [55, 4, 13, 14, 15, 22, 8]
console.log(input)
let output = mergesort(input)
console.log(output)