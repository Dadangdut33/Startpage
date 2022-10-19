import isURL from "./validator.js";
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
	youtube: "https://www.youtube.com/results?search_query=",
	yt: "https://www.youtube.com/results?search_query=",
	twitter: "https://twitter.com/search?q=",
	reddit: "https://www.reddit.com/search/?q=",
	github: "https://github.com/search?q=",
};

function isPrefixSearchEngine(value) {
	let engineCheck = value.split(" ")[0]; // get first argument

	// check if it contains : or not
	if (engineCheck.includes(":")) engineCheck = engineCheck.split(":")[0]; // get the search engine name
	else return false;

	// check if it's a search engine
	if (engineCheck in searchEngMap) return true;

	return false;
}

function parseSearch(q, middleClick = false) {
	q = q.trim();
	if (q === "") return;

	if (isURL(q)) {
		window.open(q, middleClick ? "_blank" : "_self");
		return;
	}

	if (isPrefixSearchEngine(q)) {
		let [searchEng, ...searchQuery] = q.split(" ");
		window.open(searchEngMap[searchEng.split(":")[0]] + encodeURIComponent(searchQuery.join(" ")), middleClick ? "_blank" : "_self");
		return;
	}

	window.open(searchEngMap[localStorage.getItem("searchEngine")] + encodeURIComponent(q), middleClick ? "_blank" : "_self");
}

search.onkeyup = (e) => {
	if (e.key === "Enter") parseSearch(search.value);
};

searchButton.onclick = (e) => {
	parseSearch(search.value);
};

searchButton.onauxclick = (e) => {
	if (e.button === 1) parseSearch(search.value, true);
};

// fix middle click listener if page is scrollable
searchButton.onmousedown = (e) => {
	if (e.which === 2) e.preventDefault();
};

// ------------------------------
// focus on search bar when page loads
search.focus();
