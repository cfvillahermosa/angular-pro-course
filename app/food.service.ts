import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  api = '/api/pizzas';
  constructor(private http: Http) {}
  getFood(): Observable<any[]> {
    return this.http.get(this.api).map(response => response.json());
  }
}
