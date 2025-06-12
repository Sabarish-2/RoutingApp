import { Component } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
    selector: 'app-update-employee',
    templateUrl: './update-employee.component.html',
    styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
    employee: Employee = new Employee();
    submitted = false;
    result!: string;

    // employees!:Employee[];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employee.empId = this.employeeService.getEmpId();


        this.employeeService.getEmployeeById(this.employee).subscribe({
            next: data => {
                // this.employees = data;
                this.employee.empId = data['empId'];
                this.employee.empName = data['empName'];
                this.employee.empSalary = data['empSalary'];
                this.employee.empDesignation = data['empDesignation'];
                // console.log(this.employee);
            }
        })
    }

    update(): void {
        this.employeeService.updateEmployee(this.employee).subscribe({
            next: data => this.result = data.message,
            error: error => console.log(error)
        })
        this.employee = new Employee();
    }

    onSubmit() {
        this.submitted = true;
        this.update();
    }
}
