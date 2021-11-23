function whatIsInAName(collection, source) {
  const arr = []
  // Only change code below this line

  arr.push(
    ...collection.filter((x) => {
      const eligible = []
      for (const [key, value] of Object.entries(source)) {
        eligible.push(x[key] === value)
      }
      if (!eligible.includes(false)) return true
    })
  )

  // Only change code above this line
  return arr
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
)
