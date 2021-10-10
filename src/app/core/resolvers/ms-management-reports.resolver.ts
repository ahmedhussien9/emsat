import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { map } from "rxjs/internal/operators/map";
import { MasjedQueryClass } from "src/app/shared/classes/masjed-query.class";
import { GetAllMsManagmentReportsAction } from "../actions/ms-managment-reports-actions/ms-managment-reports.actions";
import { MsManagementReportState } from "../states/ms-management-reports-state/ms-management-reports.state";


@Injectable(
    {
        providedIn: "root"
    }
)
export class IReportsResolverService implements Resolve<any> {
    constructor(private store: Store) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.dispatch(new GetAllMsManagmentReportsAction(new MasjedQueryClass().getFilterQuery())).pipe(
            map(() => this.store.selectSnapshot(MsManagementReportState))
        )
    }
}