let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


const recipes1 ={

  name: "Brownies",
  prepTime: "10 min",
  cookingTime: "20 min",
  nIngredients: "5",
  ingredients: "100g sugar, 70g flour, 3 eggs, 250g chocolate, 250g butter",
  posted: "2020, may"
};

const recipes2 = {
  name: "Pesto Puff Pastry",
  prepTime: "10 min",
  cookingTime: "30 min",
  nIngredients: "2",
  ingredients: "250g pesto, 1 puff pastry",
  posted: "2023, december"
};

const recipes3 = {
  name: "Domatokeftedes",
  prepTime: "20 min",
  cookingTime: "10 min",
  nIngredients: "8",
  ingredients: "500g tomatoes, 60g flour, 1 eggs, 1 red oignon, 130g feta, olive oil, basil",
  posted: "2021, july"
};

const recipes4 = {
  name: "Pumpkin Gnocchi",
  prepTime: "30 min",
  cookingTime: "30 min",
  nIngredients: "3",
  ingredients: "pumpkin, 200g flour, 1 egg yolk",
  posted: "2022, october"
};

const recipes5 = {
name: "Pesto",
  prepTime: "15 min",
  cookingTime: "0 min",
  nIngredients: "5",
  ingredients: "garlic, basil, olive oil, parmesiano, pine nuts",
  posted: "2024, june"
};

const recipes6 = {
  name: "Apricot Cake",
  prepTime: "20 min",
  cookingTime: "30 min",
  nIngredients: "6",
  ingredients: "100g sugar, 70g flour, 70g almond , 150g apricot, 100g butter, 3 eggs",
  posted: "2024, june"
};


const div = document.querySelector(".text1");

const displayRecipe = (recipe) => {
    div.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `Ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div.appendChild(section);
    ;
}

displayRecipe(recipes1);

const div2 = document.querySelector(".text2");

const displayRecipe2 = (recipe) => {
    div2.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div2.appendChild(section);
    ;
}

displayRecipe2(recipes2);


const div3 = document.querySelector(".text3");

const displayRecipe3 = (recipe) => {
    div3.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div3.appendChild(section);
    ;
}

displayRecipe3(recipes3);


const div4 = document.querySelector(".text4");

const displayRecipe4 = (recipe) => {
    div4.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div4.appendChild(section);
    ;
}

displayRecipe4(recipes4);


const div5 = document.querySelector(".text5");

const displayRecipe5 = (recipe) => {
    div5.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div5.appendChild(section);
    ;
}

displayRecipe5(recipes5);


const div6 = document.querySelector(".text6");

const displayRecipe6 = (recipe) => {
    div6.innerHTML = "";
      const section = document.createElement("section");

      const name = document.createElement("p");        
      const prepTime = document.createElement("p");        
      const cookingTime = document.createElement("p");        
      const ingredients = document.createElement("p");        
      name.innerHTML = recipe.name;
      prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
      cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
      ingredients.innerHTML = `ingredients: ${recipe.ingredients}`;

      section.appendChild(name);
      section.appendChild(prepTime);
      section.appendChild(cookingTime);
      section.appendChild(ingredients);

      div6.appendChild(section);
    ;
}

displayRecipe6(recipes6);


const easyLink = document.getElementById("easy");
const newLink = document.querySelector("#new");
const oldLink = document.querySelector("#old");

newLink.addEventListener("click", () => {
    displayRecipe(recipes1.filter(recipe => parseInt(recipe.posted.substring(0, 4)) > 2023));
});

easyLink.addEventListener("click", () => {
    displayRecipe(recipes.filter(recipe => parseInt(recipe.nIngredients.substring(0, 1)) < 4));
});

oldLink.addEventListener("click", () => {
  displayRecipe(recipes.filter(recipe => parseInt(recipe.posted.substring(0, 4)) < 2022));
});

