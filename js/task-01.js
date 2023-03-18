const categoties = document.querySelector("#categories");

const animals = categoties.children[0];
const animalsElements = animals.lastElementChild;

const products = categoties.children[1];
const productsElements = products.lastElementChild;

const technologies = categoties.children[2];
const technologiesElements = technologies.lastElementChild;

console.log(`Numbers of categories: ${categoties.childElementCount}`);

console.log(`Category: ${animals.firstElementChild.textContent}`);
console.log(`Elements: ${animalsElements.childElementCount}`);

console.log(`Category: ${products.firstElementChild.textContent}`);
console.log(`Elements: ${productsElements.childElementCount}`);

console.log(`Category: ${technologies.firstElementChild.textContent}`);
console.log(`Elements: ${technologiesElements.childElementCount}`);

// or
//  with forEach

const categoriesRef = document.querySelectorAll("#categories li.item");

console.log(`Numbers of categories: ${categoriesRef.length}`);

categoriesRef.forEach((el) => {
	console.log(`Category: ${el.firstElementChild.textContent}`);

	console.log(`Elements: ${el.lastElementChild.children.length}`);
});
