
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from '../employee.modal';
 
@Injectable({
    providedIn: 'root'
})
export class EmployeeService{

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<Employee>(`employee/get`);
    }

    create(employee:Employee):Observable<any>{
        return this.http.post<Employee>(`employee/new`,employee);
    }

}