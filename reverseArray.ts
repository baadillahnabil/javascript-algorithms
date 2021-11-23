// Reverse Array
const reverse = (array: number[]) => {
  const result = array
  for (let i = 0; i < array.length / 2; i++) {
    let temp1 = result.length - 1 - i
    let temp2 = result[i]
    result[i] = result[temp1]
    result[temp1] = temp2
  }
  return result
}

const arr = [5, 6, 3, 1, 8, 9, 2]
console.log('Original Array => ', arr)
console.log('Reversed Array => ', reverse(arr))

// Prime 'Bilangan Prima'
const prime = (n: number) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const n = 19
console.log('Is Prime => ', prime(n))

// Binary Search
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2)

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return mid

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x)

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, r, x)
  }

  // We reach here when element is not
  // present in array
  return -1
}

const arr2 = [5, 6, 3, 1, 8, 9, 2]
console.log('Original Array => ', arr2)
