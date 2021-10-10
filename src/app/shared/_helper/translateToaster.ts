

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

export function translateToasterModule() {
    
    const lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    var success, remove, update, imageRequired, validateFile;

    success = (title?) => {
        return lang === 'en' ? `${title} ${MessageType.successEn}` : `${title} ${MessageType.successAr}`;
    }

    remove = (title?) => {
        return lang === "en" ? `${title} ${MessageType.deleteEn}` : `${title} ${MessageType.deleteAr}`;
    }

    update = (title?) => {
        return lang === "en" ? `${title} ${MessageType.updateEn}` : `${title} ${MessageType.updateAr}`;
    }

    imageRequired = () => {
        return lang === 'en' ? `${UploadImage.en}` : `${UploadImage.ar}`;
    }

    validateFile = () => {
        return lang === 'en' ? `${File.en}` : `${File.ar}`;
    }


    return {
        successMessage: success,
        removeMessage: remove,
        updateMessage: update,
        imageRequiredMessage: imageRequired,
        validateFileMessage: validateFile
    }
};