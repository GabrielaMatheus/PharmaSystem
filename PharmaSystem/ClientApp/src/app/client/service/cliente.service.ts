
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from './../client.modal';
import PageResult from "src/app/util/page-result.model";
import { cloneDeep } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    
    

    constructor(private http: HttpClient){}

    getAll():Observable<Client[]>{
      return this.http.get<Client[]>(`http://localhost:5510/v1/costumer/get`);
      
    }

    getById(clientId:any):Observable<Client>{
      return this.http.get<Client>(`http://localhost:5510/v1/costumer/get/${clientId}`);
    }
        
    create(client:Client):Observable<any>{
    return this.http.post<Client>(`http://localhost:5510/v1/costumer/new`,client);
    }

    
    delete(clientId: Client): Observable<any>{
    return this.http.post<Client>(`http://localhost:5510/v1/costumer/delete/${clientId}`,'');
    }
    
    update(clientId:Client,client:Client):Observable<any>{
    return this.http.put<Client>(`http://localhost:5510/v1/costumer/update/${clientId}`,client);
    }



    
        

} 