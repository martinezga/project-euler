/* ---> Problem 001: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.*/
console.log('Find the sum of all the multiples of 3 or 5 below the provided parameter value number.\n')
/*Test:   multiplesOf3and5(1000) should return 233168.
        multiplesOf3and5(49) should return 543.
        multiplesOf3and5(19564) should return 89301183.
        multiplesOf3and5(8456) should return 16687353.
---> Solution:*/
function multiplesOf3and5(number) {
  let summatory = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      summatory = summatory + i;
    }
  }
  console.log(summatory);
}

multiplesOf3and5(8456)
