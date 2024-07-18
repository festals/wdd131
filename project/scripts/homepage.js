

const recipes =[
{
  name: "Brownies",
  prepTime: "10 min",
  cookingTime: "20 min",
  nIngredients: "5",
  ingredients: "100g sugar, 70g flour, 3 eggs, 250g chocolate, 250g butter, 100g almond",
  posted: "2020, may",
  imageUrl: "https://images.pexels.com/photos/887850/pexels-photo-887850.jpeg"
},

{
  name: "Pesto Bread",
  prepTime: "10 min",
  cookingTime: "30 min",
  nIngredients: "2",
  ingredients: "250g pesto, 350g bread dough, some nuts for decoration",
  posted: "2023, december",
  imageUrl: "https://images.pexels.com/photos/6607295/pexels-photo-6607295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

{
  name: "Domatokeftedes",
  prepTime: "20 min",
  cookingTime: "10 min",
  nIngredients: "8",
  ingredients: "500g tomatoes, 60g flour, 1 eggs, 1 red oignon, 130g feta, olive oil, basil",
  posted: "2021, july",
  imageUrl: "https://images.pexels.com/photos/9557673/pexels-photo-9557673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

{
  name: "Pumpkin Gnocchi",
  prepTime: "30 min",
  cookingTime: "30 min",
  nIngredients: "3",
  ingredients: "pumpkin, 200g flour, 1 egg yolk",
  posted: "2022, october",
  imageUrl: "https://images.pexels.com/photos/6659690/pexels-photo-6659690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

{
name: "Pesto",
  prepTime: "15 min",
  cookingTime: "0 min",
  nIngredients: "5",
  ingredients: "garlic, basil, olive oil, parmesiano, pine nuts",
  posted: "2024, june",
  imageUrl: "https://images.pexels.com/photos/33249/parmesan-garlic-baslikium-pine-nuts.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},

{
  name: "Apricot Cake",
  prepTime: "20 min",
  cookingTime: "30 min",
  nIngredients: "6",
  ingredients: "100g sugar, 70g flour, 70g almond , 150g apricot, 100g butter, 3 eggs",
  posted: "2024, june",
  imageUrl: "https://images.pexels.com/photos/12908072/pexels-photo-12908072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
];


const div = document.querySelector(".slideshow-container");

const displayRecipe = (frecipe) => {
  div.innerHTML = "";
  frecipe.forEach(recipe => {
    const slides = document.createElement("div")
    const figure = document.createElement("figure");
    const section = document.createElement("section");

    const name = document.createElement("h3");        
    const prepTime = document.createElement("p");        
    const cookingTime = document.createElement("p");        
    const ingredients = document.createElement("p");        
    name.innerHTML = recipe.name;
    prepTime.innerHTML = `Preparation: ${recipe.prepTime}`;
    cookingTime.innerHTML = `Bake for: ${recipe.cookingTime}`;
    ingredients.innerHTML = `Ingredients: ${recipe.ingredients}`;

    const picture = document.createElement("img");
    picture.setAttribute("src", recipe.imageUrl);
    picture.setAttribute("alt", recipe.name);
    picture.setAttribute("loading", "lazy");
    slides.setAttribute("class", "mySlides");

    section.appendChild(name);
    section.appendChild(prepTime);
    section.appendChild(cookingTime);
    section.appendChild(ingredients);
    figure.appendChild(picture);
    section.appendChild(figure);
    slides.appendChild(section)

    div.appendChild(slides);
  });
}

displayRecipe(recipes);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}


const homeLink = document.querySelector("#home");
const easyLink = document.getElementById("easy");
const newLink = document.querySelector("#new");
const oldLink = document.querySelector("#old");

newLink.addEventListener("click", () => {
    displayRecipe(recipes.filter(recipe => parseInt(recipe.posted.substring(0, 4)) > 2023));
});

easyLink.addEventListener("click", () => {
    displayRecipe(recipes.filter(recipe => parseInt(recipe.nIngredients.substring(0, 1)) < 4));
});

oldLink.addEventListener("click", () => {
  displayRecipe(recipes.filter(recipe => parseInt(recipe.posted.substring(0, 4)) < 2022));
});

homeLink.addEventListener("click", () => {
  displayRecipe(recipes);
});






