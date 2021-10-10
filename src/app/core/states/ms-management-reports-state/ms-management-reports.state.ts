import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
import { tap } from "rxjs/internal/operators/tap";
import { IReports } from "src/app/shared/models/Ireports.model";
import { MasjedFilterationI } from "src/app/shared/models/masjed-filteration.model";
import { GetAllMsManagmentReportsAction, GetMasjedFilterationAction } from "../../actions/ms-managment-reports-actions/ms-managment-reports.actions";
import { HttpMsManagementReportsService } from "../../services/ms-management-reports/http-ms-management-reports.service";


export class MsManagementReportsStateModal {
    reports: IReports;
    masjed_filteration: MasjedFilterationI;
    loaded: boolean
}

@State<MsManagementReportsStateModal>({
    name: "MsManagementReportsModule",
    defaults: {
        reports: <IReports>{},
        masjed_filteration: <MasjedFilterationI>{},
        loaded: false
    }
})
@Injectable()
export class MsManagementReportState {
    constructor(
        private httpMsManagementReportsService: HttpMsManagementReportsService
    ) { }

    @Selector()
    static getAllReports(state: MsManagementReportsStateModal) {
        return state.reports;
    }

    @Selector()
    static isReportsLoaded(state: MsManagementReportsStateModal) {
        return state.loaded
    }

    @Selector()
    static getMasjedFilteration(state: MsManagementReportsStateModal) {
        return state.masjed_filteration;
    }
    @Action(GetAllMsManagmentReportsAction)
    getMsManagementReports({ getState, setState }: StateContext<MsManagementReportsStateModal>, { masjedOptions }: GetAllMsManagmentReportsAction) {
        return this.httpMsManagementReportsService.getAllMasjedApi(masjedOptions).pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    reports: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetMasjedFilterationAction)
    getMasjedFilteration({ getState, setState }: StateContext<MsManagementReportsStateModal>) {
        return this.httpMsManagementReportsService.getMasjedFilterationApi().pipe(
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