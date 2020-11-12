import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { State } from './state';

const state: State = {
  playlist: undefined
};

export class Store {
  // initialize BehaviorSubject
  private subject = new BehaviorSubject<State>(state);
  // subject as observable
  private store = this.subject.asObservable().distinctUntilChanged();

  // getter for the subject value
  get value() {
    return this.subject.value;
  }

  // return object property from the store as observable
  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  // method for creating states or updating states
  set(name: string, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state
    });
  }
}
