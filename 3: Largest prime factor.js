

function largestPrimeFactor(number){
  for(let i = 2; i < Math.sqrt(number); i++){
    if(number % i === 0){
      return largestPrimeFactor(number / i);
    }
  }
  return number;
}

console.log(largestPrimeFactor(600851475143)); // 6857
