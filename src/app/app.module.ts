import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeesComponent } from 'src/view-employees/view-employees.component';
import { EmployeeService } from 'src/service/employee.service';
import { AddEmployeeComponent } from 'src/add-employee/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEmployeeIdComponent } from 'src/viewEmployeeId/view-employee-id/view-employee-id.component';
import { DeleteEmployeeComponent } from 'src/delete-employee/delete-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateEmployeeComponent } from 'src/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    AddEmployeeComponent,
    ViewEmployeeIdComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent
],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
