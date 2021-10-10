import { MasjedQueryI } from "src/app/shared/classes/masjed-query.class"

export class GetAllEmployeesAction {
    static readonly type = "[Employees] Get"
    constructor(
        public pageNumber: number,
        public query: MasjedQueryI
    ) { }
}


export class GetAllEmployeesAcademicQualificationAction {
    static readonly type = "[EmployeesAcademicQualification] Get"
    constructor(
    ) { }
}

export class GetMasjedFilterationEmployeeAction {
    static readonly type = "[MasjedEmployeeFilteration] Get"
    constructor() { }
}