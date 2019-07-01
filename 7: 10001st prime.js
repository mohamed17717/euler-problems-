/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the nth prime number?
*/

function nthPrime(n) {
  "use strict";
  let primes = [2];
  let num = primes[primes.length-1];

  function isPrime(num){
    let flag = true
    for (let p of primes) {
      if (num % p === 0){
        flag = false;
        break;
      }
    }
    return flag
  }
  
  while (primes.length < n) {
    if(isPrime(num))
      primes.push(num)
    num++;
  }
  return primes[n-1];
}

for(let i of [6,10,100,1000,10001] ){
  console.log(nthPrime(i));
}
