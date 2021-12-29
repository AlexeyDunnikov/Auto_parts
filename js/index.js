import { Producer } from "./classes/producer.js";
import { Detail } from "./classes/detail.js";
import { Order } from "./classes/order.js";
import { state } from "./state.js";
import { initialNavbar } from "./navbar.js";

const navbar = document.querySelector(".tabs");
const instance = M.Tabs.init(navbar, {});

initialNavbar();

const addForm = document.querySelector(".add__form");
addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const target = evt.target;

  const producerName = target.producer.value;
  const producerAddress = target.address.value;
  const producerPhone = target.phone.value;

  const producer = new Producer(producerName, producerAddress, producerPhone);
  const obj = {
    producer,
  };

  state.push(obj);

  console.log(state);
});
