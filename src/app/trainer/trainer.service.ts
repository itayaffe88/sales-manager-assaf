import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './models';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private url = 'api/trainers'

  constructor(private http: HttpClient) { }

  public getAllTrainers() {
    return this.http.get<Trainer[]>(this.url)
  }
}
