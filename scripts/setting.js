const titleConstant = "winTitle",
	usernameConstant = "user",
	selectCoverImgConstant = "selectCoverImage",
	coverImgConstant = "coverImg",
	coverImgOpacityConstant = "coverImgOpacity",
	coverImgBlurConstant = "coverImgBlur",
	showClockInImgConstant = "showClock-image",
	showClockInDateConstant = "showClock-date",
	showSecondsConstant = "showSeconds",
	amPmConstant = "amPm",
	searchEngineConstant = "searchEngine",
	bookmarksConstant = "bookmarks-saved";

const username_Display = document.getElementById("user-display"),
	coverImg_Display = document.getElementById("coverImg-display"),
	coverImgOpacity_Display = document.getElementById("coverImgOpacity-display"),
	coverImgBlur_Display = document.getElementById("coverImgBlur-display"),
	warningBookmarks_Display = document.getElementById("warning-bookmarks");

const winTitle_Input = document.getElementById(titleConstant),
	username_Input = document.getElementById(usernameConstant),
	selectCoverImg_Input = document.getElementById(selectCoverImgConstant),
	coverImg_Input = document.getElementById(coverImgConstant),
	coverImgOpacity_Input = document.getElementById(coverImgOpacityConstant),
	coverImgBlur_Input = document.getElementById(coverImgBlurConstant),
	showClockInImage_Input = document.getElementById(showClockInImgConstant),
	showClockInDate_Input = document.getElementById(showClockInDateConstant),
	showSeconds_Input = document.getElementById(showSecondsConstant),
	amPm_Input = document.getElementById(amPmConstant),
	searchEngine_Input = document.getElementById(searchEngineConstant),
	bookmarks_Input = document.getElementById(bookmarksConstant);

// ------------------------------
const coverImageMap = {
	pic_1: "images/clouds.gif",
	pic_2: "images/lein.gif",
	pic_3: "images/corporations.gif",
	pic_4: "images/white.gif",
	pic_5: "images/blue.gif",
	pic_6: "images/69414913.gif",
	pic_7: "images/neon.gif",
	pic_8: "images/ramen.gif",
	pic_9: "images/sentinel.gif",
};

const default_Bookmarks = `[
  {
    "title": "Reddit",
    "links": [
      {
        "label": "r/startpages",
        "value": "https://www.reddit.com/r/startpages/"
      },
      {
        "label": "r/worldnews",
        "value": "https://www.reddit.com/r/worldnews/"
      },
      {
        "label": "Reddit Home",
        "value": "https://www.reddit.com/"
      },
      {
        "label": "Old Reddit",
        "value": "https://old.reddit.com/"
      }
    ]
  },
  {
    "title": "Dev",
    "links": [
      {
        "label": "Github",
        "value": "https://github.com/"
      },
      {
        "label": "Devdocs",
        "value": "https://devdocs.io/"
      },
      {
        "label": "MDN",
        "value": "https://developer.mozilla.org/en-US/docs/"
      },
      {
        "label": "Poliigon",
        "value": "https://www.poliigon.com/"
      }
    ]
  },
  {
    "title": "Entertainment",
    "links": [
      {
        "label": "Mangadex",
        "value": "https://mangadex.org/"
      },
      {
        "label": "Crunchyroll",
        "value": "https://www.crunchyroll.com/"
      },
      {
        "label": "Youtube",
        "value": "https://youtube.com"
      }
    ]
  },
  {
    "title": "Tools",
    "links": [
      {
        "label": "Wolfram Alpha",
        "value": "https://www.wolframalpha.com/"
      },
			{
        "label": "Coolors",
        "value": "https://coolors.co/generate"
      }
    ]
  },
  {
    "title": "Personal",
    "links": [
      {
        "label": "Gmail",
        "value": "https://mail.google.com/"
      }
    ]
  }
]`;

function isJsonString(str) {
	try {
		if (typeof str !== "string") return false;

		const json = JSON.parse(str);
		return typeof json === "object";
	} catch (e) {
		return false;
	}
}

