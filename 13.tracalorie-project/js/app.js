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
    this._displayNewMeals(meal);
    this._render();
    }

  addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;
    this._displayNewWorkouts(workout);
    this._render();
  }

  removeMeal(id){
    const index = this._meals.findIndex(meal => meal.id === id)
    if ( index !== -1 ) {
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      this._meals.splice(index, 1); // index에서 시작해 1개가 지워짐
      this._render();
    }
  }

  removeWorkout(id){
    const index = this._workouts.findIndex(workout => workout.id === id)
    if( index !== -1 ) {
      const workout = this._workouts[index];
      this._totalCalories += workout.calories;
      this._workouts.splice(index, 1); 
      this._render();
    }
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

  _displayNewMeals(meal){
    const mealsEl = document.getElementById('meal-items');
    const mealEl = document.createElement('div');
    mealEl.classList.add('card', 'my-2');
    mealEl.setAttribute('data-id', meal.id);
    mealEl.innerHTML = `
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
              <h4 class="mx-1">${meal.name}</h4>
              <div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">
                ${meal.calories}
              </div>
              <button class="delete btn btn-danger btn-sm mx-2">
                  <i class="fa-solid fa-xmark"></i>
              </button>
          </div>
        </div>
      `;
      mealsEl.appendChild(mealEl);
    }

  _displayNewWorkouts(workout){
    const workoutsEl = document.getElementById('workout-items');
    const workoutEl = document.createElement('div');
    workoutEl.classList.add('card', 'my-2');
    workoutEl.setAttribute('data-id', workout.id);
    workoutEl.innerHTML = `
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
              <h4 class="mx-1">${workout.name}</h4>
              <div class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">
                ${workout.calories}
              </div>
              <button class="delete btn btn-danger btn-sm mx-2">
                  <i class="fa-solid fa-xmark"></i>
              </button>
          </div>
        </div>
      `;
      workoutsEl.appendChild(workoutEl);
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
  constructor() {
    this._tracker = new CalorieTracker(); //can use addMeal(), addWorkout()

    document.getElementById('meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'))
    document.getElementById('workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'))
    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
    document.getElementById('filter-meals').addEventListener('input', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('input', this._filterItems.bind(this, 'workout'));
    document.getElementById('reset').addEventListener('click', this._reset.bind(this));
  }

  _newItem(type, e){
    e.preventDefault();
    
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    // Validate inputs
    if (name.value === '' || calories.value === '') {
      alert('Please fill in all fields');
      return;
    }

    if(type === 'meal'){
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeal(meal);
    } else {
      const workout = new Workout(name.value, +calories.value);
      this._tracker.addWorkout(workout);
    }

    name.value = "";
    calories.value = "";

    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem, {toggle: true});
  }

  _removeItem(type, e){
    if(e.target.classList.contains('remove') || e.target.classList.contains('fa-xmark')){
      if(confirm('Are you sure?')){
        const id = e.target.closest('.card').getAttribute('data-id');
        type === 'meal'? this._tracker.removeMeal(id): this._tracker.removeWorkout(id)
        
        e.target.closest('.card').remove();
      }
    }
  }

  _filterItems(type, e){
    const text = e.target.value.toLowerCase(); 
    document.querySelectorAll(`#${type}-items .card`).forEach(item =>{
      const name = item.firstElementChild.firstElementChild.textContent
      if (name.toLowerCase().indexOf(text) !== -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })
  }

  _reset(e){
    this._tracker.reset();
  }
}


const app = new App();




