import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeInfoRoutingModule } from './employee-info-routing.module';
import { EmployeeInfoComponent } from './employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [
    EmployeeInfoComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeInfoRoutingModule
  ]
})
export class EmployeeInfoModule { }
