/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £(n) be made using any number of coins?
*/

function sumSubSpaceEqualNum(num, space){
	let s = space.concat();
	s.sort( (a,b) => b > a );
	s = s.filter(item => item <= num);

	let ways = []

	while(s.length){
		let item = s[0];

		let remain = num - item;
		if (remain){
			let remainSums = sumSubSpaceEqualNum(remain, s);
			remainSums.map(  l=>l.unshift(item)  );			
			ways = ways.concat(remainSums);
		}
		else{ ways.push([item]);  }

		s.shift();
	}
	return ways;
}

function coinSums(n) {
	let pence = n;
	let currency = [1,2,5,10,20,50,100,200];
	let ways = sumSubSpaceEqualNum(pence, currency);
	return ways.length;
}

console.log(coinSums(50))  // should return 451.
console.log(coinSums(100)) // should return 4563.
console.log(coinSums(150)) // should return 21873.
console.log(coinSums(200)) // should return 73682.

