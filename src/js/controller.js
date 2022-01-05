import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

// Polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

// Parcel
/* if (module.hot) {
    module.hot.accept();
} */

const controlRecipes = async function() {
    try {
        // Retrieving id from hash
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        // 1) Update results view and mark the selected search results
        resultsView.update(model.getSearchResultsPage());

        // 2) Load recipes
        await model.loadRecipe(id);

        // 3) Render recipes
        recipeView.render(model.state.recipe);

    } catch (err) {
        recipeView.renderError(`${err}!!!`);
    }
};

const controlSearchResults = async function() {
    try {
        resultsView.renderSpinner();

        // 1) Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // 2) Load search results
        await model.loadSearchResults(query);

        // 3) Render results
        resultsView.render(model.getSearchResultsPage());

        // 4) Render initial pagination buttons
        paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
    }
};

const controlPagination = function(goToPage) {
    // 1) Render new results
    resultsView.render(model.getSearchResultsPage(goToPage));

    // 2) Render new pagination buttons
    paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
    // Update recipe servings in state
    model.updateServings(newServings);

    // Update recipe view
    recipeView.update(model.state.recipe);
};

const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
};
init();