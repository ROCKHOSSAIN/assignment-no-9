
1-let greeting;
greetign = {};
console.log(greetign);

Answer:A: {}
explaination :t assigns an empty object {} to the greeting variable.
Finally, it logs the value of the greeting variable to the console.

2-function sum(a, b) {
return a + b;
}

sum(1, "2");

answer: C
explaination :The result is the string "12", which is the concatenation of the number 1 and the string "2".

3-const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

Answer-A: ['🍕', '🍫', '🥑', '🍔']
explaination:In console already already says the food where there is only 4 array

4-function sayHi(name) {
return `Hi there, ${name}`;
}

console.log(sayHi());

answer: B: Hi there, undefined
explaination :The sayHi function you've defined expects a name argument to be passed when calling the function. However, in the code you provided, you're calling sayHi() without providing any argument. This will result in a name variable inside the function being undefined

5-let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);

answer: C: 3
explaination :if is checking weather it is truthy ,so it is looping times .
