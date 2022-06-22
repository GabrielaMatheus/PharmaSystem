import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Sales } from "../sales.model";

@Injectable({
    providedIn: 'root'
})
export class SalesService{

    constructor(private http: HttpClient){}

    
    getAll(){
         return this.http.get<Sales>(`Sales/get`);
    }

    create(sales:Sales):Observable<any>{
        return this.http.post<Sales>(`Sales/new`,sales);
    }

 }