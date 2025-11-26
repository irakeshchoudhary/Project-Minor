// 1
let nums = [10, 20, 30, 40];
console.log(nums.includes(20));

// 2
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes('mongo'));

// 3
let roles = ["user", "editor", "manager"];
console.log(roles.includes('admin'));

// 4
let skills = ["HTML", "CSS", "React"];

if (skills.includes('javascript')) {
    console.log('Found');
}
else {
    console.log('Not Found');
}

// 5
let prices = [200, 300, 400];

if (!prices.includes(100)) {
    prices.push(100);
}

console.log(prices);


// 6
let studentList = ["Amit", "Vivek", "Soham"];

if (studentList.includes('Rakesh')) {
    console.log('Present');
}
else {
    console.log('Absent');
}


// 7
let numbers = [11, 21, 33, 55];

const Arr = () => {
    if(numbers%2 === 0){
        console.log(numbers);
    }
    else{
        console.log('No Even Numbers Available');
    }
}

Arr();

// 8
let fruits1 = ["Mango", "Banana", "APPLE"];

if(fruits1.includes('APPLE')){
    let index =  fruits1.indexOf('APPLE');
    fruits1[index] = fruits1[index].toLowerCase();
}

console.log(fruits1)

// 9
let letters = ["A", "B", "C", "D"];

console.log(letters.includes('A' || 'a' && 'C' || 'c'));

// 10
let cart = ["shoes", "bag"];

function checkProduct(cart, item) {
    if (cart.includes(item)) {
        console.log("Already in cart");
    } else {
        cart.push(item);
        console.log("Added");
    }
}

checkProduct(cart, "Iphone");
console.log(cart);


 