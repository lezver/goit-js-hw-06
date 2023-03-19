const refs = {
	fzControl: document.getElementById("font-size-control"),
	text: document.getElementById("text"),
};

const changeOfControl = () => {
	const value = refs.fzControl.value;
	const min = refs.fzControl.min;
	const max = refs.fzControl.max;
	const fz = refs.text;

	if (value > min && value < max) {
		if (value <= 40) {
			fz.style.color = "green";
		}
		if (value > 41 && value < 65) {
			fz.style.color = "blue";
		}
		if (value >= 65) {
			fz.style.color = "red";
		}

		fz.style.fontSize = value + "px";
	}
};

refs.fzControl.addEventListener("input", changeOfControl);
