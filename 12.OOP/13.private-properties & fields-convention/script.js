//-----------Private Property Underscore Convention---------- 
class Wallet {
  constructor(){
    this._balance = 0;
    this._transactions = [];
  }

  // public method
  deposit(amount) {
    this._processDeposit(amount)
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds')
    }
    this._processWithdraw(amount);
    this._balance -= amount;
  }

  // private method
  _processDeposit(amount){
    console.log(`Depositing ${amount}`);
    this._transactions.push({
      type: 'deposit',
      amount
    })
  }

  _processWithdraw(amount){
    console.log(`Withdrawing ${amount}`);
    this._transactions.push({
      type: 'withdrawing',
      amount
    })
  }

  get balance() {
    return this._balance;
  }

  get transactions(){
    return this._transactions;
  }
}
 
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet._balance); //still access this but shouldn't use 
console.log(wallet.balance); // get 
console.log(wallet.transactions); 



//-----------Class Fileds or Private Fields---------- 
//from ES2022 

class Pocket {
  #balance = 0;
  #transactions = [];


  // public method
  deposit(amount) {
    this.#processDeposit(amount)
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('Not enough funds')
    }
    this.#processWithdraw(amount);
    this.#balance -= amount;
  }

  // private method
  #processDeposit(amount){
    console.log(`Depositing ${amount}`);
    this.#transactions.push({
      type: 'deposit',
      amount
    }) 
  }

  #processWithdraw(amount){
    console.log(`Withdrawing ${amount}`);
    this.#transactions.push({
      type: 'withdrawing',
      amount
    })
  }

  get balance() {
    return this.#balance;
  }

  get transactions(){
    return this.#transactions;
  }
}

const pocket = new Pocket();
pocket.deposit(400);
pocket.withdraw(100);

// console.log(pocket.#balance); // Private Fields cannot access
console.log(pocket.balance);
console.log(pocket.transactions); 