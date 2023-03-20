const categoriesRef = document.querySelectorAll("#categories li.item");

console.log(`Numbers of categories: ${categoriesRef.length}`);

categoriesRef.forEach((el) => {
	console.log(`Category: ${el.firstElementChild.textContent}`);

	console.log(`Elements: ${el.lastElementChild.children.length}`);
});
