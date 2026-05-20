const totalSum = arr => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};

console.log(totalSum([1, 2, 3, 4]));