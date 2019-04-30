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

  for (let i = 1; i < num; i++) {
    fullArray.push(i)
    if (i % 3 === 0 / 2) {
      extraArr.push(i)
    }
  }
  // fullArray.push(s)

  console.log('fullArray', fullArray);
  console.log('extraArr', extraArr);


}



divideBy3(9)
// var i=0
// for (i=0;i<=10;i++)
// {
// if (i==3){continue}
// document.write("The number is " + i)
// document.write("<br />")
// }


// function divideBy3 (num) {
//   let newNumber = num.toString().length
//   console.log(newNumber);
//
//   for (let i = 0; i < newNumber; i++) {
//     console.log('new num:', newNumber[i]);
//   }
//
// }
//
// divideBy3(9)


    // for (let i = 0; i < num; i++) {
    //   if (num % 3 === 0 / 2) {
    //     console.log(num);
    //   }
    //
    // }


    // function divideBy3 (num) {
    //   let divisibleNums = []
    //   let i = 0;
    //
    //   for (i; i < 9; i++) {
    //     if (i % 3 === 0) {
    //       divideByNums = divisibleNums.push(i);
    //
    //     }
    //   }
    //   return divideByNums
    // }
    //
    //
    // divideBy3()
