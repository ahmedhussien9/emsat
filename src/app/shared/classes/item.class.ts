import { FormArray, FormGroup } from "@angular/forms";



export class Item {

    item: any;

    constructor(public formArray: FormArray, public index: number) {
        this.item = this.formArray.at(this.index);
    }

    getItemVAT() {
        const vat = this.item.get("vatPercentage").value;
        return vat;
    }

    getItemDiscount() {
        const discount = this.item.get("ItemDiscountAmount").value;
        return discount;
    }

    getItemUnitPrice() {
        const unitPrice = this.item.get("unitPrice").value;
        return unitPrice;
    }

    getItemQty() {
        const qty = this.item.get("quantity").value;
        return qty;
    }


    getItemTotalPriceNotIncludedDiscount() {
        return this.getItemUnitPrice() * this.getItemQty();
    }

    getItemTotalPriceAfterDiscount() {
        return this.getItemTotalPriceNotIncludedDiscount() - this.getItemDiscount();
    }

    calculateItemVatAmount() {
        return (this.getItemVAT() / 100) * this.getItemTotalPriceAfterDiscount();
    }

    totalItemPrice() {
        return this.getItemTotalPriceAfterDiscount() + this.calculateItemVatAmount();
    }

    calculateItemPrice() {
        this.getItemTotalPriceAfterDiscount();
        this.calculateItemVatAmount();
        return this.totalItemPrice().toFixed(2);
    }



}