// import { Injectable } from '@angular/core';
// import { Action, Selector, State, StateContext } from '@ngxs/store';
// import { FilterSidenavAction } from '../actions/layout/filterSidenav.actions';

// export interface FilterSideNavModel {
//     filterSidenavState: boolean;
// }

// @State<FilterSideNavModel>({
//     name: 'FilterSidenav',
//     defaults: {
//         filterSidenavState: false
//     }
// })
// @Injectable()
// export class FilterSidenavState {
//     @Action(FilterSidenavAction)
//     showFilter(context: StateContext<FilterSideNavModel>, action: FilterSidenavAction) {
//         const current = context.getState();
//         const filterSidenavState = action.payload;
//         context.patchState({
//             filterSidenavState: filterSidenavState
//         });
//     }

//     @Selector()
//     static getFilterSidenavState(state: FilterSideNavModel) {
//         return state.filterSidenavState;
//     }
// }