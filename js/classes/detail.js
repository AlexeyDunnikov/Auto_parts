export class Detail{
    constructor(name, vendorCode, price, otherInfo){
        this.name = name;
        this.vendorCode = vendorCode;
        this.price = price;
        this.otherInfo = otherInfo;
    }

    getName(){
        return this.name;
    }

    getVendorCode(){
        return this.vendorCode;
    }

    getPrice(){
        return this.price;
    }

    getFormatPrice(){
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'BYN',
        }).format(this.price);
    }

    getOtherInfo(){
        return this.otherInfo;
    }
}