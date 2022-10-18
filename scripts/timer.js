const todayHeader = document.getElementById("today");
const timeDiv = document.getElementById("time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const toExactSecond = 1000 - (new Date().getTime() % 1000);

function setTime() {
	if (localStorage.getItem("showClock") !== "true") {
		timeDiv.innerHTML = "";
		return;
	}

	const showSeconds = localStorage.getItem("showSeconds") == "true";
	const amPm = localStorage.getItem("amPm") == "true";
	let today = new Date();

	todayHeader.innerText = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]}  ${today.getFullYear()}.`;
	let H = String(today.getHours()).padStart(2, "0"),
		M = String(today.getMinutes()).padStart(2, "0"),
		S = String(today.getSeconds()).padStart(2, "0"),
		notation = "",
		HM = "";

	if (amPm) {
		H = today.getHours() % 12;
		if (H == 0) H = 12;
		H = String(H).padStart(2, "0");
		notation = `<span style="font-size: 2rem; position: absolute; bottom: 7px; right: -40px;">${today.getHours() < 12 ? "AM" : "PM"}</span>`;
	} else {
		if (H == 0) H = 12;
	}

	if (showSeconds) HM = `<span class="color-primary">${H}</span><br/>${M}<br/><span class="color-secondary-dim">${S}</span>${notation}`;
	else HM = `<span class="color-primary">${H}</span><br/>--<br/>${M}${notation}`;

	timeDiv.innerHTML = HM;
}

setTime();
setTimeout(() => {
	setInterval(setTime, 1000);
}, toExactSecond);
