const homeDiv = document.getElementById("home");
const settingDiv = document.getElementById("setting");
const aboutDiv = document.getElementById("about");
const validOption = ["home", "setting", "about"];
const divDict = {
	home: homeDiv,
	setting: settingDiv,
	about: aboutDiv,
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

	localStorage.setItem("lastPage", page);
}

function initPageSwitcher() {
	const lastPage = localStorage.getItem("lastPage");
	if (lastPage) switchTo(lastPage);
}

initPageSwitcher();
