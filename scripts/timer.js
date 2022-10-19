const todayHeader = document.getElementById("today");
const timeDiv = document.getElementById("time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const toExactSecond = 1000 - (new Date().getTime() % 1000);

function setTime() {
	const showSeconds = localStorage.getItem("showSeconds") == "true";
	const amPm = localStorage.getItem("amPm") == "true";
	let today = new Date();

	let H = String(today.getHours()).padStart(2, "0"),
		M = String(today.getMinutes()).padStart(2, "0"),
		S = String(today.getSeconds()).padStart(2, "0"),
		notation = "",
		HM = "";

	todayHeader.innerText = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]}  ${today.getFullYear()}`;

	if (amPm) {
		H = today.getHours() % 12;
		if (H == 0) H = 12;
		H = String(H).padStart(2, "0");
		notation = `${today.getHours() < 12 ? "AM" : "PM"}`;
	} else {
		if (H == 0) H = 12;
	}

	if (localStorage.getItem("showClock-image") === "true") {
		if (showSeconds) HM = `<span class="color-primary">${H}</span><br/>${M}<br/><span class="color-secondary-dim">${S}</span><span class="ampm">${notation}</span>`;
		else HM = `<span class="color-primary">${H}</span><br/>--<br/>${M}<span class="ampm">${notation}</span>`;

		timeDiv.innerHTML = HM;
	}

	if (localStorage.getItem("showClock-date") === "true") {
		if (showSeconds) todayHeader.innerText += ` ${H}:${M}:${S} ${notation}`;
		else todayHeader.innerText += ` ${H}:${M} ${notation}`;
	}
}

// ------------------------------
// set time on load
setTime();
setTimeout(() => {
	setInterval(setTime, 1000);
}, toExactSecond);
