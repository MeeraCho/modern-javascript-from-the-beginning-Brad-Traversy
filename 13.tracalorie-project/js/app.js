class CalorieTracker {
  constructor(){
    this._calorieLimit = 2000; 
    this._totalCalories = 0; 
    this._meals = [];
    this._workouts = [];

    this._displayCaloriesTotal();
    this._displayCalorieLimit();
    this._displayCaloriesConsumed();
    this._displayCaloresBurned();
    this._displayCaloriesRemaining();
    this._displayProgressBar();
  }

  addMeal(meal){
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
    }

  addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  _displayCaloriesTotal(){
    const totalCalorieEl = document.getElementById('calories-total');
    totalCalorieEl.innerHTML = this._totalCalories;
  }

  _displayCalorieLimit(){
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed(){
    const calorieConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0)
    calorieConsumedEl.innerHTML = consumed;
  }

  _displayCaloresBurned(){
    const calorieBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0)
    calorieBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining(){
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const progressBarEl = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._totalCalories;

    if (remaining <= 0){
      caloriesRemainingEl.parentElement.parentElement.classList.remove("bg-light");
      caloriesRemainingEl.parentElement.parentElement.classList.add("bg-danger");
      progressBarEl.classList.remove('bg-success');
      progressBarEl.classList.add('bg-danger');
      
    }else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove("bg-danger");
      caloriesRemainingEl.parentElement.parentElement.classList.add("bg-light");
      progressBarEl.classList.remove('bg-danger');
      progressBarEl.classList.add('bg-success');
    }
    caloriesRemainingEl.innerHTML = remaining;
  }

  _displayProgressBar(){
    const progressBarEl = document.getElementById('calorie-progress');
    let percentage = (this._totalCalories / this._calorieLimit) * 100; 
    if (percentage > 100 ){
      percentage = percentage - 100
    }
    const width = Math.min(percentage, 100);
    progressBarEl.style.width = `${width}%`;
  }

  _render(){
    this._displayCaloriesTotal();
    this._displayCalorieLimit();
    this._displayCaloriesConsumed();
    this._displayCaloresBurned();
    this._displayCaloriesRemaining();
    this._displayProgressBar();
  }
}

class Meal{
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories
  }
}

class Workout {
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories
  }
}

class App {
  constructor(){
    document.getElementById('meal-form').addEventListener('submit', this._newMeal)
  }

  _newMeal(e){
    e.preventDefault();
    console.log(this);
  }
}

const app = new App();

const tracker = new CalorieTracker();

const lunch = new Meal('lunch', 2000);
tracker.addMeal(lunch);
const dinner = new Meal('dinner', 200);
tracker.addMeal(dinner);


const run = new Workout('run', 150);
tracker.addWorkout(run);
const walk = new Workout('walk', 30);
tracker.addWorkout(walk);




