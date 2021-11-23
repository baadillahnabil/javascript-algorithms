function sumFibs(total) {
  const fib = [1, 1]
  for (let i = 1; i < total; i++) {
    const newFib = fib[i] + fib[i - 1]
    if (newFib > total) break
    fib.push(fib[i] + fib[i - 1])
  }

  let result = 0
  for (const num of fib) {
    if (num % 2 !== 0) {
      result += num
    }
  }

  return result
}

sumFibs(5)
