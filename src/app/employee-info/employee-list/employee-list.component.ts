import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeArray: any[] = [];
  constructor(
    private employeeService: EmployeeService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.listEmployee();
  }
  listEmployee() {
    this.employeeService.getemployees().subscribe(
      (response: any) => {
        this.employeeArray = response;
        console.log(response);
      },
      (error) => console.error('error', error)
    );
  }

  removeEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: any) => {
        console.log(response);
        this.employeeArray = this.employeeArray.filter((_) => _.id != id);
      },
      (error) => console.error('error', error)
    );
  }
  updateEmployee(id: number) {
    this._router.navigate(['employee-info/update', id]);
  }
}
