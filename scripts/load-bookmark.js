const bookmarks = localStorage.getItem("bookmarks");

if (bookmarks) {
	const bookmarksDiv = document.getElementById("bookmarks");
	const bookmarksArray = JSON.parse(bookmarks);

	bookmarksArray.forEach((bookmark) => {
		const bookmarkDiv = document.createElement("div");
		bookmarkDiv.className = "bookmark";
		bookmarkDiv.innerHTML = `<a href="${bookmark.url}">${bookmark.name}</a>`;
		bookmarksDiv.appendChild(bookmarkDiv);
	});
} else {
	const bookmarksDiv = document.getElementById("bookmarks");
	// bookmarksDiv.innerHTML = "<div>No bookmarks found. Click <span class='link' onClick='switchTo(\"setting\")'>here</span> to add some.</div>";
}
