let input = [11, 10, 8, 4, 2]
let cursor = 0
console.log(input)

const knapsack = (input, target) => {
  let items = getItems(0, input, target)
  if (items === null) {
    console.log('Cannot pack')
  } else {
    console.log(items)
  }
}
const getItems = (cursor, items, target) => {
  if (cursor == items.length) return null
  let sack = []
  sack.push(items[cursor])
  for (let i=cursor+1; i < items.length; i++) {
    if (sum(sack) + items[i] <= target) sack.push(items[i])
  }
  if (sum(sack) == target) return sack
  return getItems(cursor + 1, items, target)
  
}

const sum = (items) => {
  let x = 0;
  items.forEach((item) => { x += item})
  return x
}
knapsack(input, 25)