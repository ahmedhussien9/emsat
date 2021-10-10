import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
import { tap } from "rxjs/internal/operators/tap";
import { Employees } from "src/app/shared/models/IEmployee.model";
import { EmployeeByEducationCategory, IReports } from "src/app/shared/models/Ireports.model";
import { MasjedFilterationI } from "src/app/shared/models/masjed-filteration.model";
import { GetAllEmployeesAcademicQualificationAction, GetAllEmployeesAction, GetMasjedFilterationEmployeeAction } from "../../actions/employee-academic-qualifications-actions/employee-academic-qualifications.actions";
import { GetAllMsManagmentReportsAction, GetMasjedFilterationAction } from "../../actions/ms-managment-reports-actions/ms-managment-reports.actions";
import { HttpEmployeeAcQualificationService } from "../../services/employee-ac-qualifications/employee-ac-qualification.service";


export class EmployeeAcademicQualificationStateModal {
    employees: Employees;
    employeesAcademicQualification: EmployeeByEducationCategory[];
    masjed_filteration: MasjedFilterationI;
    loaded: boolean;
}

@State<EmployeeAcademicQualificationStateModal>({
    name: "EmployeesModule",
    defaults: {
        employees: <Employees>{},
        employeesAcademicQualification: [],
        masjed_filteration: <MasjedFilterationI>{},
        loaded: false
    }
})
@Injectable()
export class EmployeeState {
    constructor(
        private httpEmployeeAcQualificationService: HttpEmployeeAcQualificationService
    ) { }

    @Selector()
    static getAllEmployeesAcademicQualifications(state: EmployeeAcademicQualificationStateModal) {
        return state.employeesAcademicQualification;
    }
    @Selector()
    static getAllEmployees(state: EmployeeAcademicQualificationStateModal) {
        return state.employees.employees;
    }
    @Selector()
    static getEmployeesTotalRecords(state: EmployeeAcademicQualificationStateModal) {
        return state.employees.numberOfRecords
    }
    @Selector()
    static getEmployeesPage(state: EmployeeAcademicQualificationStateModal) {
        return state.employees.pageNumber;
    }

    @Selector()
    static isEmployeeLoaded(state: EmployeeAcademicQualificationStateModal) {
        return state.loaded
    }

    @Selector()
    static getMasjedFilteration(state: EmployeeAcademicQualificationStateModal) {
        return state.masjed_filteration;
    }

    @Action(GetAllEmployeesAction)
    getEmployeeAcademicQualification({ getState, setState }: StateContext<EmployeeAcademicQualificationStateModal>, { pageNumber, query }: GetAllEmployeesAction) {
        return this.httpEmployeeAcQualificationService.getAllEmployeeApi(pageNumber, query).pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    employees: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetAllEmployeesAcademicQualificationAction)
    getAllEmployeeAcademicQualification({ getState, setState }: StateContext<EmployeeAcademicQualificationStateModal>) {
        return this.httpEmployeeAcQualificationService.getEmployeeAcademicQualificationApi().pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    employeesAcademicQualification: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetMasjedFilterationEmployeeAction)
    getMasjedFilteration({ getState, setState }: StateContext<GetMasjedFilterationEmployeeAction>) {
        return this.httpEmployeeAcQualificationService.getMasjedFilterationApi().pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    masjed_filteration: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }
}