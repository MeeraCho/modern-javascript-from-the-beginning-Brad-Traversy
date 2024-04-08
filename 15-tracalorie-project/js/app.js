class CalorieTracker {
  constructor() {
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCalorieConsumed();
    this._displayCalorieBurned();
    this._displayCaloriesRemaining();
  }

  //-----Public Methods/API----- 
  addMeal(meal) {
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout) {
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  //-----Private Methods-----
  // change Gain/Loss Number in DOM
  _displayCaloriesTotal(){
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories; 
  } 

  _displayCaloriesLimit(){
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit; 
  } 

  _displayCalorieConsumed(){
    const caloriesConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal ) => total + meal.calories, 0)
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCalorieBurned(){
    const caloriesBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce(( total, workout ) => total + workout.calories, 0)
    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining(){
    const caloresRemainingEl = document.getElementById('calories-remaining');
    const remaining = this._calorieLimit - this._totalCalories;
    caloresRemainingEl.innerHTML = remaining;
  }

  //rendering DOM
  _render(){
    this._displayCaloriesTotal();
    this._displayCalorieConsumed();
    this._displayCalorieBurned();
    this._displayCaloriesRemaining();
  }
}

class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // 0.d508b3b6d0e65 -> slice(2) remove 0. so now, the number is d508b3b6d0e65 
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
const lunch = new Meal('Lunch', 300);
tracker.addMeal(breakfast);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 200);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories); 
console.log( Math.random().toString(16)); 

