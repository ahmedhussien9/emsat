import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriteriaRoutingModule } from './criteria-routing.module';
import { CriteriaComponent } from './criteria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCriteriaComponent } from './components/add-criteria/add-criteria.component';
import { EditCriteriaComponent } from './components/edit-criteria/edit-criteria.component';
import { AddSubCriteriaComponent } from './components/add-sub-criteria/add-sub-criteria.component';
import { EditSubCriteriaComponent } from './components/edit-sub-criteria/edit-sub-criteria.component';


@NgModule({
  declarations: [
    CriteriaComponent,
    AddCriteriaComponent,
    EditCriteriaComponent,
    AddSubCriteriaComponent,
    EditSubCriteriaComponent
  ],
  imports: [
    CommonModule,
    CriteriaRoutingModule,
    SharedModule
  ]
})
export class CriteriaModule { }
