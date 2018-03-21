const isPalindrome = (s) => {
  let a = s.split('')

  let i = 0;
  let j = a.length - 1

  while (i < j) {
    if (a[i] == a[j]) {
      i++
      j--
    } else {
      return false
    }
  }

  return true
}

console.log(isPalindrome('test'))
console.log(isPalindrome('nowayapapayawon'))
console.log(isPalindrome('racecar'))