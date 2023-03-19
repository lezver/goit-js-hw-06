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
	document.body.style.backgroundColor = getRandomHexColor();
	refs.valueOfColor.textContent = getRandomHexColor();
};

refs.changeBtn.addEventListener("click", changeColorOnBackground);
