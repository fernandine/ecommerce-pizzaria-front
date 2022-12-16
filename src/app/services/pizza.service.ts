import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  API = 'http://localhost:8080/pizzas';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
      )
  }

  getPizza(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.API)
      .pipe(
        retry(2),
      )
        }

  getPizzaById(id: number): Observable<Pizza> {
    return this.httpClient.get<Pizza>(this.API + '/' + id)
      .pipe(
        retry(2),
      )
  }
}
