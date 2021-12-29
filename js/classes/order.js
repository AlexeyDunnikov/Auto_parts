export class Order {
  constructor(producer, detail, count, date) {
    this.producer = producer;
    this.detail = detail;
    this.count = count ?? 1;
    this.date = date ?? new Date();
  }

  getProducer() {
    return this.producer;
  }

  getDetail() {
    return this.detail;
  }

  getCount() {
    return this.count;
  }

  addCount() {
    this.count += 1;
  }

  increaseCount(){
      this.count -= 1;
  };

  getDate() {
    return this.date;
  }

  getFormatDate(){
      return new Intl.DateTimeFormat('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
      }).format(this.date)
  }
}