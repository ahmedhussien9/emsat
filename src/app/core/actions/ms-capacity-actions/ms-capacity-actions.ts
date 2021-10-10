import { MasjedQueryI } from "src/app/shared/classes/masjed-query.class";



export class GetMasjedsAction {
    static readonly type = "[Masjeds] Get"
    constructor(public pageNumber: number, public masjedOptions: MasjedQueryI) { }
}

export class GetMasjedsTypesAction {
    static readonly type = "[Masjeds Types] Get"
    constructor() { }
}

export class GetMasjedCapacityFilterationAction {
    static readonly type = "[MasjedCapacityFilteration] Get"
    constructor() { }
}

export class GetMasjedCapacityAction {
    static readonly type = "[Masjed Statisticts by Capacity] Get"
    constructor() { }
}

export class GetMasjedFilterationAction {
    static readonly type = "[MasjedMasjedFilteration] Get"
    constructor() { }
}