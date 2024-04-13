class CalorieTracker {
  constructor(){
    this.#calorieLimit = 2000; 
    this.#totalCalorie = 0; 
    this.#meals = [];
    this.#workouts = [];
  }

  #addMeal(meal){
    this._meals.push(meal);
    this._totalCalorie += meal.calories;
    }

  #addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalorie -= workout.calories;
  }

  

}

class Meal{
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories
  }
}

class Workout{
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories
  }
}

const lunch = new Meal('lunch', 100);
const dinner = new Meal('dinner', 200);
const run = new Workout('run', 150);
const walk = new Workout('walk', 300);

