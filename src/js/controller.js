// API at "https://forkify-api.herokuapp.com/v2"
import * as model from "./model.js"
import recipeView from "./views/recipeView.js"

// Polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

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
        alert(err);
    }
};

["hashchange", "load"].forEach(ev => window.addEventListener(ev, controlRecipes));