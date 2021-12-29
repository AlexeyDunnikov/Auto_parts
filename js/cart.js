export function renderCart(state) {
  const orderTmp = document.querySelector(".order__item-tmp");
  const orders = document.querySelector(".orders__inner");
  const box = document.createElement("div");

  state.cart.forEach((item) => {
    const curItem = item;
    const orderClone = orderTmp.content.cloneNode(true);

    //name
    orderClone.querySelector(".order__item-title").textContent =
      item.getDetail().getName();

    //vendor code
    orderClone.querySelector(".order__item-articul__value").textContent = item
      .getDetail()
      .getVendorCode();

    //price
    orderClone.querySelector(".order__item-price__value").textContent = item
      .getDetail()
      .getFormatPrice();

    //amount
    orderClone.querySelector(".order__item-count__value").textContent = item
      .getCount();

    //total price
    const totalPrice = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "BYN",
    }).format(item.getDetail().getPrice() * item.getCount());

    orderClone.querySelector(".order__item-total-price__value").textContent =
      totalPrice;

    //other info
    orderClone.querySelector(".order__item-other__value").textContent = item
      .getDetail()
      .getOtherInfo();

    //producer
    orderClone.querySelector(".order__item-producer__value").textContent =
      item.getProducer().getName();

    //date
    orderClone.querySelector(".order__item-date__value").textContent = item.getFormatDate();

    //delete btn
    orderClone
      .querySelector(".order__item-btn")
      .addEventListener("click", (evt) => {
          
        if (curItem.getCount() === 1) {
          const ind = state.cart.indexOf(curItem);
          state.cart.splice(ind, 1);
        } else {
          curItem.increaseCount();
        }
        renderCart(state);
      });

    box.append(orderClone);
  });

  orders.innerHTML = "";
  orders.append(box);
}
