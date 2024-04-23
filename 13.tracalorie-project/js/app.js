class CalorieTracker {
  constructor(){
    this._calorieLimit = Storage.getCalorieLimit(2000);
    this._calorieTotal = Storage.getTotalCalories(0);
    this._meals = Storage.getMeals(); 
    this._workouts = Storage.getWorkouts(); 

    this._displayCaloriesLimit();
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayProgressBar(); 
  }

  addMeal(meal){
    this._meals.push(meal)
    this._calorieTotal += meal.calories;
    Storage.updateTotalCalories(this._calorieTotal);
    Storage.saveMeal(meal);
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout){
    this._workouts.push(workout)
    this._calorieTotal -= workout.calories;
    Storage.updateTotalCalories(this._calorieTotal);
    Storage.saveWorkout(workout);
    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id) {
    const idx = this._meals.findIndex(meal => meal.id === id)
    if (idx !== -1) {
      const meal = this._meals[idx];
      this._calorieTotal -= meal.calories;
      Storage.updateTotalCalories(this._calorieTotal);
      this._meals.splice(idx, 1);
      Storage.removeMeal(id);
      this._render();
    }
  }

  removeWorkout(id) {
    const idx = this._workouts.findIndex(workout => workout.id === id)
    if (idx !== -1) {
      const workout = this._workouts[idx];
      this._calorieTotal += workout.calories;
      Storage.updateTotalCalories(this._calorieTotal);
      this._workouts.splice(idx, 1);
      Storage.removeWorkout(id);
      this._render();
    }
  }

  setLimit(limit){
    this._calorieLimit = limit;
    Storage.setCalorieLimit(limit);
    this._displayCaloriesLimit();
    this._render();
  }

  loadItems(){
    this._meals.forEach(meal => this._displayNewMeal(meal))
    this._workouts.forEach(workout => this._displayNewWorkout(workout))
  }

  reset(){
    this._calorieTotal = 0;
    this._meals = [];
    this._workouts = [];
    this._render();
  }

  _displayCaloriesTotal(){
    const calorieTotalEl = document.getElementById('calories-total');
    calorieTotalEl.innerHTML = this._calorieTotal;
  }

  _displayCaloriesLimit(){
    const caloriesLimitEl = document.getElementById('calories-limit');
    caloriesLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed(){
    const calorieConsumedEl = document.getElementById('calories-consumed')
    const consumed = this._meals.reduce(( total, meal ) => total + meal.calories, 0)
    calorieConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned(){
    const calorieBurnedEl = document.getElementById('calories-burned')
    const burned = this._workouts.reduce(( total, workout ) => total + workout.calories, 0)
    calorieBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining(){
    const caloriesRemainingEl = document.getElementById('calories-remaining');
    const progressBarEl = document.getElementById('calorie-progress');
    const remaining = this._calorieLimit - this._calorieTotal;
    caloriesRemainingEl.innerHTML = remaining;

    if (remaining < 0 ){
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-danger')
      caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-light')

      progressBarEl.classList.add('bg-danger')
      progressBarEl.classList.remove('bg-success')
    } else {
      caloriesRemainingEl.parentElement.parentElement.classList.remove('bg-danger')
      caloriesRemainingEl.parentElement.parentElement.classList.add('bg-light')  
      
      progressBarEl.classList.remove('bg-danger')
      progressBarEl.classList.add('bg-success') 
    }
  }

  _displayProgressBar(){
    const progressBarEl = document.getElementById('calorie-progress');
    const percentage = this._calorieTotal / this._calorieLimit * 100;
    const width = Math.min(percentage, 100);
    progressBarEl.style.width = `${width}%`;
  }

  _displayNewMeal(meal){
    const mealItems = document.getElementById('meal-items');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "my-2"); 
    cardDiv.setAttribute('data-id', meal.id)
    cardDiv.innerHTML = `
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
    </div>`

    mealItems.appendChild(cardDiv);
  }

  _displayNewWorkout(workout){
    const mealItems = document.getElementById('workout-items');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card", "my-2"); 
    cardDiv.setAttribute('data-id', workout.id)
    cardDiv.innerHTML = `
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
    </div>`

    mealItems.appendChild(cardDiv);
  }

  _render(){
    this._displayCaloriesTotal();
    this._displayCaloriesLimit();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned(); 
    this._displayCaloriesRemaining();
    this._displayProgressBar();
  }
}

class Meal {
  constructor (name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout {
  constructor (name, calories) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class App {
  constructor(){
    this._tracker = new CalorieTracker();
    this._tracker.loadItems();

    this._loadEventListeners();
  }

  _loadEventListeners(){
    document.getElementById('meal-form').addEventListener('submit', this._newItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit', this._newItem.bind(this, 'workout'));
    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
    document.getElementById('filter-meals').addEventListener('input', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('input', this._filterItems.bind(this, 'workout'));
    document.getElementById('reset').addEventListener('click', this._reset.bind(this));
    document.getElementById('limit-form').addEventListener('submit', this._setLimit.bind(this));
  }

  _newItem(type, e){
    e.preventDefault();
    // console.log(this); 
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);
    
    if ( name.value === "" || calories.value === ""){
      alert("Please fill in all fields");
      return 
    }

    if (type === 'meal') {
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

      type === 'meal' ? this._tracker.removeMeal(id) : this._tracker.removeWorkout(id)

      e.target.closest('.card').remove();
    }
  }

  _filterItems(type, e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll(`#${type}-items .card`).forEach(item => {
      const name = item.firstElementChild.firstElementChild.textContent; 
      if (name.toLowerCase().indexOf(text) !== -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    })
  }

  _reset(e){
    this._tracker.reset();
    document.getElementById('meal-items').innerHTML = "";
    document.getElementById('workout-items').innerHTML = "";  
    document.getElementById('filter-meals').value = "";
    document.getElementById('filter-workouts').value = "";
  }

  _setLimit(e){
    e.preventDefault();
    const limitInput = document.getElementById('limit');

    if (limitInput.value === '') {
      alert('Please add a limit ')
    }

    this._tracker.setLimit(+limitInput.value);

    limitInput.value = '';

    const modalEl= document.getElementById('limit-modal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
}

class Storage {
  static getCalorieLimit(defaultLimit = 2000){
    let calorieLimit;
    if (localStorage.getItem('calorieLimit') === null){
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit){
    localStorage.setItem('calorieLimit', calorieLimit)
  }

  static getTotalCalories(defaultCalories = 0){
    let totalCalories;
    if (localStorage.getItem('totalCalories') === null){
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

  static updateTotalCalories(totalCalories){
    localStorage.setItem('totalCalories', totalCalories)
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

  static saveMeal(meal){
    const meals = Storage.getMeals();
    meals.push(meal);

    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMeal(id){
    const meals = Storage.getMeals();
    meals.forEach((meal, index) => {
      if (meal.id === id) {
        meals.splice(index, 1);
      }
    });

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

  static saveWorkout(workout){
    const workouts = Storage.getWorkouts();
    workouts.push(workout);

    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeWorkout(id){
    const workouts = Storage.getWorkouts();
    workouts.forEach((workout, index) => {
      if(workout.id === id){
        workouts.splice(index, 1)
      }
    });

    localStorage.setItem('workouts', JSON.stringify(workouts));
  };
};

const app = new App();