import { ToastrService } from 'ngx-toastr';
import { translateToasterModule } from './translateToaster';



export class UploadImageClass {

    public imageFile: File;
    public imagePreview: string | ArrayBuffer;
    public isCompleteUpload = false;
    toaster: ToastrService;
    constructor(
        toaster: ToastrService
    ) {
        this.toaster = toaster;
    }

    public uploadSingle = (event) => {
        const file = (event.target as HTMLInputElement).files[0];
        const that = this;
        const reader = new FileReader();
        if (!file) {
            return;
        }
        if (this.validateImgType(file) || this.validateImgSpecialChar(file)) {
            return this.toaster.error(translateToasterModule().validateFileMessage());
        }

        this.isCompleteUpload = true;
        this.imageFile = file;
        reader.onloadend = () => {
            that.imagePreview = reader.result
        };
        reader.readAsDataURL(file);
    }

    private validateImgType = (file) => {
        const mimeType = file.type;
        return mimeType.match(/image\/*/) == null;
    }

    private validateImgSpecialChar = (file) => {
        const nospecial = /[!@#$%^&*(),?":{}|<>]/g;
        return nospecial.test(file.name);
    }
}


