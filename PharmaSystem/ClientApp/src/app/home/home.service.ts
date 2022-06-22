import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './../employee/employee.modal';

@Injectable({
    providedIn: 'root'
})
export class HomeService{
    constructor(private http: HttpClient){}

    getAll():Observable<Employee[]>{
        return this.http.get<Employee[]>(`http://localhost:5510/v1/employee/get`);
    }
}