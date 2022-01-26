import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPortalComponent } from './login-portal/login-portal.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPortalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
