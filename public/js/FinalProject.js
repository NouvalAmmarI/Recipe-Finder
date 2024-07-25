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

  const apiKey = 'caf0d820e15e476ea68969f5c7f43832'; // API Key
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
  const apiKey = 'caf0d820e15e476ea68969f5c7f43832'; // API KEY
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

  // Disable scrolling di background
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
      modal.remove();
      document.body.style.overflow = 'auto'; // Mengaktifkan scrolling kembali pada body
  }
}

// Button Bahan

const foodNames = ['Egg', 'Chicken', 'Meat', 'Potato', 'Apple', 'Shrimp', 'Onion', 'Noodle', 'Garlic', 'Chili', 'Ketchup', 'Tomato', 'Pork', 'Beef', 'Carrot', 'Lettuce', 'Squid'];

const sidebarMenu = document.getElementById('foodButtons');

foodNames.forEach(foodName => {
    const foodButton = document.createElement('button');
    foodButton.textContent = foodName;
    foodButton.classList.add('nav-link');
    foodButton.dataset.codeButton = 0;  // Use dataset to store the codeButton value
  
    foodButton.addEventListener('click', function() {
        const codeButton = parseInt(foodButton.dataset.codeButton, 10);  // Retrieve the codeButton value from dataset
        const searchInput = document.getElementById('ingredientInput');
        const currentSearch = searchInput.value.trim();
        
        if (codeButton === 1) {
            const newSearchHapus = currentSearch.replace(new RegExp(`\\b${foodName}\\b`, 'g'), '').trim();
            searchInput.value = newSearchHapus;
            foodButton.style.backgroundColor = '';  // Reset the button style
            foodButton.dataset.codeButton = 0;  // Update the codeButton value in dataset
            searchRecipes();
        } else {
            const newSearch = currentSearch ? `${currentSearch} ${foodName}` : foodName;
            searchInput.value = newSearch;
            foodButton.style.backgroundColor = '#3a3b3c';
            foodButton.dataset.codeButton = 1;  // Update the codeButton value in dataset
            searchRecipes();
        }
    });
  
    sidebarMenu.appendChild(foodButton); 
});
  