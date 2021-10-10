

export class RemoveFromListHandler {
    private currentApiDataFiles: any[] = [];
    private currentDataDisplayed: any[] = [];
    private removedIds = [];
    constructor(
        currentApiImages: any[], attachmentDocumentsDisplayImages: any[],
    ) {
        if (attachmentDocumentsDisplayImages === undefined) {
            attachmentDocumentsDisplayImages = [];
        }
        this.currentApiDataFiles = currentApiImages;
        this.currentDataDisplayed = attachmentDocumentsDisplayImages
    }


    private mapToCurrentFilesIds() {
        return (this.currentApiDataFiles && this.currentApiDataFiles.length > 0) ? this.currentApiDataFiles.map(x => x.id) : [];
    }

    private mapToFilesAfterModification() {
        return (this.currentDataDisplayed && this.currentDataDisplayed.length) > 0 ? this.currentDataDisplayed.map(x => x.id) : [];
    }

    public removedItems() {
        this.removedIds = (this.currentApiDataFiles && this.currentApiDataFiles.length > 0) ? this.mapToCurrentFilesIds().filter(x => !this.mapToFilesAfterModification().includes(x)) : []
        return this.removedIds;
    }

    public empty() {
        return this.removedIds = [];
    }

    public assignCurrentImagesApi(): Array<any> {
        if (this.currentApiDataFiles && this.currentApiDataFiles.length > 0) {
            this.currentDataDisplayed = Array.from(this.currentApiDataFiles);
        }
        return this.currentApiDataFiles;
    }
}