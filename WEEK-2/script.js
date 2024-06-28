//  Assignment 1  //
function max(numbers) {
  let maxNum = numbers[0];
  let numLength = numbers.length;
  for (let i = 1; i < numLength; i++) {
    if (numbers[i] > maxNum) maxNum = numbers[i];
  }
  return maxNum;
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

//  Assignment 2  //
function calculate(args) {
  const { n1, n2, op } = args;
  if (op === "+") {
    return n1 + n2;
  } else if (op === "-") {
    return n1 - n2;
  } else {
    return "Not supported";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" }));
console.log(calculate({ n1: 5, n2: 2, op: "-" }));
console.log(calculate({ n1: 1, n2: 6, op: "x" }));

//  Assignment 3  Solution 1 //
// function calculate(data) {
//   const discount = data.discount;
//   const products = data.products;

//   let totalPrice = 0;

//   for (let i = 0; i < products.length; i++) {
//     const price = products[i].price;

//     const discountedPrice = price * (1 - discount);

//     totalPrice += discountedPrice;
//   }
//   return totalPrice;
// }
// const discountedPrice = calculate({
//   discount: 0.1,
//   products: [
//     {
//       name: "Product 1",
//       price: 100,
//     },
//     {
//       name: "Product 2",
//       price: 700,
//     },
//     {
//       name: "Product 3",
//       price: 250,
//     },
//   ],
// });
//console.log(discountedPrice);

//  Assignment 3  Solution 2 //
function calculate(data) {
  const { discount, products } = data;
  const discountedPrice = products.map(
    (product) => product.price * (1 - discount)
  );
  const totalPrice = discountedPrice.reduce((sum, price) => sum + price, 0);
  return totalPrice;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice);
// Assignment 5: Algorithm (Advanced Optional) //

//  Solution 1  //
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   throw new Error("No two sum match target");
// }
// console.log(twoSum([2, 7, 11, 15], 9));

//  Assignment 5  //
//  Solution 2  //
function twoSum(nums, target) {
  const map = [];
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    if (map[targetNum] !== undefined) {
      return [map[targetNum], i];
    }
    map[nums[i]] = i;
  }
  throw new Error("No two sum match target");
}
console.log(twoSum([2, 7, 11, 15], 9));
