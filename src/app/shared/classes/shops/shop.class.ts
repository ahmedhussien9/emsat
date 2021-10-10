import { FormGroup } from '@angular/forms';
import { ShopBuilder } from './shop.builder';


export class Shop {
    formData: FormData;
    constructor(shopBuilder: ShopBuilder) {
        this.formData = shopBuilder._formData;
    }

}