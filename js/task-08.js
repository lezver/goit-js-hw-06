const refs = {
	form: document.querySelector(".login-form"),
};

const handleSubmit = (event) => {
	event.preventDefault();

	const infoOfUser = {};
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		alert("please enter Email and Password");
	} else {
		infoOfUser.email = email.value;
		infoOfUser.password = password.value;
		console.log(infoOfUser);
	}

	event.currentTarget.reset();
};

refs.form.addEventListener("submit", handleSubmit);
