// for loop

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// real example

const transaction = [100, -50, -40, 400];

for (let i = 0; i < 5; i++) {
  if (transaction[i] > 0) {
    console.log(`Deposit: $${transaction[i]}`);
  } else {
    console.log(`withdrowals: $${transaction[i]}`);
  }
}

// while loop

let balance = 400;
let withdrowalAmount;

while (true) {
  withdrowalAmount = prompt(
    `your balance is: $${balance} . how much to withdrow`,
  );

  if (withdrowalAmount <= balance && withdrowalAmount > 0) {
    balance -= withdrowalAmount;
    console.log(`withdrow: $${withdrowalAmount} . new balance: $${balance}`);
    break;
  } else {
    console.log("invalid amount");
  }
}

// do while

let tiro = 1;

do {
  console.log("tiro " + tiro);
  tiro++;
} while (tiro <= 5);
