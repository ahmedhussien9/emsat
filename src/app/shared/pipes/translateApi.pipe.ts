import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "translateApi",
    pure: false
})
export class TranslateApiPipe implements PipeTransform {
    constructor() { }
    transform(translation: any, attributeName): string {
        const currentLanaguage = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
        return translation[attributeName][currentLanaguage.toLowerCase()]
    }
}