
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from '../../employee.modal';
 
@Injectable({
    providedIn: 'root'
})
export class ConsultEmployeeService{

    readonly URI:string  = ``; //endpoint

    constructor(private http: HttpClient){}

    create(employee:Employee):Observable<any>{
        return this.http.post<Employee>(`${this.URI}`,employee);
    }

}