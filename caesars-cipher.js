function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  const alphabetLength = alphabet.length
  const shift = 13

  const strResult = []
  for (const char of str.split('')) {
    const isNonCharacter = /[^a-z]/i.test(char)
    if (isNonCharacter) strResult.push(char)
    else {
      if (alphabet.indexOf(char) + shift >= alphabetLength) {
        strResult.push(
          alphabet[alphabet.indexOf(char) + shift - alphabetLength]
        )
      } else {
        strResult.push(alphabet[alphabet.indexOf(char) + shift])
      }
    }
  }

  return strResult.join('')
}

rot13('SERR PBQR PNZC')
