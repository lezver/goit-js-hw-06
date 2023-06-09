function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	valueOfColor: document.querySelector(".color"),
	changeBtn: document.querySelector(".change-color"),
};

const changeColorOnBackground = () => {
	const randomChangeColor = getRandomHexColor();

	document.body.style.backgroundColor = randomChangeColor;
	refs.valueOfColor.textContent = randomChangeColor;
};

refs.changeBtn.addEventListener("click", changeColorOnBackground);
