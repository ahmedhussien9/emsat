import { FormGroup } from "@angular/forms";
import { Shop } from './shop.class';


export class ShopBuilder {
    _formData: FormData;
    constructor(formData: FormData) {
        this._formData = formData;
    }

    buildShop() {
        return new Shop(this);
    }

    setFormGroup(formGroup) {
        for (const field in formGroup.controls) { // 'field' is a string
            const control = formGroup.get(field); // 'control' is a FormControl  
            this._formData.append(field, control.value)
        }
        return this;
    }

    setImages(files) {
        if (files.length > 0) {
            for (const file of files) {
                if (!file.url) {
                    this._formData.append('images', file) // file.name is optional
                }
            }
        }
        return this;
    }

    setRemovedImages(removedImages) {
        if (removedImages && removedImages.length > 0) {
            this._formData.append('removedImages', removedImages);
        }
        return this;
    }




}