// Bank account object to hold the balance
let bankAccount = {
    balance: 0
};

// Task 1: Function to handle deposits
function deposit(amount) {
    if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
    }
    bankAccount.balance += amount;
    console.log(`Successfully deposited $${amount}. Your new balance is $${bankAccount.balance}.`);
}

// Task 2: Function to handle withdrawals
function withdraw(amount) {
    if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
    }
    if (amount > bankAccount.balance) {
        console.log("Insufficient balance for the withdrawal.");
        return;
    }
    bankAccount.balance -= amount;
    console.log(`Successfully withdrew $${amount}. Your new balance is $${bankAccount.balance}.`);
}

// Task 3: Function to check the current balance
function checkBalance() {
    console.log(`Your current balance is $${bankAccount.balance}.`);
}

// Testing the functions
console.log("Initial balance inquiry:");
checkBalance();

console.log("\nAttempting to deposit $500:");
deposit(500);

console.log("\nAttempting to withdraw $200:");
withdraw(200);

console.log("\nAttempting to withdraw $400:");
withdraw(400);

console.log("\nChecking final balance:");
checkBalance();
