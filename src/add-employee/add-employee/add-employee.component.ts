import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateEmpSalary } from 'src/custom-validator/ValidateEmpSalary';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css'],
    standalone: false
})
export class AddEmployeeComponent {
    formData: any;
    result: any;

    employee: Employee = new Employee();
    constructor(private empService: EmployeeService) { }
    ngOnInit() {
        this.formData = new FormGroup({
            empId: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(5)]
            )),
            empName: new FormControl("", Validators.compose([
                Validators.required,
                Validators.pattern("[A-Z]+[a-zA-Z ]*")]
            )),
            empSalary: new FormControl("", Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(4),
                    ValidateEmpSalary
                ]
            )),
            empDesignation: new FormControl("", Validators.compose(
                [
                    Validators.required,
                ]
            )
            )
        });
    }

    formSubmit(data: any) {
        // console.log(this.empService.addEmployees(data));
        console.log("Form Submitted");
        console.log(data);
        this.employee.empId = data.empId;
        this.employee.empName = data.empName;
        this.employee.empSalary = data.empSalary;
        this.employee.empDesignation = data.empDesignation;
        this.save();
    }

    save() {
        this.empService.addEmployees(this.employee).subscribe({
            next: data => {
                console.log(data);
                console.log(data.message);
                this.result = data.message;
            }, error: error => {
                console.error(error)
                console.log(error.error)
            }
        });
        this.employee = new Employee();
    }

    get empId(): FormControl {
        return this.formData.get('empId');
    }
    get empName(): FormControl {
        return this.formData.get('empName');
    }
    get empSalary(): FormControl {
        return this.formData.get('empSalary');
    }
    get empDesignation(): FormControl {
        return this.formData.get('empDesignation');
    }
}
