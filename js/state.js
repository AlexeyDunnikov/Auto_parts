import { Producer } from "./classes/producer.js";
import { Detail } from "./classes/detail.js";
import { Order } from "./classes/order.js";

const producer1 = new Producer(
  "Patron",
  "г.Минск, ул.Куйбышева 37",
  "+375(29)268-45-24"
);
const producer2 = new Producer(
  "Michlen",
  "г.Могилев, ул.Победы 16",
  "+375(29)458-63-66"
);

const detail1 = new Detail("Подшипник", "16581212", 29, "Польша");
const detail2 = new Detail("Пружина", "16815130", 45, "Чехия");
const detail3 = new Detail("Шаровая опора", "89210015", 34, "Нидерланды");

const order1 = new Order(producer1, detail1, 3);
const order2 = new Order(producer2, detail3, 2);

export const state = {
  items: [
    {
      producer: producer1,
      details: [detail1, detail2],
    },
    {
      producer: producer2,
      details: [detail2, detail3],
    },
  ],
  cart: [order1, order2]   
};
