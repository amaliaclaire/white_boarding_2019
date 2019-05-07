// write a function that takes a positive integer, N & a string, M.
// return an array of characters where each character is at an index divisible by N


// Input                      Output
// N = 3, M = 'galvanize'     ['v', 'i']
// N = 2, M = 'python'        ['t', 'o']


// loop through the array and look at each index
// loop look at the .length and then from there find indexOf() and use N
// have them correspond with N and have it divisible by that number
// once you have been able to find that indexOf() then push the elements into
// an empty arra

// 1. find the length of M
// 2. find what is divisible in the length of M by N
// 3. print out the index characters in M.length into an empty array




const characterByIndex = (n, m) => {
  let emptyArr = []
  let searchChar = n
  let indexOfChar = []
  let count = 0



  for (let i = 0; i <= m.length; i++) {
    count = i
  }


  if (n % count === 0) {

  }
}

characterByIndex(3, 'galvanize')
