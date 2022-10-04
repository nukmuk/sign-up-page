randomBackgroundImage();
function randomBackgroundImage() {
	const rand = Math.floor(Math.random() * 3 + 1);
	console.log(rand);

	let backgroundImage = `url(./images/background${rand}.jpg)`;

	let creator;
	let link;
	switch (rand) {
		case 1:
			creator = "Philip Myrtorp";
			link = "https://unsplash.com/@philipmyr";
			break;
		case 2:
			creator = "Pontus Wellgraf";
			link = "https://unsplash.com/@wellgraf";
			break;
		case 3:
			creator = "Sarath P Raj";
			link = "https://unsplash.com/@sharathsinstastories";
			break;

		default:
			break;
	}

	const credits = document.querySelector(".photo-credits");
	const html = ` <a href="${link}">${creator}</a> on <a href="https://unsplash.com">Unsplash</a>`;
	credits.innerHTML += html;

	const imgArea = document.querySelector(".img-area");
	console.log(imgArea);
	imgArea.style.backgroundImage = backgroundImage;
}

const pws = document.querySelectorAll("#password, #confirm_password");
for (pw of pws) {
	pw.addEventListener("input", checkPasswordsMatch);
}

const pwInfo = document.querySelector(".password > .info");

function checkPasswordsMatch() {
	let error;
	let errorVisible;
	if (pws[0].value == "" && pws[1].value == "") {
		error = true;
		errorVisible = false;
	} else if (pws[0].value === pws[1].value) {
		error = false;
		errorVisible = false;
		pw.setCustomValidity("");
	} else {
		error = true;
		errorVisible = true;
		pw.setCustomValidity("Passwords do not match");
	}

	for (const pw of pws) {
		pw.classList.toggle("error", error);
	}

	if (errorVisible) {
		pwInfo.style.visibility = "visible";
	} else {
		pwInfo.style.visibility = "hidden";
	}
}
