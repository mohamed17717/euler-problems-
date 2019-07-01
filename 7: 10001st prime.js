/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the nth prime number?
*/

function nthPrime(n) {
  "use strict";
  let primes = [2];
  let primeFlag, num;

  num = primes[primes.length-1];
  while (primes.length < n) {
    let isPrime = true
    for (let p of primes) {
      if (num % p === 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime)
      primes.push(num)
    num++;
  }
  return primes[n-1];
}

for(let i of [6,10,100,1000,10001] ){
  console.log(nthPrime(i));
}
