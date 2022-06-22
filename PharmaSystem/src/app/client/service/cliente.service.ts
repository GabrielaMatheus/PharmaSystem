
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from './../client.modal';

@Injectable({
    providedIn: 'root'
})
export class ClientService{

    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<Client>(`client/get`);
    }

    create(client:Client):Observable<any>{
        return this.http.post<Client>(`client/new`,client);
    }

}