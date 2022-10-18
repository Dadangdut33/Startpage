const titleConstant = "winTitle";
const usernameConstant = "user";
const showSecondsConstant = "showSeconds";
const amPmConstant = "amPm";
const selectCoverImgConstant = "selectCoverImage";
const coverImgConstant = "coverImg";

const username_Display = document.getElementById("user-display");
const coverImg_Display = document.getElementById("coverImg-display");

const winTitle_Input = document.getElementById(titleConstant);
const username_Input = document.getElementById(usernameConstant);
const showSeconds_Input = document.getElementById(showSecondsConstant);
const amPm_Input = document.getElementById(amPmConstant);
const selectCoverImg_Input = document.getElementById(selectCoverImgConstant);
const coverImg_Input = document.getElementById(coverImgConstant);

// ------------------------------
const coverImageMap = {
	pic_1: "images/clouds.gif",
	pic_2: "images/lein.gif",
	pic_3: "images/violet.gif",
	pic_4: "images/white.gif",
	pic_5: "images/blue.gif",
	pic_6: "images/69414913.gif",
};

function init_Setting() {
	const winTitle = localStorage.getItem(titleConstant);
	const username = localStorage.getItem(usernameConstant);
	const showSeconds = localStorage.getItem(showSecondsConstant);
	const amPm = localStorage.getItem(amPmConstant);
	const selectCoverImg = localStorage.getItem(selectCoverImgConstant);
	const coverImg = localStorage.getItem(coverImgConstant);

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

	if (selectCoverImg) {
		selectCoverImg_Input.value = selectCoverImg;
	} else {
		selectCoverImg_Input.value = "pic_1";
		localStorage.setItem(selectCoverImgConstant, "pic_1");
	}

	if (coverImg) {
		coverImg_Input.value = coverImg;
		coverImg_Display.src = coverImg;
	} else {
		coverImg_Input.value = coverImageMap["pic_1"];
		coverImg_Display.src = coverImageMap["pic_1"];
		localStorage.setItem(coverImgConstant, coverImageMap["pic_1"]);
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

selectCoverImg_Input.onchange = (e) => {
	if (selectCoverImg_Input.value == "custom") {
		localStorage.setItem(selectCoverImgConstant, "custom");
		coverImg_Input.disabled = false;
	} else {
		localStorage.setItem(selectCoverImgConstant, selectCoverImg_Input.value);
		coverImg_Input.value = coverImageMap[selectCoverImg_Input.value];
		coverImg_Display.src = coverImageMap[selectCoverImg_Input.value];
	}
};

coverImg_Input.onkeyup = (e) => {
	localStorage.setItem(coverImgConstant, coverImg_Input.value);
	coverImg_Display.src = coverImg_Input.value;
};
