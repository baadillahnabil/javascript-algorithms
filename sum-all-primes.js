function sumPrimes(num) {
  let i = 1
  let sum = 0
  while (num >= i) {
    if (isPrime(i)) {
      sum += i
    }
    i++
  }

  return sum
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return num !== 1 && num !== 0
}

sumPrimes(10)
