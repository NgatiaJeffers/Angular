import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    // return this.http.get('https://api.quotable.io/random?tags=technology,famous-quotes')
    return this.http.get('https://api.openbrewerydb.org/breweries')
    
  }
}
