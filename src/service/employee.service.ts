import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from 'src/model/employee';
import { EmployeeResponse } from 'src/model/EmployeeResponse';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    apiUrl = environment.apiUrl;
    empId!: number;

    private retrieveEmployeesUrl = this.apiUrl + "/employees";
    private updateEmployeeUrl = this.apiUrl + "/employees/";
    private deleteEmployeeUrl = this.apiUrl + "/employees/";
    private retrieveEmployeeByIdUrl = this.apiUrl + "/employees";
    private addEmployeesUrl = this.apiUrl + "/employees";

    constructor(private httpClient: HttpClient) {}

    public getEmployees() {
        return this.httpClient.get<Employee[]>(this.retrieveEmployeesUrl);
    }
    public getEmployeeById(employee: any) {
        this.empId = employee.empId;
        return this.httpClient.get<Employee>(this.retrieveEmployeeByIdUrl + "/" + employee.empId);
    }
    public addEmployees(employee: Employee) {
        // return this.httpClient.post<EmployeeResponse>(this.addEmployeesUrl, employee, { responseType: 'text' as 'json' });
        return this.httpClient.post<EmployeeResponse>(this.addEmployeesUrl, employee);
    }
    public updateEmployee(employee: Employee) {
        return this.httpClient.patch<EmployeeResponse>(this.updateEmployeeUrl + employee.empId + '/' + employee.empSalary, employee);
    }
    public deleteEmployee(employee: Employee) {
            return this.httpClient.delete<EmployeeResponse>(this.deleteEmployeeUrl + employee.empId);
    }
    public getEmpId() {
        return this.empId;
    }
    public setEmpId(empId: number) {
        this.empId = empId;
    }
}
