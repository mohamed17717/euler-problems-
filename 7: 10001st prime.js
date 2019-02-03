function nthPrime(n){
  let primes = [2];
  let primeFlag, num;
  
  num = 3;
  while (primes.length < n) {
    primeFlag = true;
    for (let p of primes){
      if (num%p === 0) {
        primeFlag = false;
        break;
      }
    }
    primeFlag? primes.push(num) : false;
    num++;
  }
  return primes.pop();
}

for(let i of [6,10,100,1000,10001] ){
  console.log(nthPrime(i));

}
