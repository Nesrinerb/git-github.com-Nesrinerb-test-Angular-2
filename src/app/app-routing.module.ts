import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './authentification/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'employee-info',
    loadChildren: () =>
      import('./employee-info/employee-info.module').then(
        (m) => m.EmployeeInfoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentification/authentification.module').then(
        (m) => m.AuthentificationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
