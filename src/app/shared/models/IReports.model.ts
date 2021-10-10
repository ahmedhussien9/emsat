export interface EmployeeByEducationCategory {
    id: number;
    name: string;
    value: number;
}

export interface EmployeeByHifzCategory {
    id: number;
    name: string;
    value: number;
}

export interface EmployeeByJobDescription {
    id: number;
    name: string;
    value: number;
}

export interface Maintenance {
    id: number;
    arabicName: string;
    englishName: string;
    value: number;
}

export interface StatisticsByCapacity {
    id: number;
    name: string;
    count: number;
    value: string;
    min: number;
    max?: number;
}

export interface StatisticsByCategory {
    id: number;
    name: string;
    value: number;
}

export interface StatisticsByStatus {
    id: number;
    name: string;
    value: number;
}

export interface StatisticsByType {
    id: number;
    name: string;
    count: number;
    value: string;
}

export interface IReports {
    employeeByEducationCategory: EmployeeByEducationCategory[];
    employeeByHifzCategory: EmployeeByHifzCategory[];
    employeeByJobDescription: EmployeeByJobDescription[];
    maintenance: Maintenance[];
    statisticsByCapacity: StatisticsByCapacity[];
    statisticsByCategory: StatisticsByCategory[];
    statisticsByStatus: StatisticsByStatus[];
    statisticsByType: StatisticsByType[];
}