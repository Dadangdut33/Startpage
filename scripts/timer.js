const todayHeader = document.getElementById("today");
const timeDiv = document.getElementById("time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const toExactSecond = 1000 - (new Date().getTime() % 1000);
const showSeconds = localStorage.getItem("showSeconds") == "true";

function setTime() {
	let today = new Date();
	todayHeader.innerText = `Today is ${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}.`;

	if (showSeconds)
		timeDiv.innerHTML = `${String(today.getHours()).padStart(2, "0")}<br/>${String(today.getMinutes()).padStart(2, "0")}<br/><span style="color: var(--secondary-dim-color);">${String(
			today.getSeconds()
		).padStart(2, "0")}</span>`;
	else timeDiv.innerHTML = `${String(today.getHours()).padStart(2, "0")}<br/>--<br/>${String(today.getMinutes()).padStart(2, "0")}`;
}

setTimeout(() => {
	setTime();
	setInterval(setTime, 1000);
}, toExactSecond);
