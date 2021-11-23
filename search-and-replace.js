function myReplace(str, before, after) {
  const isCapitalized = before[0] === before[0].toUpperCase()

  let newAfter = after.charAt(0).toLowerCase() + after.slice(1)
  if (isCapitalized) {
    newAfter = after.charAt(0).toUpperCase() + after.slice(1)
  }

  return str.replace(before, newAfter)
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'Leaped')
