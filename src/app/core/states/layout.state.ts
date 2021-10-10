import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FilterSidenavAction } from '../actions/layout/filterSidenav.actions';
import { CloseFilterSidenavAction, CloseSidenavAction, OpenFilterSidenavAction, OpenSidenavAction } from '../actions/layout/layout.actions';

export interface SideNavModel {
    sidenavState: boolean;
    filterSidenavState: boolean;
}

@State<SideNavModel>({
    name: 'layout',
    defaults: {
        sidenavState: true,
        filterSidenavState: false
    }
})
@Injectable()
export class LayoutState {

    @Action(OpenSidenavAction)
    openSidenav(context: StateContext<SideNavModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            sidenavState: true
        });
    }

    @Action(CloseSidenavAction)
    closeSidenav(context: StateContext<SideNavModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            sidenavState: false
        });
    }

    @Action(OpenFilterSidenavAction)
    openFilterSidenav(context: StateContext<SideNavModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            filterSidenavState: true
        });
    }


    @Action(CloseFilterSidenavAction)
    closeFilterSidenav(context: StateContext<SideNavModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            filterSidenavState: false
        });
    }

    // @Action(FilterSidenavAction)
    // showFilterSideNav(context: StateContext<SideNavModel>, action: FilterSidenavAction) {
    //     const state = context.getState();
    //     const filterSidenavState = action.payload;
    //     context.patchState({
    //         filterSidenavState: !state.filterSidenavState,
    //         sidenavState: state.filterSidenavState === true ? false : false
    //     })
    // }
    /**
     * 
     * sidenavbar => true 
       filterSidebar = false
        case 1 
        close side bar

        case 2 
        open filter 
        if the sidebar is true then change it to false 

        case 3 
        close filter 
        should show the main sidebar
     * 
     */

    @Selector()
    static getSidebarState(state: SideNavModel) {
        return state.sidenavState;
    }

    @Selector()
    static getFilterSidebarState(state: SideNavModel) {
        return state.filterSidenavState;
    }
}