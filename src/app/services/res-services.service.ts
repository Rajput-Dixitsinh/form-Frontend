import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResServicesService {

  constructor(private http : HttpClient) { }
  
  //  post
  postData(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/restaurant', data);
  }

  // get data

  getData() : Observable<any>{
    return this.http.get<any>('http://localhost:3000/restaurant/get');
  }

  //delete data
  deleteData(id: any) : Observable<any>{
   return this.http.delete<any>('http://localhost:3000/restaurant/delete/'+id);
  }
  deleteMenu(id: any) : Observable<any>{
   return this.http.delete<any>('http://localhost:3000/restaurant/deleteMenu/'+id);
  }

    // Update data
    updateData(id: any, data: any): Observable<any>{
      return this.http.put<any>('http://localhost:3000/restaurant/update/' + id, data);
    }
}
