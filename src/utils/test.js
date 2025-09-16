let result = [2, 5, 2, 22, 3];

for (let i = 0; i < result.length; i++) {
  let highPrice = result[i];
  for (let j = 1; j < result.length; j++) {
    const currentPrice = result[j];
    if (currentPrice > highPrice) {
      highPrice = currentPrice;
    }
  }
  result.push(highPrice);
}

console.log(result);
