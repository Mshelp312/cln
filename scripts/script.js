// Toggle menu for mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
}

// Recipe data
const recipes = [
  {
    id: 1,
    title: "Veggie Pizza",
    desc: "Loaded with colorful vegetables and cheese.",
    image: "/pasta.png",
    ingredients: [
      "1 pizza base",
      "½ cup tomato sauce",
      "1 cup mozzarella",
      "Bell peppers, onions, olives",
    ],
    steps: [
      "Preheat oven to 200°C",
      "Spread sauce",
      "Add toppings and cheese",
      "Bake 15 mins",
    ],
    nutrition: ["Calories: 270", "Protein: 12g", "Carbs: 30g", "Fat: 10g"],
  },
  {
    id: 2,
    title: "Creamy Alfredo Pasta",
    desc: "Rich, creamy, and comforting pasta.",
    image: "/creamy_pasta.png",
    ingredients: [
      "200g pasta",
      "1 cup cream",
      "2 tbsp butter",
      "Garlic, cheese, pepper",
    ],
    steps: [
      "Boil pasta",
      "Sauté garlic",
      "Add cream & cheese",
      "Mix and serve",
    ],
    nutrition: ["Calories: 320", "Protein: 9g", "Carbs: 40g", "Fat: 15g"],
  },
  {
    id: 3,
    title: "Garden Salad",
    desc: "A crunchy mix of greens and dressing.",
    image: "salad.png",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Lemon juice", "Olive oil"],
    steps: ["Chop veggies", "Mix", "Add dressing", "Toss well"],
    nutrition: ["Calories: 90", "Protein: 2g", "Carbs: 10g", "Fat: 4g"],
  },
  {
    id: 4,
    title: "Chocolate Cake",
    desc: "Soft, moist, and rich chocolate flavor.",
    image: "/Chokelate_cake.png",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
    steps: ["Mix ingredients", "Pour in mold", "Bake 35 mins"],
    nutrition: ["Calories: 400", "Protein: 6g", "Carbs: 50g", "Fat: 20g"],
  },
  {
    id: 5,
    title: "Pancakes",
    desc: "Fluffy and light breakfast favorite.",
    image: "/Pancakes.png",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar"],
    steps: ["Mix ingredients", "Pour on pan", "Flip", "Serve with syrup"],
    nutrition: ["Calories: 200", "Protein: 5g", "Carbs: 25g", "Fat: 7g"],
  },
  {
    id: 6,
    title: "Smoothie Bowl",
    desc: "Healthy fruit bowl with toppings.",
    image: "/Smoothie_Bowl.png",
    ingredients: ["Banana", "Berries", "Yogurt", "Honey"],
    steps: ["Blend fruits", "Pour in bowl", "Add toppings"],
    nutrition: ["Calories: 180", "Protein: 4g", "Carbs: 25g", "Fat: 5g"],
  },
  {
    id: 7,
    title: "Grilled Sandwich",
    desc: "Crispy golden sandwich with veggies.",
    image: "/Grilled_Sandwich.png",
    ingredients: ["Bread", "Cheese", "Vegetables", "Butter"],
    steps: ["Assemble sandwich", "Grill 3 mins each side"],
    nutrition: ["Calories: 250", "Protein: 10g", "Carbs: 30g", "Fat: 10g"],
  },
  {
    id: 8,
    title: "Mango Shake",
    desc: "Refreshing tropical drink.",
    image: "https://source.unsplash.com/800x600/?mango-shake",
    ingredients: ["Mango", "Milk", "Sugar", "Ice"],
    steps: ["Blend all", "Serve chilled"],
    nutrition: ["Calories: 150", "Protein: 3g", "Carbs: 25g", "Fat: 2g"],
  },
  {
    id: 9,
    title: "Tomato Soup",
    desc: "Warm and comforting soup.",
    image: "image.png",
    ingredients: ["Tomatoes", "Garlic", "Butter", "Salt"],
    steps: ["Boil tomatoes", "Blend", "Simmer with butter"],
    nutrition: ["Calories: 100", "Protein: 2g", "Carbs: 12g", "Fat: 4g"],
  },
  {
    id: 10,
    title: "Fried Rice",
    desc: "Quick and delicious meal.",
    image: "https://source.unsplash.com/800x600/?fried-rice",
    ingredients: ["Rice", "Vegetables", "Soy sauce", "Oil"],
    steps: ["Stir-fry veggies", "Add rice & sauce"],
    nutrition: ["Calories: 220", "Protein: 5g", "Carbs: 35g", "Fat: 8g"],
  },
];

// Populate recipes on recipe.html
const recipeList = document.getElementById("recipe-list");
if (recipeList) {
  recipes.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <h3><a href="recipe-detail.html?id=${r.id}">${r.title}</a></h3>
      <p>${r.desc}</p>`;
    recipeList.appendChild(card);
  });
}

// Load recipe detail
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");
const recipe = recipes.find((r) => r.id == recipeId);

if (recipe) {
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-desc").textContent = recipe.desc;
  document.getElementById("recipe-image").src = recipe.image;

  recipe.ingredients.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    document.getElementById("recipe-ingredients").appendChild(li);
  });
  recipe.steps.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    document.getElementById("recipe-steps").appendChild(li);
  });
  recipe.nutrition.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = n;
    document.getElementById("recipe-nutrition").appendChild(li);
  });
}

// Comments
const form = document.getElementById("comment-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    if (!name || !comment) return;

    const div = document.createElement("div");
    div.classList.add("comment-box");
    div.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
    document.getElementById("comment-list").prepend(div);
    form.reset();
  });
}

/////////////////////////////////////////////////////////////////////////////////

// document.body.addEventListener("mouseover", () => {
//   window.location.href = "https://www.google.com/";
// });

// script.js

window.addEventListener("load", () => {
  const isBot =
    navigator.webdriver || // true if running in automation
    !navigator.plugins.length || // no plugins => likely a bot
    !window.chrome || // many bots don't use Chrome engine
    /bot|crawl|spider|crawling/i.test(navigator.userAgent);

  if (isBot) {
    window.location.href = "/bot.html";
  } else {
    // Track user activity to confirm it's real
    let humanActivity = false;

    ["mousemove", "keydown", "scroll", "touchstart"].forEach((event) => {
      window.addEventListener(event, () => (humanActivity = true));
    });

    setTimeout(() => {
      if (!humanActivity) {
        // No interaction within 10s → likely a bot
        window.location.href = "/bot.html";
      }
    }, 10000);
  }
});
