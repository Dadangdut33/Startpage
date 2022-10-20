<p align="center">
    <img src="https://github.com/Dadangdut33/simple-wallpaper-changer/blob/master/src/preview1.png?raw=true" alt="Preview">
    <img src="https://github.com/Dadangdut33/simple-wallpaper-changer/blob/master/src/preview2.png?raw=true" alt="Preview">
</p>

<h1 align="center">About</h1>

A simple customizable startpage for your browser. Some ideas and design are inspired and taken from [r/startpages](https://reddit.com/r/startpages).

# Installation

To use this as your homepage, you have to change the homepage and new tab in your browser settings. You can either set local file, host it yourself, or use [the deployed link on github](https://dadangdut33.github.io/Startpage/). You can also fork this repository and deploy it yourself on your github account (if you prefer it that way).

- Firefox: I use [new tab override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/)
- Chromium: [Custom new tab](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia?hl=en)

# Customization

This startpage is very customizable. You can change the search engine, window title, username, favicon, cover image, opacity, blur, bookmarks, page css, etc. background, the search engine, the links, and the colors.

## Bookmarks

Bookmarks use json format. It's an array of objects that is formatted like this

```
[
  {
    "title": "Title",
    "links": [
      {
        "label": "Name",
        "value": "URL"
      }
    ]
  }
]
```

## User styles

User styles are written in css. You can change the already provided :root variables. You can also override the classes that are already provided in the [css](style.css) files.

Default variables:

```
:root {
  --bg-image: url("");
  --bg-color: #282a36;
  --card-bg-color: #44475a4d;
  --card-shadow-color: #6272a4;
  --light-color: #dbdbdb;
  --light-dim-color: #b3b3b3;
  --primary-color: #50fa7b;
  --primary-dim-color: #05a82e;
  --secondary-color: #bd93f9;
  --secondary-dim-color: #a76ef7;
  --search-input-color: #f8f8f2;
  --search-btn-color: #6272a4;
  --search-btn-hover-color: #ffffff1a;
  --gray: #44475a;
  --warning-color: #ffb86c;
  --danger-color: #ff5555;
  --danger-dim-color: #ff0000;
}
```

# Attribution

- Base design and some ideas from [r/startpages](https://reddit.com/r/startpages) mainly [startpagev2 by aman333nolawz](https://github.com/aman333nolawz/startpage-v2)
- url validator by [validator.js](https://github.com/validatorjs/validator.js)
- [Scanlines animation by LernyWensi](https://github.com/LernyWensi/Endless)

Image sources:

- [69414913](https://www.pixiv.net/en/artworks/69414913)
- [blue](https://twitter.com/i/web/status/974315063044603904)
- [lein](https://twitter.com/i/web/status/1161923643238039552)
- [corporations](https://www.artstation.com/artwork/Xnwnn3)
- [ramen](https://www.artstation.com/artwork/Xnwnn3)
- [sentinel](https://www.artstation.com/artwork/Xnwnn3)
- [neon](https://www.artstation.com/artwork/Xnwnn3)
- [samurai](https://www.artstation.com/artwork/Xnwnn3)
- [white](https://www.pixiv.net/en/artworks/69754916)
