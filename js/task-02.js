const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = document.getElementById("ingredients");

const createAndAppendItems = ingredients.forEach((el) => {
	const createLi = document.createElement("li");
	createLi.classList.add("item");
	createLi.textContent = el;
	ingredientsRef.append(createLi);
});
