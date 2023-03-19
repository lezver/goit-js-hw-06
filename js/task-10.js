function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	controls: document.querySelectorAll("#controls input, button"),
	boxes: document.getElementById("boxes"),
};

const [amount, createBtn, destroyBtn] = refs.controls;

const createBoxes = () => {
	if (amount.value === "") alert("select a number");
	else {
		let arrayOfBoxes = [];
		for (let i = 0; i < amount.value; i += 1) {
			const box = document.createElement("div");
			box.style.width = 30 + i * 10 + "px";
			box.style.height = 30 + i * 10 + "px";
			box.style.borderRadius = "5px";
			box.style.backgroundColor = getRandomHexColor();

			arrayOfBoxes.push(box);
			// refs.boxes.append(box);
			// чи можна на замість масива , одразу додавати його у HTML ?
		}

		refs.boxes.append(...arrayOfBoxes);
	}
};
const desroyBoxes = () => {
	amount.value = "";
	refs.boxes.innerHTML = "";
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", desroyBoxes);
