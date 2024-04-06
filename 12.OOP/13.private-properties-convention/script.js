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

