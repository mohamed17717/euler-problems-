/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function isPalindrome(s){
  s = String(s);
  return s === s.split('').reverse().join('')
}

function maxNumWith_nDigits(digits){
  return parseInt('9'.repeat(digits));
}

function isProductOf_nDigits_Nums(num, n) {
  let max = maxNumWith_nDigits(n);
  for(let i=max; i > 0; i--){
    if(num % i === 0 && String(num / i).length === n)
      return true
  }
  return false
}

function largestPalindromeProduct(n) {
  let max = maxNumWith_nDigits(n);
  let product = max * max;

  let palindrome = product
  while(!(isPalindrome(palindrome) && isProductOf_nDigits_Nums(palindrome, n))){
    palindrome--
  }
  return palindrome
}


console.log(largestPalindromeProduct(2))
console.log(largestPalindromeProduct(3))
