export function renderCart(state){
    const orderTmp = document.querySelector(".order__item-tmp");
    const orders = document.querySelector('.orders__inner');
    const box = document.createElement('div');

    state.cart.forEach(item => {
        const orderClone = orderTmp.content.cloneNode(true);

        //name
        orderClone.querySelector(".order__item-title").textContent = item.detail.getName();

        //vendor code
        orderClone.querySelector(".order__item-articul__value").textContent = item.detail.getVendorCode();

        //price
        orderClone.querySelector(".order__item-price__value").textContent =
          item.detail.getFormatPrice();

        //amount
        orderClone.querySelector(".order__item-count__value").textContent = item.amount;

        //total price
        const totalPrice = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'BYN',
        }).format(item.detail.getPrice() * item.amount);

        orderClone.querySelector(".order__item-total-price__value").textContent = totalPrice;

        //other info
        orderClone.querySelector(".order__item-other__value").textContent = item.detail.getOtherInfo();

        //producer
        orderClone.querySelector(".order__item-producer__value").textContent = item.producer.getName();

        box.append(orderClone);
    })

    orders.innerHTML = box.innerHTML;
}