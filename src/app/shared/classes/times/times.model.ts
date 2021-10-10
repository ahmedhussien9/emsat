

export class TimeClassHandler {
    hours: Number[] = [];
    mintues: Number[] = [];
    constructor(hours: Number[], mintues: Number[]) {
        this.hours = hours;
        this.mintues = mintues;
        this.getHours();
        this.getMintues();
    }

    private getHours() {
        for (let index = 0; index < 24; index++) {
            this.hours.push(index);
        }
        return this.hours;
    }
    private getMintues() {
        for (let index = 0; index < 60; index++) {
            this.mintues.push(index);
        }
        return this.mintues;
    }
}