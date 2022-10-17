const titleConstant = "winTitle";
const usernameConstant = "user";
const showSecondsConstant = "showSeconds";
const amPmConstant = "amPm";

const username_Display = document.getElementById("user-display");

const winTitle_Input = document.getElementById(titleConstant);
const username_Input = document.getElementById(usernameConstant);
const showSeconds_Input = document.getElementById(showSecondsConstant);
const amPm_Input = document.getElementById(amPmConstant);

function init_Setting() {
	const winTitle = localStorage.getItem(titleConstant);
	const username = localStorage.getItem(usernameConstant);
	const showSeconds = localStorage.getItem(showSecondsConstant);
	const amPm = localStorage.getItem(amPmConstant);

	if (winTitle) {
		winTitle_Input.value = winTitle;
		document.title = winTitle;
	} else {
		winTitle_Input.value = "New Tab";
		localStorage.setItem(titleConstant, "New Tab");
	}

	if (username) {
		username_Input.value = username;
		username_Display.innerText = username;
	} else {
		username_Input.value = "User";
		localStorage.setItem(usernameConstant, "User");
	}

	if (showSeconds) {
		showSeconds_Input.checked = showSeconds == "true";
	} else {
		showSeconds_Input.checked = false;
		localStorage.setItem(showSecondsConstant, false);
	}

	if (amPm) {
		amPm_Input.checked = amPm == "true";
	} else {
		amPm_Input.checked = false;
		localStorage.setItem(amPmConstant, false);
	}
}

init_Setting();

winTitle_Input.onkeyup = (e) => {
	localStorage.setItem(titleConstant, winTitle_Input.value);
	document.title = winTitle_Input.value; // update title
};

username_Input.onkeyup = (e) => {
	localStorage.setItem(usernameConstant, username_Input.value);
	username_Display.innerText = username_Input.value;
};

showSeconds_Input.onclick = (e) => {
	localStorage.setItem(showSecondsConstant, showSeconds_Input.checked);
};

amPm_Input.onclick = (e) => {
	localStorage.setItem(amPmConstant, amPm_Input.checked);
};
