function destroyer(arr, ...args) {
  return arr.filter((x) => !args.includes(x))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
