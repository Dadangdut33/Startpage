const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const searchEngMap = {
	google: "https://google.com/search?q=",
	duckduckgo: "https://duckduckgo.com/?q=",
	brave: "https://search.brave.com/search?q=",
	startpage: "https://startpage.com/do/search?q=",
	ecosia: "https://www.ecosia.org/search?q=",
	bing: "https://bing.com/search?q=",
	yandex: "https://yandex.com/search/?text=",
};

search.focus();

function isWebUrl(value) {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
}

function parseSearch(q, middleClick = false) {
	q = q.trim();
	if (q == "") return;

	if (isWebUrl(q)) {
		window.open(q, middleClick ? "_blank" : "_self");
		return;
	}

	targetURL = searchEngMap[localStorage.getItem("searchEngine")] + encodeURIComponent(q);
	window.open(targetURL, middleClick ? "_blank" : "_self");
}

search.onkeyup = (e) => {
	if (e.key == "Enter") {
		parseSearch(search.value);
	}
};

searchButton.onclick = () => {
	parseSearch(search.value);
};

searchButton.onauxclick = (e) => {
	if (e.button == 1) {
		parseSearch(search.value, true);
	}
};
