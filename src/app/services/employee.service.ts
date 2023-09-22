import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employee';
  constructor(private _http: HttpClient) {}

  addemployee(employee: {}) {
    return this._http.post<{}>(this.url, employee);
  }

  getemployees(): Observable<any> {
    return this._http.get<any>(this.url);
  }

  deleteEmployee(id: number) {
    return this._http.delete<any>(`${this.url}/${id}`);
  }

  getEmployee(id: number): Observable<any> {
    return this._http.get<any>(`${this.url}/${id}`);
  }

  sendUpdatedInfo(article: any, id: number) {
    return this._http.put<any>(`${this.url}/${id}`, article);
  }
}
