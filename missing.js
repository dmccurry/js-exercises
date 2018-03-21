const findMissing = (s, num) => {
  let sum = 0;
  for (let i=1; i <= num; i++) {
    sum += i
  }
  let ints = s.split(",")

  let next = 0
  for (let i in ints) {
    next += parseInt(ints[i])
  }

  return sum - next
}

console.log(findMissing("1,3,4,5,6,7,8,10,9,11,12,13,14,15,16,33,18,19,20,21,22,23,24,25,26,27,28,29,30,2,31,32,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50", 50))