import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batiment } from './models/batiment';
import { Client } from './models/client';


const HttpOptions ={
  headers : new HttpHeaders ({'content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class GestionService {
  updateBatiment(_id: String, currentBatiment: Batiment) {
    throw new Error('Method not implemented.');
  }

  apiURL : string = 'http://localhost:5000/api/batiments/';
  clients: Client[];
  batiments:Batiment[];

  constructor(private http:HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:5000/api/clients');
    }
  getBatiments(): Observable<Batiment[]> {
      return this.http.get<Batiment[]>('http://localhost:5000/api/batiments');
      }
  getClientById(id:number): Observable<Client[]> {
        return this.http.get<Client[]>('http://localhost:5000/api/clients'+id);
        }
  getBatimentByClient(id:number): Observable<Batiment[]> {
        return this.http.get<Batiment[]>('http://localhost:5000/api/batiments/search'+id);
          }

      addBatiment( bat:Batiment ):Observable<Batiment>{
        return this.http.post<Batiment>(this.apiURL,bat,HttpOptions);
      }

      delete(id:number){
        return this.http.delete(this.apiURL+id)}
    }
