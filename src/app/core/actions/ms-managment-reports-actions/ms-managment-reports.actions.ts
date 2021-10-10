import { MasjedQueryI } from "src/app/shared/classes/masjed-query.class";



export class GetAllMsManagmentReportsAction {
    static readonly type = "[Reports] Get"
    constructor(public masjedOptions: MasjedQueryI) { }
}


export class GetMasjedFilterationAction {
    static readonly type = "[MasjedFilteration] Get"
    constructor() { }
}
