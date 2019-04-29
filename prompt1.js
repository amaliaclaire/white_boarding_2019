//Write a function that takes a single positive whole integer,
// N. Log out every number from 1 to N,
// inclusive of both except any number that is divisible by 3.
// Your function does not need to return anything.


// INPUT      OUPUT
//  N = 9     logs out 1,2,4,5,7 and 8 (in that order)
//  N = 2     logs out 1 and 2 (in that order)


// if it is divisible by 3, take it out of the array
// loop through and see the length.
// Once you see the length ++ then modulo




function divideBy3 (num) {
  let result = [];

    for (let i = 0; i < num; i++) {
      if (num % 3 === 0 / 2) {
        console.log(num);
      }

    }



  return result
}

divideBy3(9)
