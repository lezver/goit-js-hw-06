const refs = {
	validationOfInput: document.getElementById("validation-input"),
};

const changeOfValidation = () => {
	const lengthOfString = refs.validationOfInput;
	const addClassList = lengthOfString.classList;
	const removeClassList = lengthOfString.classList;

	if (lengthOfString.value.length === Number(lengthOfString.dataset.length))
		addClassList.add("valid"), removeClassList.remove("invalid");
	else {
		addClassList.add("invalid");
	}
};

refs.validationOfInput.addEventListener("blur", changeOfValidation);
