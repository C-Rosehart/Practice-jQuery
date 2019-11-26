import $ from "jquery";
import "./index.css";

import bookmarks from "./bookmarks";
import store from "./store";
import api from "./api";

function main() {
  api.getBookmarks().then(pages => {
    pages.forEach(page => store.addPage(page));
    bookmarks.render();
  });
  bookmarks.render(store.pages);
  bookmarks.bindEventListeners();
}

$(main);
