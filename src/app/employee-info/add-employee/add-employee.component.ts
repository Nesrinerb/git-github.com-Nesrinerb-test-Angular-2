import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  addEmployeeForm = this._fb.group({
    name: ['', Validators.required],
    familyName: ['', Validators.required],
    date: ['', Validators.required],
    matricule: ['', Validators.required],
    categorie: ['', Validators.required],
    specialite: ['', Validators.required],
    freeDate: ['', Validators.required],
  });
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService,
    private _router: Router
  ) {}
  get name() {
    return this.addEmployeeForm.get('name');
  }
  get familyName() {
    return this.addEmployeeForm.get('familyName');
  }
  get date() {
    return this.addEmployeeForm.get('date');
  }
  get matricule() {
    return this.addEmployeeForm.get('matricule');
  }
  get categorie() {
    return this.addEmployeeForm.get('categorie');
  }
  get specialite() {
    return this.addEmployeeForm.get('specialite');
  }
  get freeDate() {
    return this.addEmployeeForm.get('freeDate');
  }

  addEmployee() {
    this.employeeService.addemployee(this.addEmployeeForm.value).subscribe(
      (response) => {
        console.log('success', response);
        this._router.navigate(['employee-info/list']);
      },
      (error) => console.error('error', error)
    );
  }
}
