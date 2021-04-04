import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from './product/models';
import { Trainer } from './trainer/models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    const trainers: Array<Trainer> = [
      {id:'1', firstName:'assaf', lastName:'mizrachi'},
      {id:'2', firstName:'itay', lastName:'yaffe'}
    ];

    const products: Array<Product> = [
      {
        id:'1', name:'full subscription', price:2500
      },
      {
        id:'2', name:'half subscription', price:2000
      }
    ];

    return {trainers};
  }

  public genId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
