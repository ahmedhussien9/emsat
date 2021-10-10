
export interface Job {
    id: number;
    description: string;
}

export interface Branch {
    id: number;
    arabicName: string;
    englishName: string;
}

export interface Type {
    id: number;
    description: string;
}

export interface MasjedFilterationI {
    job: Job[];
    branch: Branch[];
    type: Type[];
}


