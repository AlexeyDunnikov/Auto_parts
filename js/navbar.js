import { renderCatalog } from "./catalog.js";
import { renderCart } from "./cart.js";
import { state } from "./state.js";


const catalogLink = document.querySelector(".navbar__link--catalog");
const ordersLink = document.querySelector(".navbar__link--orders");

export function initialNavbar(){
    catalogLink.addEventListener("click", (evt) => {
      renderCatalog(state);
    });

    ordersLink.addEventListener('click', (evt) => {
        renderCart(state);
    })
}