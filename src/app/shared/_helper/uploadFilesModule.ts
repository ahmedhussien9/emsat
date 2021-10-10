import { ToastrService } from 'ngx-toastr';
import { Helper } from './helper.class';


export class UploadFilesClass {
    attachmentDocumentsFiles: any = [];
    attachmentDocuments: any = [];
    toaster: ToastrService;
    helper: Helper;

    constructor(
        toaster: ToastrService
    ) {
        this.toaster = toaster;
        this.helper = new Helper();
    }

    public multipleFiles = (event, currentAttach?, edit?) => {
        let filesAmount = event.target.files.length;
        this.attachmentDocumentsFiles = Array.from(currentAttach) || [];
        const that = this;
        if (!this.helper.convertbytesToMegaBytes(event)) {
            this.toaster.error('Sorry, your files exceed 2 MB limit');
            return;
        };
        if (event.target.files && event.target.files[0]) {
            for (let i = 0; i < filesAmount; i++) {
                let reader = new FileReader();
                if (!this.helper.validateFilesExtensions(event.target.files[i], that.attachmentDocumentsFiles, edit)) {
                    this.toaster.error("Sorry, This file is not supported type");
                    return;
                }
                this.attachmentDocumentsFiles.push(event.target.files[i]);
                this.toaster.success("Your files has been uploaded successfully");
                reader.onload = (event: any) => {
                    that.attachmentDocuments.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }

    public multipleFilesImages = (event, currentAttach?, edit?) => {
        let filesAmount = event.target.files.length;
        this.attachmentDocumentsFiles = Array.from(currentAttach) || [];
        const that = this;
        if (!this.helper.convertbytesToMegaBytes(event)) {
            this.toaster.error('Sorry, your files exceed 2 MB limit');
            return;
        };
        if (event.target.files && event.target.files[0]) {
            for (let i = 0; i < filesAmount; i++) {
                let reader = new FileReader();
                if (!this.helper.validateImgExtensions(event.target.files[i], that.attachmentDocumentsFiles, edit)) {
                    this.toaster.error("Sorry, This file is not supported type");
                    return;
                }
                this.attachmentDocumentsFiles.push(event.target.files[i]);
                this.toaster.success("Your files has been uploaded successfully");
                reader.onload = (event: any) => {
                    that.attachmentDocuments.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
}