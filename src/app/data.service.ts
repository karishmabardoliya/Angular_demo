import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  private data =  new BehaviorSubject<any>([{'name': 'Tango', 'age': 18},{'name': 'Rango', 'age': 20},{'name':'Dog','age':5},
  {'name':'Cat','age':7},{'name':'Goku','age':20}])
  i = this.data.asObservable();

  configUrl = '../assets/data.json';

  constructor(private http:HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  changeData(i) {
    this.data.next(i);
  }
}
