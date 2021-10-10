
export interface Status {
    text: string;
    created_at: Date;
    _id: string;
}

export interface StudentI {
    _id: string;
    mobile: string;
    id_number: string;
    status: Status[];
    created_at: Date;
}

export interface StudentTableI {
    users: StudentI[];
    pages: number;
    length: number;
}

