import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
  constructor(private http: Http, @Inject('api') private api: string) {}

  getFood(): Observable<any[]> {
    console.log('*** api', this.api);
    return this.http.get(this.api).map(response => response.json());
  }
}
