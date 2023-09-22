import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private _router: Router
  ) {}

  loginForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    this.authService.getUserData().subscribe(
      (data) => {
        const found = data.find(
          (user: any) =>
            user.email == this.loginForm.value.email &&
            user.password == this.loginForm.value.password
        );
        if (found) {
          localStorage.setItem('statut', 'connected');
          this._router.navigate(['employee-info/list']);
        } else alert('Vérifier votre mot de passe ou bien votre email!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
