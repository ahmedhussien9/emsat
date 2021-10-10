
enum MessageType {
    successEn = 'has been created successfully',
    successAr = "تم الإضافة بنجاح",
    updateEn = "has been updated successfully",
    updateAr = "تم التحديث بنجاح",
    deleteEn = 'has been deleted successfully',
    deleteAr = 'تم الحذف بنجاح',
}

enum UploadImage {
    en = "Sorry, The image is required, please upload one",
    ar = "نأسف ، الصورة مطلوبة ، من فضلك أرفع الصورة",
}

enum File {
    en = "Sorry, The File is not supported!",
    ar = "نأسف ، هذا الملف غير مسموح به !"
}


export class TranslateToasterMassagesClass {
    langLocal = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    title: string = "";

    constructor(title: string) {
        this.title = title;
    }

    public success() {
        return this.langLocal === 'en' ? `${this.title} ${MessageType.successEn}` : `${this.title} ${MessageType.successAr}`;
    }

    public delete() {
        return this.langLocal === "en" ? `${this.title} ${MessageType.deleteEn}` : `${this.title} ${MessageType.deleteAr}`;
    }

    public update() {
        return this.langLocal === "en" ? `${this.title} ${MessageType.updateEn}` : `${this.title} ${MessageType.updateAr}`;
    }


}


export class GenaricToasterMessageClass {
    langLocal = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    constructor() {
    }
    public message() {
        return this;
    }
}

export class UploadImageHandlerClass {
    langLocal = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    constructor() { }

    public message() {
        return this.langLocal === 'en' ? `${UploadImage.en}` : `${UploadImage.ar}`;
    }
}

export class FileHandlerClass {
    langLocal = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    constructor() {
    }
    public message() {
        return this.langLocal === 'en' ? `${File.en}` : `${File.ar}`;
    }
}