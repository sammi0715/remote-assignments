//  Assignment 1  //
function max(numbers){
    let maxNum = numbers[0];
    let numLength = numbers.length;
    for (let i = 1; i < numLength; i++){
        if(numbers[i] > maxNum) maxNum = numbers [i]
    }
        return maxNum
}
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

//  Assignment 2  //
function calculate(args){
   const { n1, n2, op} = args;
   if (op === '+'){
    return (n1 + n2)
   } else if(op === '-'){
    return (n1 -n2)
   }else{
        return "Not supported"
   }
}
console.log(calculate({n1:2, n2:3, op: '+'}));
console.log(calculate({n1:5, n2:2, op:'-'}));
console.log(calculate({n1:1, n2:6, op:'x'}));

//  Assignment 3  //
function calculate(data){
   const discount = data.discount;
   const products = data.products

    let totalPrice = 0;

    for(let i = 0; i < products.length; i++){
        const price = products[i].price;

        const discountedPrice = price * discount;

        totalPrice += discountedPrice;
    }
    return totalPrice;
}
const discountedPrice = calculate({
    discount:0.1,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
});
console.log(discountedPrice);



// Assignment 5: Algorithm (Advanced Optional) //

function twoSum(nums,target){
    for(let i = 0; i< nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    throw new Error("No two sum match target");
}

console.log(twoSum([2, 7, 11, 15], 9));

