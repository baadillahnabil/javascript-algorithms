function translatePigLatin(str) {
  const vowel = ['a', 'i', 'u', 'e', 'o']
  let result = str

  if (vowel.includes(str[0])) {
    result = `${str}way`
  } else {
    const startIndex = str.split('').findIndex((x) => vowel.includes(x))

    result = `${str.substring(startIndex, str.length)}${str.substring(
      0,
      startIndex
    )}ay`
  }

  return result
}

translatePigLatin('glove')
