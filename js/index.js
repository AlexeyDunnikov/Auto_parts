import { Producer } from "./producer.js";
import { Detail } from "./detail.js";
import { Order } from "./order.js";
import { state } from "./state.js";
import { showCatalog } from "./catalog.js";

showCatalog(state);

// const addForm = document.querySelector(".add__form");
// addForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const target = evt.target;

//   const producerName = target.producer.value;
//   const producerAddress = target.address.value;
//   const producerPhone = target.phone.value;

//   const producer = new Producer(producerName, producerAddress, producerPhone);
//   state.push(producer);

//   console.log(state);
// });
