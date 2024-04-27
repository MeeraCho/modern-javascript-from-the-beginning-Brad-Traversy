const app = {
  nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  next() { 
    if (this.nextIndex >= this.teams.length) {
      return { done: true }
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false }
    this.nextIndex++;
    return returnValue;
  },
};

//처음 돌 때는 false로 나오고 한 바퀴 다 돌고 나서는 true로 나옴 
// console.log(app.next()); //{value: 'Red Sox', done: false}
// console.log(app.next()); //{value: 'Yankees', done: false}
// console.log(app.next()); //{value: 'Astros', done: false}
// console.log(app.next()); //{value: 'Dodgers', done: false}
// console.log(app.next()); //{done: true}

const app2 = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function(){
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
        ? { value: this.teams[nextIndex++], done:false } 
        : { done: true }
      }
    }
  }
}

const iterator = app2[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// for (const team of app) {
//   console.log(team);
// } // error

