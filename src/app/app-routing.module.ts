import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { dashboardRoute, homeRoute } from './routes';

const routes: Routes = [
  {
    path: homeRoute,
    component: LoginPortalComponent,
  },
  {
    path: dashboardRoute,
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