function init_Setting() {
	const winTitle = localStorage.getItem(titleConstant),
		username = localStorage.getItem(usernameConstant),
		showClockInImage = localStorage.getItem(showClockInImgConstant),
		showClockInDate = localStorage.getItem(showClockInDateConstant),
		showSeconds = localStorage.getItem(showSecondsConstant),
		amPm = localStorage.getItem(amPmConstant),
		selectCoverImg = localStorage.getItem(selectCoverImgConstant),
		coverImg = localStorage.getItem(coverImgConstant),
		coverImgOpacity = localStorage.getItem(coverImgOpacityConstant),
		coverImgBlur = localStorage.getItem(coverImgBlurConstant),
		searchEngine = localStorage.getItem(searchEngineConstant),
		bookmarks = localStorage.getItem(bookmarksConstant);

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
		username_Display.innerText = "User";
		localStorage.setItem(usernameConstant, "User");
	}

	if (showClockInImage) {
		showClockInImage_Input.checked = showClockInImage == "true";
	} else {
		showClockInImage_Input.checked = true;
		localStorage.setItem(showClockInImgConstant, true);
	}

	if (showClockInDate) {
		showClockInDate_Input.checked = showClockInDate == "true";
	} else {
		showClockInDate_Input.checked = false;
		localStorage.setItem(showClockInDateConstant, false);
	}

	if (showSeconds) {
		showSeconds_Input.checked = showSeconds == "true";
	} else {
		showSeconds_Input.checked = true;
		localStorage.setItem(showSecondsConstant, true);
	}

	if (amPm) {
		amPm_Input.checked = amPm == "true";
	} else {
		amPm_Input.checked = true;
		localStorage.setItem(amPmConstant, true);
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

	if (coverImgOpacity) {
		coverImgOpacity_Input.value = parseFloat(coverImgOpacity);
		coverImgOpacity_Display.innerText = `(${coverImgOpacity})`;
		coverImg_Display.style.opacity = coverImgOpacity;
	} else {
		coverImgOpacity_Input.value = 0.6;
		coverImgOpacity_Display.innerText = "(0.6)";
		localStorage.setItem(coverImgOpacityConstant, "0.6");
	}

	if (coverImgBlur) {
		coverImgBlur_Input.value = parseInt(coverImgBlur);
		coverImgBlur_Display.innerText = `(${coverImgBlur} px)`;
		coverImg_Display.style.filter = `blur(${coverImgBlur}px)`;
	} else {
		coverImgBlur_Input.value = 2;
		coverImgBlur_Display.innerText = "(2 px)";
		localStorage.setItem(coverImgBlurConstant, "2");
	}

	if (searchEngine) {
		searchEngine_Input.value = searchEngine;
	} else {
		searchEngine_Input.value = "google";
		localStorage.setItem(searchEngineConstant, "google");
	}

	if (bookmarks) {
		bookmarks_Input.value = bookmarks;

		if (!isJsonString(bookmarks)) warningBookmarks_Display.innerText = "Warning: Invalid JSON format. Your input are not parseable. There are probably some syntax errors.";
	} else {
		bookmarks_Input.value = default_Bookmarks;
		localStorage.setItem(bookmarksConstant, default_Bookmarks);
	}
}

function resetDefault() {
	// prompt for confirmation
	if (!confirm("Are you sure you want to reset all settings to default?")) return;

	// once more
	if (!confirm("Are you really sure? You will lost all your personal bookmarks and settings")) return;

	// reset all settings to default
	localStorage.clear();
	init_Setting();
	loadBookmark();
}

winTitle_Input.onkeyup = (e) => {
	localStorage.setItem(titleConstant, winTitle_Input.value);
	document.title = winTitle_Input.value; // update title
};

username_Input.onkeyup = (e) => {
	localStorage.setItem(usernameConstant, username_Input.value);
	username_Display.innerText = username_Input.value;
};

showClockInImage_Input.onclick = (e) => {
	localStorage.setItem(showClockInImgConstant, showClockInImage_Input.checked);
};

showClockInDate_Input.onclick = (e) => {
	localStorage.setItem(showClockInDateConstant, showClockInDate_Input.checked);
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
		localStorage.setItem(coverImgConstant, coverImageMap[selectCoverImg_Input.value]);
		coverImg_Input.value = coverImageMap[selectCoverImg_Input.value];
		coverImg_Display.src = coverImageMap[selectCoverImg_Input.value];
	}
};

coverImg_Input.onkeyup = (e) => {
	localStorage.setItem(coverImgConstant, coverImg_Input.value);
	coverImg_Display.src = coverImg_Input.value;
};

coverImgOpacity_Input.oninput = (e) => {
	localStorage.setItem(coverImgOpacityConstant, coverImgOpacity_Input.value.toString());
	coverImgOpacity_Display.innerText = `(${coverImgOpacity_Input.value})`;
	coverImg_Display.style.opacity = coverImgOpacity_Input.value;
};

coverImgBlur_Input.oninput = (e) => {
	localStorage.setItem(coverImgBlurConstant, coverImgBlur_Input.value.toString());
	coverImgBlur_Display.innerText = `(${coverImgBlur_Input.value} px)`;
	coverImg_Display.style.filter = `blur(${coverImgBlur_Input.value}px)`;
};

searchEngine_Input.onchange = (e) => {
	localStorage.setItem(searchEngineConstant, searchEngine_Input.value);
};

bookmarks_Input.onkeyup = (e) => {
	if (!isJsonString(bookmarks_Input.value))
		warningBookmarks_Display.innerText = "Warning: Fail to parse bookmarks. There are probably some syntax errors. (Your changes will not be saved until it is fixed)";
	else {
		warningBookmarks_Display.innerText = "";
		localStorage.setItem(bookmarksConstant, bookmarks_Input.value);
		loadBookmark();
	}
};

// ------------------------------
// init setting
init_Setting();
