
export interface Masjed {
    id: number;
    masjidID: number;
    branchID: number;
    branchNameAR: string;
    branchNameEn: string;
    masjidNumber: string;
    masjidName: string;
    typeID: number;
    masjidType: string;
    spaceCategoryID: number;
    masjidSpaceCategory: string;
    masjidCategoryID: number;
    masjidCategory: string;
    isHighwayMasjid: boolean;
    isShuhadaMasjid: boolean;
    isAdnocMasjid: boolean;
    statusID: number;
    masjidStatus: string;
}

export interface IMasjedModel {
    numberOfRecords: number;
    pageNumber: number;
    masjed: Masjed[];
}


