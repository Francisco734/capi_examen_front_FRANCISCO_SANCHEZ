import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlBase:string = 'http://192.168.0.100:8097/api';
  prefix:string = 'users';
  fullUrl: string = `${this.urlBase}/${this.prefix}`

  constructor(private http: HttpClient) { }

  index() {
    let url = `${this.fullUrl}`;
    return this.http.get(url).pipe(map((data: any) => data));
  }
}
