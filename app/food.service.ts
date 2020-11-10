import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { API_TOKEN } from './token';

@Injectable()
export class FoodService {
  constructor(private http: Http, @Inject(API_TOKEN) private api: string) {}

  getFood(): Observable<any[]> {
    return this.http.get(this.api).map(response => response.json());
  }
}
