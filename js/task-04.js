const refs = {
	decrementBtn: document.querySelector(`[data-action="decrement"]`),
	incrementBtn: document.querySelector(`[data-action="increment"]`),
	infoOfValue: document.getElementById("value"),
	counterBox: document.getElementById("counter"),
};

const titelOfcounter = document.createElement("h1");
titelOfcounter.classList.add("counter__title");
titelOfcounter.textContent = "Calculator";
refs.counterBox.prepend(titelOfcounter);

let counterValue = 0;

const incrementValue = () => {
	counterValue += 1;
	refs.infoOfValue.textContent = counterValue;
};

const decrementValue = () => {
	counterValue -= 1;
	refs.infoOfValue.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", decrementValue);
refs.incrementBtn.addEventListener("click", incrementValue);
