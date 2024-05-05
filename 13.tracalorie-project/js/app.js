class TrackCaloires {
  constructor(){
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = Storage.getTotalCalories();
    this._meals = Storage.getMeals();
    this._workouts = Storage.getWorkouts();

    this._displayCalorieLimit();
    this._displayTotalCalories();
    this._displayCalorieConsumed();
    this._displayCalorieBurned();
    this._displayCaloriesRemaining();
    this._displayProgressBar();

    
  }

  addMeal(meal){
    this._meals.push(meal);
    Storage.setMeals(meal);
    this._totalCalories += meal.calories;
    Storage.setTotalCalories(this._totalCalories);
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout){
    this._workouts.push(workout);
    Storage.setWorkouts(workout);
    this._totalCalories -= workout.calories;
    Storage.setTotalCalories(this._totalCalories);
    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id){
    const index = this._meals.findIndex((meal) => meal.id === id);
    if (index !== -1) {
      const meal = this._meals[index]; 
      this._totalCalories -= meal.calories;
      Storage.setTotalCalories(this._totalCalories);
      this._meals.splice(index, 1);
      Storage.removeMeal(id);
      this._render();
    }
  }
  removeWorkout(id){
    const index = this._workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
      const workout = this._workouts[index]; 
      this._totalCalories += workout.calories;
      Storage.setTotalCalories(this._totalCalories);
      this._workouts.splice(index, 1);
      Storage.removeWorkout(id);
      this._render();
    }
  }

  loadItems(){
    this._meals.forEach((meal)=> this._displayNewMeal(meal));
    this._workouts.forEach((workout)=> this._displayNewWorkout(workout));
  }

  reset(){
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
    Storage.clearAll();
    this._render();
  }

  setLimit(limit){
    this._calorieLimit = limit;
    document.getElementById('limit').placeholder = this._calorieLimit;
    Storage.setCalorieLimit(limit);
    this._render(); 
  }

  _displayNewMeal(meal) {
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

  _displayNewWorkout(workout) {
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

  _displayCalorieLimit(){
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayTotalCalories(){
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories; 
  }

  _displayCalorieConsumed(){
    const calorieConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
    calorieConsumedEl.innerHTML = consumed;
  }

  _displayCalorieBurned(){
    const calorieBurnedEl = document.getElementById('calories-burned');
    const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
    calorieBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining(){
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const remaining = this._calorieLimit - this._totalCalories;
    caloriesRemainingEl.innerHTML = remaining;
  }

  _displayProgressBar(){
    const calorieProgressEl = document.getElementById('calorie-progress');
    const percent = (this._totalCalories / this._calorieLimit * 100)
    const width = Math.min(percent, 100);
    calorieProgressEl.style.width = `${percent}%`;
  }

  _render(){
    this._displayCalorieLimit();
    this._displayTotalCalories();
    this._displayCalorieConsumed();
    this._displayCalorieBurned();
    this._displayCaloriesRemaining();
    this._displayProgressBar();
  }
}

class Meal {
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class App {
  constructor(){
    this._tracker = new TrackCaloires();
    this._tracker.loadItems();
    this._loadEventListeners();
  }

  _loadEventListeners(){
    document.getElementById('meal-form').addEventListener('submit', this._addItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit', this._addItem.bind(this, 'workout'));
    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
    document.getElementById('filter-meals').addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('keyup', this._filterItems.bind(this, 'workout'));
    document.getElementById('reset').addEventListener('click', this._reset.bind(this));
    document.getElementById('limit-form').addEventListener('submit', this._calorieLimit.bind(this));
  }

  _addItem(type, e){
    e.preventDefault();

    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);
    
    //validate inputs
    if (name.value === '' || calories.value === ''){
      alert('Please fill in all fields');
      return; 
    }

    if (type === 'meal'){
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
    if(e.target.classList.contains('delete') || e.target.classList.contains('fa-xmark')){
      const id = e.target.closest('.card').getAttribute('data-id');
      
      type === 'meal'? this._tracker.removeMeal(id) : this._tracker.removeWorkout(id);

      e.target.closest('.card').remove();
    }
  }

  _filterItems(type, e){
    const text = e.target.value.toLowerCase().trim();

    // exising text 
    const cards = document.querySelectorAll(`#${type}-items .card`);
    cards.forEach(card => {
      const name = card.firstElementChild.firstElementChild.firstElementChild.textContent.toLowerCase();
      // console.log(`name: ${name}, text: ${text}, first-index:${name.indexOf(text)}`)
      if (name.indexOf(text) !== -1){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    })
  }

  _reset(){
    this._tracker.reset();
    document.getElementById('meal-items').innerHTML = "";
    document.getElementById('workout-items').innerHTML = "";
    document.getElementById('filter-meals').value = "";
    document.getElementById('filter-workouts').value = "";
  }

  _calorieLimit(e){
    e.preventDefault();

    const limit = document.getElementById('limit'); 
    if (limit.value === ''){
      alert('Please add a limit')
      return;
    }
    this._tracker.setLimit(+limit.value);
    limit.value = "";
    
    // close modal
    const modalEl = document.getElementById('limit-modal'); //modal parent id
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
}

class Storage {

  static getCalorieLimit(defaultLimit = 2000){
    let calorieLimit;

    if (localStorage.getItem('calorieLimit') === null){
      calorieLimit = defaultLimit
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }

    return calorieLimit
  }
  
  static setCalorieLimit(limit){
    localStorage.setItem('calorieLimit', +limit);
  }

  static getTotalCalories(defaultTotal = 0){
    let totalCalories;

    if (localStorage.getItem('totalCalories') === null){
      totalCalories = defaultTotal
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }

    return totalCalories;
  }

  static setTotalCalories(total){
    localStorage.setItem('totalCalories', total);
  }

  static getMeals(){
    let meals;

    if (localStorage.getItem('meals') === null){
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }

    return meals;
  }

  static setMeals(meal){
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static getWorkouts(){
    let workouts;

    if (localStorage.getItem('workouts') === null){
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }

    return workouts;
  }

  static setWorkouts(workout){
    const workouts = Storage.getWorkouts();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeMeal(id){
    const meals = Storage.getMeals();
    meals.forEach((meal, index) => {
      if (meal.id === id){
        meals.splice(index, 1);
      }
    })

    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeWorkout(id){
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, index) => {
      if (workout.id === id){
        workouts.splice(index, 1);
      }
    })

    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static clearAll(){
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');
    // localStorage.clear();
  }
}

const app = new App();
