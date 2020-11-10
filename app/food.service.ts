import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  constructor(private http: Http, private api: string) {
    console.log(this.api);
  }

  getSides(): Observable<any[]> {
    return this.http.get('/api/sides').map(response => response.json());
  }

  getPizzas(): Observable<any[]> {
    return this.http.get('/api/pizzas').map(response => response.json());
  }

  getDrinks(): Observable<any[]> {
    return this.http.get('/api/drinks').map(response => response.json());
  }
}
