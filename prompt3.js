// write a function that takes a positive even integer that is greater than 10.
// log out every even number from N to 2, inclusive of both.
// your function doesn't need to return anything

// Input       Output
// N = 12     logs out 12, 10, 8, 6, 4 and 2 (that order)
// N = 10     logs out 10, 8, 6, 4, 2 (in that order)

let numArray = []

const logOutby10 = () => {
  let reverseArray = []

  for (let i = 1; i < 10 ; i++) {
    numArray.push(i)
  }
  reverseArray = numArray.reverse()

  reverseArray.forEach(e => {
    if(e % 2 === 0) {
      console.log(`divisible by 2 ${e}`);
    }
  })
}

logOutby10()


















//
