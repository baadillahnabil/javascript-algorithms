function processData(input) {
  //Enter your code here

  const [count, ...args] = input.split('\r\n')
  const numbers = args.filter(String)

  // First, put numbers into object to ease the logic handling
  const obj = Object.assign(
    {},
    ...numbers.map((key) => ({
      [key]: {
        divisors: [], // just for info, can be deleted
        sumOfDivisors: 0,
        isAmicable: false,
      },
    }))
  )

  // Second, find a proper division on each input
  for (let i = 0; i <= count; i++) {
    const num = +numbers[i]
    let j = 1
    while (j <= num / 2) {
      if (num % j === 0) {
        obj[num].divisors.push(j)
        obj[num].sumOfDivisors += j
      }

      j++
    }
  }

  // Third, check it self against the sumOfDivisors
  for (const key of Object.keys(obj)) {
    const currentSumOfDivisors = obj[key].sumOfDivisors
    let newSumOfDivisors = 0
    let j = 1
    while (j <= currentSumOfDivisors / 2) {
      if (currentSumOfDivisors % j === 0) {
        newSumOfDivisors += j
      }

      j++
    }

    if (+key === +newSumOfDivisors) {
      obj[key].isAmicable = true
    }
  }

  // Fourth, map the result
  const result = []
  for (const num of numbers) {
    if (obj[num].isAmicable) {
      result.push(`Yes, amicable with ${obj[num].sumOfDivisors}`)
    } else {
      result.push('No')
    }
  }

  // Last, log the output
  console.log(result.join('\r\n'))
}
