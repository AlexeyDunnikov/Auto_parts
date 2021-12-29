import { showCatalog } from "./catalog.js";
import { state } from "./state.js";

const catalogLink = document.querySelector(".navbar__link--catalog");

export function initialNavbar(){
    catalogLink.addEventListener("click", (evt) => {
      showCatalog(state);
    });
}