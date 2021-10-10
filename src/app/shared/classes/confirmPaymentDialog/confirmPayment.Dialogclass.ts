

enum MessageType {
    messageEn = 'Are you sure you want to proceed with the payment?',
    messageAr = "هل أنت متأكد أنك تريد المضي قدمًا في الدفع؟",
}

enum TitleType {
    titleEn = 'Confirm payment action',
    titleAr = 'تأكيد عملية الدفع'
}

export class ConfirmPaymentDialogClass {
    private lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
    constructor() { }

    get messageText() {
        return this.lang === 'en' ? MessageType.messageEn : MessageType.messageAr;
    }

    get titleText() {
        return this.lang === 'en' ? TitleType.titleEn : TitleType.titleAr;
    }



}