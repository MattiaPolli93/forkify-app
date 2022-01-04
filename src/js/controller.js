import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

// Polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

// Parcel
if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async function() {
    try {
        // Retrieving id from hash
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 1) Loading recipes
        await model.loadRecipe(id);

        // 2) Displaying recipes
        recipeView.render(model.state.recipe);

    } catch (err) {
        recipeView.renderError(`${err}!!!`);
    }
};

const controlSearchResults = async function() {
    try {
        resultsView.renderSpinner();

        // Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // Load search results
        await model.loadSearchResults(query);

        // Render results
        resultsView.render(model.state.search.results);
    } catch (err) {
        console.log(err);
    }
};

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults)
};
init();