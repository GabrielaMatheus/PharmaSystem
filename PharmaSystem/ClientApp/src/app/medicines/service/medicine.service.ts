import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { MedicineType} from '../medicine.model';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MedicineTypeService{

    readonly URI:string  = `/api/v1/medicine/new`; //endpoint

    constructor(private http: HttpClient){}


    getAll():Observable<MedicineType[]>{
        return this.http.get<MedicineType[]>(`http://localhost:5510/v1/medicine/get`);
      }
          
    create(medicine:MedicineType):Observable<any>{
    return this.http.post<MedicineType>(`http://localhost:5510/v1/medicine/new`,medicine);
    }

    getById(medicineId:any):Observable<any>{
        return this.http.get<MedicineType>(`http://localhost:5510/v1/medicine/get/${medicineId}`);
      }

    
    delete(medicineId: MedicineType): Observable<any>{
    return this.http.post<MedicineType>(`http://localhost:5510/v1/Medicine/delete/${medicineId}`,'');
    }
    
    update(medicineId:MedicineType,medicine:MedicineType):Observable<any>{
    return this.http.put<MedicineType>(`http://localhost:5510/v1/medicine/update/${medicineId}`,medicine);
    }
 
}