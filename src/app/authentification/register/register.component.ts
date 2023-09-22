import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../passwordvalidator';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userForm = this._fb.group(
    {
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      genre: ['', Validators.required],
      date: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
      confpassword: [''],
    },
    { Validators: passwordValidator }
  );

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private _router: Router
  ) {}

  get name() {
    return this.userForm.get('name');
  }
  get address() {
    return this.userForm.get('address');
  }
  get phone() {
    return this.userForm.get('phone');
  }
  get genre() {
    return this.userForm.get('genre');
  }
  get date() {
    return this.userForm.get('date');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confpassword() {
    return this.userForm.get('confpassword');
  }

  registerUserForm() {
    console.log(this.userForm.value);
    this.authService.registerUserData(this.userForm.value).subscribe(
      (response) => {
        console.log('success', response);
        this._router.navigate(['employee-info/list']);
      },
      (error) => console.error('error!', error)
    );
  }
}
