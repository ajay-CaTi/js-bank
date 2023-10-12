// Practice problems Important

// challange1 of banksit app

// test data1: j data [3, 5, 2, 12, 7] k Data [4, 1, 15, 8, 3]
// test data1: j data [9, 16, 6, 8, 13] k Data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   dogsJulia.splice(0, 1);
//   dogsJulia.splice(-2);
//   const dogs = dogsJulia.concat(dogsKate);

//   dogs.forEach((dog, i) => {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is a adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log("--Next--");
// checkDogs([9, 16, 6, 8, 13], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movements.map((val) => {
//   return val * eurToUsd;
// });
// console.log(movementsUsd);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: Your ${
//     mov > 0
//   } ? deposited ${mov} : withdrew ${Math.abs(mov)}`;
// });
// console.log(movementsDescriptions);

//----------------------------

// Uncomment this--------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter((mov) => {
//   return mov > 0;
// });

// console.log(deposit);

// const depositeFor = [];

// for (const i of movements) {
//   if (i > 0) {
//     depositeFor.push(i);
//   }
// }

// const withdrawal1 = movements.filter((mov) => {
//   return mov < 0;
// });
// console.log(`These are withdrawals ${withdrawal1.join(", ")}`);

// console.log(depositeFor);

//----------------------------

// Uncomment this--------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, cur, i) => {
//   console.log(`Iterator ${i} acc ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// let total = 0;
// for (const mov of movements) {
//   total += mov;
// }
// console.log(total);

//----------------------------

// Uncomment this--------------------

// Maximum value

// IMPORTANT *********************************--**************

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const max = movements.reduce((acc, cur, i) => {
//   if (acc >= cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);
// console.log(max);

// --------------------------------------

// Uncomment this--------------------

// Maximum value

// const calcAvgHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter((age) => {
//     return age >= 18;
//   });
//   console.log(adults);

//   // Simple way
//   const avg = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;

//   // Complex way
//   // const avg = adults.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//   return avg;
// };

// const avg1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);

// // const avg2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1);

// --------------------------------------

// Uncomment this--------------------

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// //PIPLINE
// const totalDepositInUsd = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => mov * eurToUsd)
//   // .map((mov, i, arr) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositInUsd);

//----------------------------------------

// const calAvgHUmanAge = (ages) => {
//   const humanAge = ages
//     .map((age, i) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((mov) => mov >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   return humanAge;
// };

// console.log(calAvgHUmanAge([5, 2, 4, 1, 15, 8, 3]));

//----------------------------------------
// Uncomment this--------------------
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

//----------------------------------------
// Uncomment this--------------------

// SOME, INCLUDES

// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposite = movements.some((move) => move > 500);
// console.log(anyDeposite);

//----------------------------------------
// Uncomment this--------------------

// every
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

//----------------------------------------
// Uncomment this--------------------

const owners = ["ak", "dk", "ck", "bk"];
const num = [1, 2, 78, 56, 45, 23, 12];
console.log(num.sort((a, b) => a - b));
console.log(owners.sort());

//----------------------------------------
// Uncomment this--------------------

// EMPTY array with + FILL Method

// const arr = [1, 2, 3, 4, 5];
// console.log(new Array([1, 2, 3, 4, 5]));

// const x = new Array(7);

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(1, 3, 5);
// console.log(arr);

// // Create new array an existing array

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// // 100 random dice roll EXERCISE

// const diceRoll = Array.from(
//   { length: 100 },
//   (cur, i) => Math.floor(Math.random() * 100) + 1
// );
// console.log(diceRoll);

// //
// const movementsUi = Array.from(document.querySelectorAll(".movements_value"));
// console.log(movementsUi);

//----------------------------------------
// Uncomment this--------------------

// *****************IMPORTANT-------------------------

// ********--------*********---------**********--------

// *****************IMPORTANT-------------------------

// // PRACTICE Exercise 1

// const bankDeposite = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// // const bankDeposite = accounts.map((acc) => acc.movements).flat();

// console.log(bankDeposite);

// // PRACTICE Exercise 2

// // 1 Way
// // const numDeposites = accounts
// // .flatMap((acc) => acc.movements)
// // .filter((mov) => mov >= 1000).length;
// // console.log(numDeposites);

// // 2 Way
// const numDeposites = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(numDeposites);

// // PRACTICE Exercise 3

// const sums = accounts
//   .flatMap((mov) => mov.movements)
//   .reduce(
//     (acc, cur) => {
//       // cur > 0 ? (acc.deposites += cur) : (acc.widthdrawals += cur);

//       acc[cur > 0 ? "deposites" : "widthdrawals"] += cur;

//       return acc;
//     },
//     { deposites: 0, widthdrawals: 0 }
//   );
// console.log(sums.deposites, sums.widthdrawals);

// // PRACTICE Exercise 4

// const convertTitleCase = function (title) {
//   const capatalize = (str) => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (exceptions.includes(word) ? word : capatalize(word)));
//   return titleCase;
// };
// console.log(convertTitleCase("this is a long title"));
// console.log(convertTitleCase("This is a Long title"));
// console.log(convertTitleCase("This is a long title and Song"));

// //----------------------------------------
// // Uncomment this--------------------

// ***************-----------------------------------

// 028 last challange 11.5 ///////********------------------------ */

// ***************-----------------------------------

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? "much." : "little."
  }`
);

// 3.

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.

// Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.

// current > (recommended * 0.90) && current < (recommended * 1.10)

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.

console.log(dogs.filter(checkEatingOkay));

//8.

// sort it by food recommended portion ascending order

const dogCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogCopy);
