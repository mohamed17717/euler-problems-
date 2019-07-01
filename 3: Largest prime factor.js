/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number){
  for(let i = 2; i < Math.sqrt(number); i++){
    if(number % i === 0){
      return largestPrimeFactor(number / i);
    }
  }
  return number;
}

console.log(largestPrimeFactor(600851475143)); // 6857
