import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { MedicineType} from '../medicine.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MedicineTypeService{

    constructor(private http: HttpClient){}

    
    getAll(){
        return this.http.get<MedicineType>(`Medicine/get`);
    }

    create(medicine:MedicineType):Observable<any>{
        return this.http.post<MedicineType>(`Medicine/new`,medicine);
    }

}