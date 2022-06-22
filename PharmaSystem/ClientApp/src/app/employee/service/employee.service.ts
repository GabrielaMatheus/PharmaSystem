
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

   


    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(`http://localhost:5510/v1/employee/get`);
      }

       getById(employeeId:any):Observable<any>{
      return this.http.get<Employee>(`http://localhost:5510/v1/employee/get/${employeeId}`);
    }
          
      create(employee:Employee):Observable<any>{
      return this.http.post<Employee>(`http://localhost:5510/v1/Employee/new`,employee);
      }
  
      
      delete(employeeId: Employee): Observable<any>{
      return this.http.post<Employee>(`http://localhost:5510/v1/Employee/delete/${employeeId}`,'');
      } 
      
      update(employeeId:Employee,employee:Employee):Observable<any>{
      return this.http.put<Employee>(`http://localhost:5510/v1/employee/update/${employeeId}`,employee);
      }
 
}