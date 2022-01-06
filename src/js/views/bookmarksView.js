import View from "./View.js";
import previewView from "./previewView.js";

class BookmarksView extends View {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Want to try and find a new recipe?";
    _message = "";

    _generateMarkup() {
        return this._data.map(bookmark => previewView.render(bookmark, false)).join("");
    }
}

export default new BookmarksView();