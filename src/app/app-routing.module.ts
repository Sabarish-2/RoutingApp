import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeesComponent } from 'src/view-employees/view-employees.component';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from 'src/add-employee/add-employee/add-employee.component';
import { ViewEmployeeIdComponent } from 'src/viewEmployeeId/view-employee-id/view-employee-id.component';
import { DeleteEmployeeComponent } from 'src/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from 'src/update-employee/update-employee.component';

const routes: Routes = [
    {path: 'getEmployees', component: ViewEmployeesComponent},
    {path: 'addEmployees', component: AddEmployeeComponent},
    {path: 'getEmployeeById', component: ViewEmployeeIdComponent},
    {path: 'updateEmployee', component: UpdateEmployeeComponent},
    {path: 'deleteEmployee', component: DeleteEmployeeComponent},
    // {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
