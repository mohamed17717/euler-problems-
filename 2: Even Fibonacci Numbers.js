function fiboEvenSum(n) {
  // You can do it!
  let one, two, theSum, next;
  [one, two] = [1,2];

  theSum = 2;

  for (let i=2; i<n; i++){
    next = one + two;
    one = two;
    two = next;
    
    theSum += next % 2 === 0? next:0;
  }

  return theSum;
}

console.log(fiboEvenSum(23))
