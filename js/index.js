import { Producer } from "./producer.js";
import { Detail } from "./detail.js";
import { Order } from "./order.js";

const producer1 = new Producer(
  "Patron",
  "г.Минск, ул.Куйбышева 37",
  "+375(29)268-45-24"
);

const detail1 = new Detail("Подшипник", '16581212', '29', "Польша");
const detail2 = new Detail('Пружина', "16815130", '45', 'Чехия');

const state = {
  producer1: [detail1, detail2],
};

const addForm = document.querySelector(".add__form");
addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const target = evt.target;

  const producerName = target.producer.value;
  const producerAddress = target.address.value;
  const producerPhone = target.phone.value;

  const producer = new Producer(producerName, producerAddress, producerPhone);
  state.push(producer);

  console.log(state);
});
