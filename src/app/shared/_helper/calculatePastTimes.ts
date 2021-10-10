



export class CalculatePastTimes {
    format = {
        'min': {
            en: ' min ago',
            ar: " منذ دقيقة"
        },
        'hours': {
            en: ' hours ago',
            ar: " منذ دقيقة"
        },
        'days': {
            en: ' days ago',
            ar: " أيام مضت"
        },
        'weeks': {
            en: ' weeks ago',
            ar: " منذ أسابيع"
        },
        'months': {
            en: ' months ago',
            ar: " منذ أشهر"
        },
        "now": {
            en: "now",
            ar: "الآن"
        },
        "over": {
            en: "Over one year",
            ar: "أكثر من عام"
        }
    };

    language = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');

    constructor() { }


    getTimeFormat(date) {
        const times = {
            "min": 60,
            "hour": this.sq(60),
            "day": (this.sq(60) * 24),
            "week": (this.sq(60) * 24 * 7),
            "month": (this.sq(60) * 24 * 7 * 4),
            "year": (this.sq(60) * 24 * 7 * 4 * 12)
        };
        if (!date) return "";
        var d = new Date(date),
            diff = ((Date.now() - d.getTime()) / 1000);
        if (diff < times.min) {
            return this.format.now[this.language];
        } else if (diff < times.hour) {
            return Math.floor(diff / times.min) + this.format.min[this.language];
        } else if (diff < times.day) {
            return Math.floor(diff / times.hour) + this.format.hours[this.language];
        } else if (diff < times.week) {
            return Math.floor(diff / times.day) + this.format.days[this.language];
        } else if (diff < times.month) {
            return Math.floor(diff / times.week) + this.format.weeks[this.language];;
        } else if (diff < times.year) {
            return Math.floor(diff / times.month) + this.format.months[this.language];
        } //else over a year
        return this.format.over[this.language]
    }

    sq(num) {
        return num * num;
    }
}
