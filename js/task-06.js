const refs = {
	validationOfInput: document.getElementById("validation-input"),
};

const changeOfValidation = () => {
	const lengthOfString = refs.validationOfInput;
	const addClassList = lengthOfString.classList;
	const removeClassList = lengthOfString.classList;

	if (lengthOfString.value.length <= lengthOfString.dataset.length)
		return addClassList.add("valid"), removeClassList.remove("invalid");
	else {
		return addClassList.add("invalid");
	}
};

refs.validationOfInput.addEventListener("blur", changeOfValidation);
