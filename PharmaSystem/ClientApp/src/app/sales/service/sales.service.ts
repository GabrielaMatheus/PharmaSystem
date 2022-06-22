import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Sales} from '../Sales.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SalesService{

    readonly URI:string  = `/api/v1/medicine/new`; //endpoint

    constructor(private http: HttpClient){}

   


     getAll():Observable<Sales[]>{
         return this.http.get<Sales[]>(`http://localhost:5510/v1/basket/get`);
       }
          
    create(sales:Sales):Observable<Sales>{
    return this.http.post<Sales>(`http://localhost:5510/v1/basket/new`,sales);
    }

   

}