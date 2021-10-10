import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError } from "rxjs/internal/operators/catchError";
import { tap } from "rxjs/internal/operators/tap";
import { StatisticsByCapacity, StatisticsByType } from "src/app/shared/models/Ireports.model";
import { MasjedFilterationI } from "src/app/shared/models/masjed-filteration.model";
import { IMasjedModel } from "src/app/shared/models/masjed.model";
import { GetMasjedCapacityAction, GetMasjedCapacityFilterationAction, GetMasjedsAction, GetMasjedsTypesAction } from "../../actions/ms-capacity-actions/ms-capacity-actions";
import { GetMasjedFilterationAction } from "../../actions/ms-managment-reports-actions/ms-managment-reports.actions";
import { HttpMsManagementReportsService } from "../../services/ms-management-reports/http-ms-management-reports.service";


export class MasjedCapcitysStateModal {
    masjeds: IMasjedModel;
    masjed_filteration: MasjedFilterationI;
    totalMasjed: number;
    statisticsByType: StatisticsByType;
    statisticsByCapacity: StatisticsByCapacity;
    loaded: boolean
}

@State<MasjedCapcitysStateModal>({
    name: "MsCapacityModule",
    defaults: {
        masjeds: <IMasjedModel>{},
        masjed_filteration: <MasjedFilterationI>{},
        totalMasjed: undefined,
        statisticsByType: <StatisticsByType>{},
        statisticsByCapacity: <StatisticsByCapacity>{},
        loaded: false
    }
})
@Injectable()
export class MsCapacityReportState {
    constructor(
        private httpMsManagementReportsService: HttpMsManagementReportsService
    ) { }

    @Selector()
    static getMasjedsCapacity(state: MasjedCapcitysStateModal) {
        console.log(state.masjeds)
        return state.masjeds.masjed;
    }

    @Selector()
    static getTotalPages(state: MasjedCapcitysStateModal) {
        return state.masjeds.numberOfRecords;
    }

    @Selector()
    static getStatisticsByType(state: MasjedCapcitysStateModal) {
        return state.statisticsByType;
    }

    @Selector()
    static getStatisticsByCapacity(state: MasjedCapcitysStateModal) {
        return state.statisticsByCapacity;
    }


    @Selector()
    static isLoaded(state: MasjedCapcitysStateModal) {
        return state.loaded
    }

    @Selector()
    static getMasjedFilteration(state: MasjedCapcitysStateModal) {
        return state.masjed_filteration;
    }

    @Action(GetMasjedsAction)
    getMsstatisticsByType({ getState, setState }: StateContext<MasjedCapcitysStateModal>, { pageNumber, masjedOptions }: GetMasjedsAction) {
        return this.httpMsManagementReportsService.getMasjedsCapacityApi(pageNumber, masjedOptions).pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    masjeds: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetMasjedsTypesAction)
    getMsTypes({ getState, setState }: StateContext<MasjedCapcitysStateModal>) {
        return this.httpMsManagementReportsService.msStatisticsByTypeApi().pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    statisticsByType: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetMasjedCapacityAction)
    getMsCapacity({ getState, setState }: StateContext<MasjedCapcitysStateModal>) {
        return this.httpMsManagementReportsService.msStatisticsByCapacityApi().pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    statisticsByCapacity: response,
                    loaded: true
                })
            }), catchError((err: HttpErrorResponse) => {
                alert("Something happened. Please try again.");
                return throwError(new Error(err.message));
            })
        )
    }

    @Action(GetMasjedFilterationAction)
    getMsFilteration({ getState, setState }: StateContext<MasjedCapcitysStateModal>) {
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