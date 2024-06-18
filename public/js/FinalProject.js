const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click" , () =>{
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
  sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
    modeText.innerText = "Light mode";
}else{
    modeText.innerText = "Dark mode";
  
}
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const ingredient = document.getElementById('ingredientInput').value.trim();

  if (!ingredient) {
      alert('Please enter an ingredient.');
      return;
  }

  const apiKey = 'caf0d820e15e476ea68969f5c7f43832'; // Ganti dengan kunci API Spoonacular Anda
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${ingredient}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          displayRecipes(data.results);
      })
      .catch(error => {
          console.error('Error fetching recipes:', error);
          alert('Failed to fetch recipes. Please try again.');
      });
});

function displayRecipes(results) {
  const recipeListElement = document.getElementById('recipeList');
  recipeListElement.innerHTML = '';

  if (results.length === 0) {
      recipeListElement.innerHTML = '<p>No recipes found.</p>';
      return;
  }

  results.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe-item');

      const recipeDetails = `
          <h3>${recipe.title}</h3>
          <img src="${recipe.image}" alt="${recipe.title}" >
          <div class="btn_view">
          <button onclick="viewRecipeDetails(${recipe.id})">View Recipe</button>
          </div>
      `;

      recipeItem.innerHTML = recipeDetails;
      recipeListElement.appendChild(recipeItem);
  });
}

function viewRecipeDetails(recipeId) {
  const apiKey = 'caf0d820e15e476ea68969f5c7f43832'; // Ganti dengan kunci API Spoonacular Anda
  const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          displayRecipeModal(data);
      })
      .catch(error => {
          console.error('Error fetching recipe details:', error);
          alert('Failed to fetch recipe details. Please try again.');
      });
}

function displayRecipeModal(recipe) {
  const ingredients = recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('');

  const modalContent = `
      <div class="modal">
          <div class="modal-content">
              <span class="close" onclick="closeModal()">&times;</span>
              <img src="${recipe.image}" alt="${recipe.title}">
              <div class="details">
                  <h2>${recipe.title}</h2>
                  <h3>Ingredients:</h3>
                  <ul>
                      ${ingredients}
                  </ul>
                  <h3>Instructions:</h3>
                  <p>${recipe.instructions}</p>
              </div>
          </div>
      </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalContent);

  // Disable scrolling on the background content when modal is open
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
      modal.remove();
      document.body.style.overflow = 'auto'; // Mengaktifkan scrolling kembali pada body
  }
}

  
  





