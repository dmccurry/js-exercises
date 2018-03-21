const isEqual = (a, b) => {

  if (typeof(a) != typeof(b)) return false

  if (typeof(a) == 'object') {
    for (let key in a) {
      if (typeof(b[key]) === 'undefined') return false
      if (!isEqual(a[key], b[key])) return false
    }
    return true
  }

  return a === b

}

console.log(isEqual(1, 1))
console.log(isEqual(1, '1'))
console.log(isEqual([1,2], [1,2]))
console.log(isEqual({'foo':'bar', 'bar':'foo'}, {'bar':'foo', 'foo':'bar'}))
console.log(isEqual([1, [1,2], [1, [2]]], [1, [1,2], [1, [2]]]))