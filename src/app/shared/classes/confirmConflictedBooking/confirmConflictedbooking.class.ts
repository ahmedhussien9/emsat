enum MessageType {
    messageEn = 'There is a conflicted bookings with this booking and will be rejected?',
    messageAr = "هناك حجوزات تتعارض مع هذا الحجز وسيتم رفضه؟",
}

enum TitleType {
    titleEn = 'Confirm Approve action',
    titleAr = 'تأكيد عملية الموافقة'
}

export class ConfirmConflictedBookingDialogClass {
    private lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    constructor() { }

    get messageText() {
        return this.lang === 'en' ? MessageType.messageEn : MessageType.messageAr;
    }

    get titleText() {
        return this.lang === 'en' ? TitleType.titleEn : TitleType.titleAr;
    }



}