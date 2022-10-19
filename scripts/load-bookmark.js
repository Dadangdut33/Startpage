const bookmarksDiv = document.getElementById("bookmarks");
const emptyMsg = `<div>No bookmarks found. <span class='link' onClick='switchTo("setting")'>Add some!</span></div>`;
const invalidMsg = `<div>Invalid syntax found in bookmarks. <span class='link' onClick='switchTo(\"setting\")'>Please check your input!</span></div>`;

function loadBookmark() {
	bookmarksDiv.innerHTML = "";
	const bookmarks = localStorage.getItem("bookmarks-saved");

	if (bookmarks) {
		if (!isJsonString(bookmarks)) bookmarksDiv.innerHTML = invalidMsg;

		const bookmarksArray = JSON.parse(bookmarks);

		if (bookmarksArray.length == 0) {
			bookmarksDiv.innerHTML = emptyMsg;
			return;
		}

		bookmarksArray.forEach((bookmark) => {
			const bookmarkRows = document.createElement("div");
			bookmarkRows.className = "bookmarks-row";

			const bookmarkTitle = document.createElement("h3");
			bookmarkTitle.innerText = bookmark.title ? bookmark.title : "Invalid title!";
			bookmarkRows.appendChild(bookmarkTitle);

			try {
				bookmark.links.forEach((link) => {
					const bookmarkLink = document.createElement("a");
					bookmarkLink.href = link.value ? link.value : "#";
					bookmarkLink.innerText = link.label ? link.label : "Invalid\nlink!";
					bookmarkRows.appendChild(bookmarkLink);
				});
			} catch (error) {
				bookmarkRows.innerHTML += "Invalid <br />Format!";
			}

			bookmarksDiv.appendChild(bookmarkRows);
		});
	} else {
		bookmarksDiv.innerHTML = emptyMsg;
	}
}

// ------------------------------
// init bookmark on load
loadBookmark();
