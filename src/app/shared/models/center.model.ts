


export interface Location {
    coordinates: number[];
    _id: string;
    type: string;
    created_at: Date;
    updated_at: Date;
}

export interface Attachment {
    name: string;
    url: string;
}

export interface Image {
    name: string;
    url: string;
}

export interface CenterI {
    _id: string;
    is_archived: boolean;
    name: string;
    mobile: string;
    password: string;
    email: string;
    vat_number: string;
    address: string;
    location: Location;
    capacity: number;
    attachments: Attachment[];
    image: Image;
    created_at: Date;
    updated_at: Date;
    __v: number;
}

