const homeDiv = document.getElementById("home");
const settingDiv = document.getElementById("setting");
const searchDiv = document.getElementById("search");
const validOption = ["home", "setting", "about"];
const divDict = {
	home: homeDiv,
	setting: settingDiv,
	search: searchDiv,
};

function switchTo(page) {
	// check if valid first
	if (!validOption.includes(page)) return console.error("Invalid page");

	// hide all divs
	for (const div of Object.values(divDict)) {
		div.classList.add("hidden");
	}

	// show the div
	divDict[page].classList.remove("hidden");
}

// Path: scripts\setting.js
