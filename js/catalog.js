import { Order } from "./classes/order.js";

export function renderCatalog(state) {
  const itemTmp = document.querySelector("#catalog__item-tmp");
  const catalog = document.querySelector(".catalog");
  const box = document.createElement("div");

  state.items.forEach((item) => {
    const producer = item.producer;
    const details = item.details;

    details.forEach((d) => {
      const detail = d;
      const itemCloned = itemTmp.content.cloneNode(true);

      //Name
      itemCloned.querySelector(".catalog__item-title").textContent =
        detail.getName();

      //Vendor code
      itemCloned.querySelector(".catalog__item-articul__value").textContent =
        detail.getVendorCode();

      //Price
      itemCloned.querySelector(".catalog__item-price__value").textContent =
        detail.getFormatPrice();

      //Other info
      itemCloned.querySelector(".catalog__item-other__value").textContent =
        detail.getOtherInfo();

      //producer
      itemCloned.querySelector(".catalog__item-producer__value").textContent =
        producer.getName();

      //button buy
      itemCloned
        .querySelector(".catalog__item-btn")
        .addEventListener("click", (evt) => {
          let find = false;
          for (let i = 0; i < state.cart.length; i++) {
            if (
              state.cart[i].getDetail().getVendorCode() === detail.getVendorCode() && state.cart[i].getProducer().getName() === producer.getName()
            ) {
              state.cart[i].addCount();
              find = true;
              break;
            }
          }

          if (!find) {
            state.cart.push(new Order(producer, detail));
          }
        });

      box.append(itemCloned);
    });
  });

  catalog.innerHTML = "";
  catalog.append(box);
}
