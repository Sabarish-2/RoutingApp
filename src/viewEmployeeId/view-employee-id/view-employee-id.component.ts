import { Component } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-view-employee-id',
  templateUrl: './view-employee-id.component.html',
  styleUrls: ['./view-employee-id.component.css'],
  standalone: false
})
export class ViewEmployeeIdComponent {
    employee: Employee = new Employee();

    constructor(private employeeService: EmployeeService) {}

    noRecordFound = false;
    submitted = false;

    search() {
        this.employeeService.getEmployeeById(this.employee).subscribe(data => {
            this.employee = data;
            if (this.employee.empId == 0) {
                this.noRecordFound = true;
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        this.search();
    }
}
