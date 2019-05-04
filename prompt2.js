// write a function that takes a positive integer, N, that is greater than 2. Log out every even number from 2 to N,
// inclusive of both. Your function does not need to return anything.

// input     output
// N = 9        logs out 2, 4, 6, 8 (in that order)
// N = 2        logs out 2


  // loop over each of the elements
  // if they are divisible by 2 then log out the element
  // if they don't, do not log out the element


let even = 0;
let odd = 0;


const count = () => {
  for (let i = 2; i <= 9; i++) {
    if (i % 2 === 0) {
      console.log(`i is even: ${i}`)
    }else if (i % 2 !== 0) {
      console.log(`i is odd:${i}`);
    }
  }
}

count()
