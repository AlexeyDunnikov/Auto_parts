export function showCatalog(state) {
  const itemTmp = document.querySelector("#catalog__item-tmp");
  const catalog = document.querySelector(".catalog");

  state.forEach((item) => {
    console.log(item);

    const producer = item.producer;
    const details = item.details;

    details.forEach((detail) => {
      const itemCloned = itemTmp.content.cloneNode(true);

      //Name
      itemCloned.querySelector(".catalog__item-title").textContent =
        detail.getName();

      //Vendor code
      itemCloned.querySelector(".catalog__item-articul__value").textContent =
        detail.getVendorCode();

      //Price
      itemCloned.querySelector(".catalog__item-price__value").textContent =
        detail.getPrice();

      //Other info
      itemCloned.querySelector(".catalog__item-other__value").textContent =
        detail.getOtherInfo();

      //producer
      itemCloned.querySelector(".catalog__item-producer__value").textContent =
        producer.getName();

      catalog.append(itemCloned);
    });
  });
}
