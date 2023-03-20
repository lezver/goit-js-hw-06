const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ingredientsRef = document.getElementById("ingredients");

let array = [];

const createAndAppendItems = ingredients.forEach((el) => {
	const createLi = document.createElement("li");
	createLi.classList.add("item");
	createLi.textContent = el;
	array.push(createLi);
});

ingredientsRef.append(...array);
