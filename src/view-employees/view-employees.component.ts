import { Component } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css'],
  standalone: false
})
export class ViewEmployeesComponent {
    employees!: Employee[];

    constructor(public employeeService: EmployeeService) { 
        employeeService.getEmployees().subscribe(data => { this.employees = data; });
    }
}
