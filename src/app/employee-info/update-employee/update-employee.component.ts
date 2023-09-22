import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  updatedEmployeeForm = this._fb.group({
    name: ['', Validators.required],
    familyName: ['', Validators.required],
    date: ['', Validators.required],
    matricule: ['', Validators.required],
    categorie: ['', Validators.required],
    specialite: ['', Validators.required],
    freeDate: ['', Validators.required],
  });

  id = 0;
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get('id') || '');

    this.employeeService.getEmployee(this.id).subscribe(
      (response) => this.updatedEmployeeForm.patchValue(response),
      (error) => console.error('error', error)
    );
  }
  get name() {
    return this.updatedEmployeeForm.get('name');
  }
  get familyName() {
    return this.updatedEmployeeForm.get('familyName');
  }
  get date() {
    return this.updatedEmployeeForm.get('date');
  }
  get matricule() {
    return this.updatedEmployeeForm.get('matricule');
  }
  get categorie() {
    return this.updatedEmployeeForm.get('categorie');
  }
  get specialite() {
    return this.updatedEmployeeForm.get('specialite');
  }
  get freeDate() {
    return this.updatedEmployeeForm.get('freeDate');
  }
  updateEmployeeInfo() {
    this.employeeService
      .sendUpdatedInfo(this.updatedEmployeeForm.value, this.id)
      .subscribe(
        (response) => console.log(response),
        (error) => console.error('error', error)
      );
    this._router.navigate(['employee-info/list']);
  }
}
