
export interface Employee {
    id: number;
    employeeID: number;
    branchID: number;
    branchNameAR: string;
    branchNameEn: string;
    jobID: number;
    jobDescription: string;
    educationCategoryID: number;
    educationCategory: string;
    hifzCategoryID: number;
    hifzCategory: string;
}

export interface Employees {
    numberOfRecords: number;
    pageNumber: number;
    employees: Employee[];
}
