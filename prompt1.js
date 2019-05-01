//Write a function that takes a single positive whole integer,
// N. Log out every number from 1 to N,
// inclusive of both except any number that is divisible by 3.
// Your function does not need to return anything.


// INPUT      OUPUT
//  N = 9     logs out 1,2,4,5,7 and 8 (in that order)
//  N = 2     logs out 1 and 2 (in that order)


// have that loop by number
// if it is divisible by 3, take it out of the array
// loop through and see the length.
// Once you see the length ++ then modulo



const divideBy3 = (num) => {
  let extraArr = [];
  let fullArray = [];

  for (let i = 0; i < num; i++) {
    fullArray.push(i)
    if (i % 3 !== 0 / 2) {
      extraArr.push(i)
    }
  }

  return extraArr
}

divideBy3(9)
