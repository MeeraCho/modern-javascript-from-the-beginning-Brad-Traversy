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
    this._displayCaloriesProgress();
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
    const progressEl = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._totalCalories;
    caloresRemainingEl.innerHTML = remaining;

    
    if (remaining <= 0 ){
      caloresRemainingEl.parentElement.parentElement.classList.remove('bg-light');
      caloresRemainingEl.parentElement.parentElement.classList.add('bg-danger');
      progressEl.classList.remove('bg-success');
      progressEl.classList.add('bg-danger');
    } else {
      caloresRemainingEl.parentElement.parentElement.classList.add('bg-light');
      caloresRemainingEl.parentElement.parentElement.classList.remove('bg-danger');
      progressEl.classList.add('bg-success');
      progressEl.classList.remove('bg-danger');
    }
  }

  _displayCaloriesProgress(){
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(percentage, 100); //This function call returns the smaller of the two values, percentage or 100. This is done to ensure that the progress bar width does not exceed 100%, even if the calculated percentage is greater than 100. So, if the percentage exceeds 100, the width of the progress bar will be capped at 100%.
    progressEl.style.width = `${width}%`
  }

  //rendering DOM
  _render(){
    this._displayCaloriesTotal();
    this._displayCalorieConsumed();
    this._displayCalorieBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
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


