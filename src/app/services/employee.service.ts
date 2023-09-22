import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employee';
  constructor(private _http: HttpClient) {}

  addemployee(employee: {}) {
    return this._http.post<{}>(this.url, employee);
  }
}
