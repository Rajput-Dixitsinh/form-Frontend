import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }


  //  post
  Signups(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/signup', data);
  }

  signin(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/login', data);
  }

  Logout(): Observable<any> {
    localStorage.removeItem('token')
    localStorage.removeItem('expires_at') 
    return this.http.get<any>(`http://localhost:3000/logout`);
  }

  isLoggedIn(){

    if(localStorage.getItem('token') == 'undefined') {
      return false;
    }
    else {
      return !!localStorage.getItem('token');
    }
    
  }
}

  






