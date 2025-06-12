import { AbstractControl } from "@angular/forms";

export function ValidateEmpSalary(control: AbstractControl) {
    if (control.value < 0) {
        return { invalidEmpSalary : true };
    }
    return null;
}