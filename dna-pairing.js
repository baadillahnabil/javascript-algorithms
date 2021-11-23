function pairElement(str) {
  const result = []

  for (const char of str.split('')) {
    if (char === 'A') {
      result.push([char, 'T'])
    } else if (char === 'T') {
      result.push([char, 'A'])
    } else if (char === 'G') {
      result.push([char, 'C'])
    } else if (char === 'C') {
      result.push([char, 'G'])
    }
  }

  return result
}

pairElement('GCG')
