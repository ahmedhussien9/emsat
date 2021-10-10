import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExamRoutingModule } from './create-exam-routing.module';
import { CreateExamComponent } from './create-exam.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxMatDateAdapter, NgxMatDateFormats, NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { AddDurationComponent } from './add-duration/add-duration.component';

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
@NgModule({
  declarations: [
    CreateExamComponent,
    AddDurationComponent
  ],
  imports: [
    CommonModule,
    CreateExamRoutingModule,
    SharedModule,
    SelectDropDownModule,
  ],
  providers: [
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  ]
})
export class CreateExamModule { }
