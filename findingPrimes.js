const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findingPrimes = (a, b) => {
  let res = [];
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(findingPrimes(1, 20));
