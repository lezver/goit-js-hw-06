const refs = {
	nameOfInput: document.getElementById("name-input"),
	nameOfOutput: document.getElementById("name-output"),
};

const defaultValueNameOfOutput = refs.nameOfOutput.innerText;

const changeOfTextContent = () => {
	if (refs.nameOfInput.value === "")
		return (refs.nameOfOutput.textContent = defaultValueNameOfOutput);
	refs.nameOfOutput.textContent = refs.nameOfInput.value;
};

refs.nameOfInput.addEventListener("input", changeOfTextContent);
