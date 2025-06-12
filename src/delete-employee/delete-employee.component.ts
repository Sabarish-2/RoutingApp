import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
  standalone: false
})
export class DeleteEmployeeComponent {
    constructor(private employeeService: EmployeeService, private router :Router) {
        this.employee.empId = this.employeeService.getEmpId();
        this.employeeService.getEmployeeById(this.employee).subscribe({
            next: data => {
                this.employee.empId = data['empId'];
            }
        })
    }

    employee: Employee = new Employee();
    result!: string;
    submitted = false;
    ngOnInit() {
        
    }

    onSubmit() {
        this.submitted = true;
        this.delete();
    }

    delete() {
        this.employeeService.deleteEmployee(this.employee).subscribe({
            next: data => {
            console.log(data.message);
            this.result = data.message;
            // setTimeout(() => this.router.navigate(['/getEmployees']), 8000)
        }, error: error => {
            console.error('Error deleting employee:-', error);
            this.result = error;
            // this.router.navigate(['/getEmployees']);
        }
    });
    }

}
