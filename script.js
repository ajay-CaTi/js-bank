"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////

// 008 Creating DOM Elements

//-------------------------

//-------------------------

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div> 
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} €</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//-------------------------

//-------------------------

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur, i) => acc + cur, 0);
  labelBalance.textContent = `${balance} EUR`;
};
// calcDisplayBalance(account1.movements);

//-------------------------

//-------------------------

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outMoney = movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outMoney)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposite) => (deposite * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int > 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(movements);

//-------------------------

//-------------------------

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => {
        return name[0];
      })
      .join("");
  });
};
createUsernames(accounts);
//-------------------------

//-------------------------

// Login

let currentAccount;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Login");

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display ui and welcome message
    labelWelcome.textContent = `Welcome Back!.., ${
      currentAccount.owner.split(" ")[0]
    }`;
    console.log(currentAccount.owner.split(" ")[0]);
    containerApp.style.opacity = 100;
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount.movements);
    // Display summary
    calcDisplaySummary(currentAccount.movements);

    console.log("LogiN");
  }
});

//---------------------------------------

//---------------------------------------