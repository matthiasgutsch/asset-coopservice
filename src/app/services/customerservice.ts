import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../model/car';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCarsLarge() {
    return this.http
      .get<Car[]>('assets/data/cars.json')
      .toPromise()
      .then((res: any) => res.data);
  }
}
